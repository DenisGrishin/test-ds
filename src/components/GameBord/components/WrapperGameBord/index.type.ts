import { ReactNode } from "react";
import { TypeSetting } from "../../../../context/store/index.type";

export interface PropsWrapperGameBord {
  children: ReactNode;
  handleStartGame: () => void;
  setting: TypeSetting;
  isStart: boolean;
}
