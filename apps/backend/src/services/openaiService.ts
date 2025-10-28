import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function generateStoryboard(prompt: string) {
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