import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage, ImageSize } from "../types";

// Helper to ensure API Key is selected for paid features like Image Gen
export const ensureApiKey = async (): Promise<void> => {
  if (window.aistudio && window.aistudio.hasSelectedApiKey) {
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await window.aistudio.openSelectKey();
    }
  }
};

// Chat Service using gemini-3-pro-preview
export const sendChatMessage = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    // We create a new instance each time to pick up potential key changes if managed externally
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Format history for the chat model
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      history: chatHistory,
      config: {
        systemInstruction: "You are a helpful assistant for Colorama, a company specializing in Aluminum and PVC windows and doors (Aberturas). Answer questions about insulation, durability, design, and installation. Be polite and concise.",
      },
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message: newMessage });
    return response.text || "Lo siento, no pude generar una respuesta.";
  } catch (error) {
    console.error("Chat Error:", error);
    throw error;
  }
};

// Image Generation Service using gemini-3-pro-image-preview (Nano Banana Pro)
export const generateWindowImage = async (prompt: string, size: ImageSize): Promise<string> => {
  try {
    // Ensure user has selected a paid key for this premium model
    await ensureApiKey();

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            text: `Photorealistic architectural visualization of: ${prompt}. High quality, professional lighting.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3", // Standard photo ratio
          imageSize: size,
        },
      },
    });

    // Parse response for image data
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    
    throw new Error("No generated image found in response");
  } catch (error) {
    console.error("Image Gen Error:", error);
    throw error;
  }
};
