import { TypeSetting } from "../../context/store/index.type";

export interface TypeStateGame {
  setting: TypeSetting;
  isLoading: boolean;
}

export interface TypeCards {
  id: string;
  url: string;
}
