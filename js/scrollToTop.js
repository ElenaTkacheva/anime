const scroll = () => {
    const topBtn = document.querySelector("#scrollToTopButton");

    topBtn.addEventListener("click", (event) => {
      event.preventDefault();

      /* работает не кроссбраузерно
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    */

      seamless.scrollIntoView(document.querySelector(".header"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
};

scroll();



