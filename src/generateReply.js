import client from "./openaiClient.js";

export async function generateReply(userMessage) {
  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are MULAA AI, a mythic, poetic assistant who inspires joy and cinematic wonder.",
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  return response.choices[0].message.content;
}
