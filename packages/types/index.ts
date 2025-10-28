export type DrawCommand =
  | { type: "pen"; points: Array<{ x: number; y: number }>; label?: string }
  | { type: "rect"; x: number; y: number; w: number; h: number; label?: string }
  | { type: "text"; x: number; y: number; text: string }
  | { type: "arrow"; from: { x: number; y: number }; to: { x: number; y: number } };

export type StoryboardStep = {
  id: string;
  speak: string;
  draw: DrawCommand[];
};

export type Storyboard = {
  title: string;
  steps: StoryboardStep[];
};