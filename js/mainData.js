const mainData = () => {
  fetch('./db.json')
    .then((responce) => {
      return responce.json();
    })
    .then((anime) => {
      console.log("data: ", anime);
    });
};

mainData();
