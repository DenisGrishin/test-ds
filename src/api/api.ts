import { TypeCards } from "../container/GameBordContainer/index.type";

const getImageApi = (arrUrls: TypeCards[]) => {
  const loadImageAsync = (url: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = () =>
        reject(new Error(`Ошибка загрузки изображения: ${url}`));
    });
  };

  return Promise.all(arrUrls.map((img) => loadImageAsync(img.url)))
    .then((images) => {
      return images;
    })
    .catch((error) => {
      console.error("Ошибка при загрузке изображений:", error);
      throw error;
    });
};

export default getImageApi;
