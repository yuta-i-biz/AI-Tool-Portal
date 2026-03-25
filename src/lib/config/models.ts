export const GEMINI_MODELS = {
  smart: "gemini-1.5-pro",
  fast: "gemini-1.5-pro",
} as const;

export type ModelType = keyof typeof GEMINI_MODELS;

export function getModelName(type: ModelType = "fast"): string {
  return GEMINI_MODELS[type];
}
