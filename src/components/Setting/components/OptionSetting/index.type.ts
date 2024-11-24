export interface TypeDataOption {
  id: string;
  value: number;
  text: string;
}

export interface TypeArrSetting {
  size: TypeDataOption[];
  time: TypeDataOption[];
  error: TypeDataOption[];
  img: TypeDataOption[];
}
