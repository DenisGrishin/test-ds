export interface TypeStateGame {
  setting: TypeSetting;
  isStart: boolean;
}

export interface TypeSetting {
  numCards: number;
  sizeCard: number;
  typeCard: number;
}
export interface TypeCards {
  id: string;
  url: string;
}
