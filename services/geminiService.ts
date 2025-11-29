import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the helpful AI Admissions Assistant for "Gemini Academy", a prestigious international school (K-12).
Your goal is to answer questions from parents and students politely, professionally, and concisely.

Here is the key information about the school:
- **Location**: Silicon Valley, California.
- **Curriculum**: We offer the International Baccalaureate (IB) Diploma Program and standard American High School Diploma.
- **Grades**: Kindergarten through Grade 12.
- **Tuition**: $25,000 per year (Financial aid is available).
- **Student-Teacher Ratio**: 12:1.
- **Values**: Innovation, Integrity, Inclusivity.
- **Motto**: "Empowering Future Leaders."
- **Application Deadline**: March 1st for the upcoming Fall semester.
- **Sports**: Basketball, Soccer, Swimming, Tennis, Robotics Team.

If you don't know an answer, politely suggest they contact the admissions office at admissions@geminiacademy.edu or call +1 (555) 012-3456.
Keep responses under 100 words unless detailed information is requested.
`;

let chatSession: Chat | null = null;

export const getGeminiChat = (): Chat => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = getGeminiChat();
  
  // Return a generator that yields chunks of text
  async function* streamGenerator() {
    try {
      const resultStream = await chat.sendMessageStream({ message });
      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }

  return streamGenerator();
};