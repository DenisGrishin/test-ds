const URL_MAIN = "http://localhost:3000/";

const getData = (path: string) => {
  return fetch(URL_MAIN + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Сетевая ошибка");
      }

      return res.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getMenu = () => {
  return getData("menu");
};
export const getSections = () => {
  return getData("sections");
};
export const getContacts = () => {
  return getData("contacts");
};
