import { ExpoRequest, ExpoResponse } from "expo-router/server";
import OpenAI from "openai";

const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
const openaikey = new OpenAI({ apiKey: OPEN_AI_KEY });

export async function GET(request: ExpoRequest) {
  const completion = await openaikey.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);

  return ExpoResponse.json({ hello: "Test API KEY" });
}
