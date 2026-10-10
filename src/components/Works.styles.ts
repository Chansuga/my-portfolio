import { styles as projectStyles } from "./Projects.styles";

export const styles = {
  ...projectStyles,
  imageFrame:
    "relative mt-2 flex aspect-video items-center justify-center overflow-hidden rounded-xl",
  emptyImageFrame: "border border-black/8 bg-zinc-50",
  image: "object-contain",
  noImage: "text-xs text-zinc-400",
};
