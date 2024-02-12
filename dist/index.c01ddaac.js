const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".nav__list");
burgerBtn.addEventListener("click", ()=>{
    burgerBtn.classList.toggle("burger-btn--active");
    burgerMenu.classList.toggle("nav__list--shown");
    document.body.classList.toggle("body__lock");
}); // const servicesCard = document.querySelectorAll('.services__card');
 // const servicesHover = document.querySelectorAll('.services__hover');
 // servicesCard.forEach(card =>
 //   card.addEventListener('mouseenter', function (e) {
 //     if (this.classList.contains('services__card--violet')) {
 //       console.log(this.classList);
 //     }
 //   })
 // );

