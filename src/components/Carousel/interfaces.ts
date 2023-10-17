import { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode;
  itemWidth: number;
  length: number;
}

export interface IndicatorProps {
  length: number;
  active: number;
}
