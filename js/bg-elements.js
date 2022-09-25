const bgElements = (classBg, node = document) => {
    const elements = document.querySelectorAll(classBg);

     elements.forEach((imageBlock) => {
       const src = imageBlock.dataset.setbg;
       imageBlock.style.backgroundImage = `url(${src})`;
     });

    // for (let i = 0; i < elements.length; i++) {
    //   const src = elements[i].dataset.setbg;

    //   elements[i].style.backgroundImage = `url(${src})`;
    // }
};

bgElements(".set-bg");
