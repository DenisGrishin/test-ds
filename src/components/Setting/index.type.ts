import { TypeSelectedSetting } from "../../container/SettingContainer/indx.type";

export interface PropsSetting {
  selectedSetting: TypeSelectedSetting;
  setSelectedValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
