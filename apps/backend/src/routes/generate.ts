import { Router } from "express";
import { generateStoryboard } from "../services/openaiService";

export const generateRouter = Router();

generateRouter.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const storyboard = await generateStoryboard(prompt);
    res.json(storyboard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate storyboard" });
  }
});