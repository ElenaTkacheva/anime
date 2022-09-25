const mainData = () => {

    const renderAnimeList = (array, ganres) => {
      console.log("ganres: ", ganres);
      console.log("array: ", array);
    };


    const renderTopAnime = (array) => {
      const wrapper = document.querySelector(".filter__gallery");

      wrapper.innerHTML = "";
      array.forEach((item) => {
        wrapper.insertAdjacentHTML(
          "afterbegin",
          `
                <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
                    <div class="ep">${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>              
            `
        );
      });

    //   bgElements(".set-bg", wrapper);

        wrapper.querySelectorAll('.set-bg').forEach((elem) => {
            elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
        });
    };

  fetch('./db.json')
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {

       const ganres = new Set();

       // вывод первых 5 самых просматриваемых аниме на основе значения views
       renderTopAnime(data.anime.sort((a, b) => b.views - a.views).slice(0, 5));

       data.anime.forEach((item) => {
         ganres.add(item.ganre);
       });

       renderAnimeList(data.anime, ganres);

    });
};

mainData();
