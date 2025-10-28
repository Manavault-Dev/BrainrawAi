import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

// Create client only if API key is available
const client = apiKey ? new OpenAI({ apiKey }) : null;

export async function generateStoryboard(prompt: string) {
  if (!client) {
    throw new Error("OpenAI API key is not configured. Please set OPENAI_API_KEY in .env file.");
  }

  const sys = `You output ONLY valid JSON {title, steps:[{id,speak,draw:[...]},...]}. 
draw supports: pen(points), rect(x,y,w,h,label), text(x,y,text), arrow(from{x,y},to{x,y}).`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: sys },
      { role: "user", content: `Create a 4-step storyboard about: ${prompt}` }
    ],
    response_format: { type: "json_object" }
  });

  
  const content = completion.choices?.[0]?.message?.content;
  if (!content) {
    console.error("❌ OpenAI returned no message content");
    throw new Error("No response from model");
  }

  try {
    return JSON.parse(content);
  } catch (err) {
    console.error("❌ JSON parse error:", err);
    throw new Error("Invalid JSON response from model");
  }
}