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
export interface PropsOptionSetting {
  setSelectedValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedSetting: number;
  nameOption: string;
  keyObj: "size" | "time" | "error" | "img";
  nameRadio: string;
  isImg?: boolean;
}
