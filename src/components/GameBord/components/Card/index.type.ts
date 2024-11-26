export interface PropsCard {
  flipCard: (indx: number, isCurrentOpen: boolean) => void;
  indx: number;
  isFlip: boolean;
  urlImg: string;
  sizeCard: number;
}
