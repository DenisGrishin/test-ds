import PreloaderImg from "../../assets/img/icons/Preloader.gif";
import style from "./preloader.module.scss";

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img src={PreloaderImg} alt="Preloader" />
    </div>
  );
};

export default Preloader;
