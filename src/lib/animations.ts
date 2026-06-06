export const FADE_EASE = "cubic-bezier(0.16,1,0.3,1)";

export const FADE_UP_TRANSITION = (delay = 0) =>
  `opacity 0.9s ${FADE_EASE} ${delay}s, transform 0.9s ${FADE_EASE} ${delay}s`;
