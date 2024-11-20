// const apiCats = () => {
//   const headers = new Headers({
//     "Content-Type": "application/json",
//     "x-api-key":
//       "live_8ebefa97cOMbKM6oJW65faXuASHdidb0MRRRagOGM6yHtBEsSAFC8alRVCoxnHJy",
//   });

//   return fetch("https://api.thecatapi.com/v1/images/search?limit=3", {
//     method: "GET",
//     headers,
//     redirect: "follow",
//   })
//     .then((response) => response.text())
//     .then((result) => {
//       console.log(result);
//       return JSON.parse(result);
//     })
//     .catch((error) => console.log("error", error));
// };

// export default apiCats;
const getCatsApi = () => {
  return fetch("https://cataas.com/api/cats?limit=6&skip=6", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => {
      if (!result.ok) {
        throw new Error(`Ошибка в запросе!`);
      }
      return result.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default getCatsApi;
