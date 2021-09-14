const buttonRight = document.querySelector('.slider-arrow-right');
const buttonLeft = document.querySelector('.slider-arrow-left');

const slider = document.querySelector('.projects-slider');
let maxScrollWidth = slider.scrollWidth - slider.clientWidth;
let maxScrollHeight = slider.scrollHeight - slider.clientHeight;

let sliderInterval;

function scrollSlider(step = 10){
    let maxScroll = maxScrollWidth;
    let sliderScroll;
    if (window.matchMedia("(min-width: 1000px)").matches) {
        slider.scrollLeft += step;
        sliderScroll = slider.scrollLeft;
        //console.log('1',sliderScroll, maxScroll)
      } else {
        slider.scrollTop += step;
        maxScroll = maxScrollHeight;
        sliderScroll = slider.scrollTop;
        //console.log('2',sliderScroll,maxScroll)
      }
        if (sliderScroll <= 0){
            buttonLeft.classList.add('disabled-arrow')
        } else {
            buttonLeft.classList.remove('disabled-arrow')
        }
        if (sliderScroll >= maxScroll){
            buttonRight.classList.add('disabled-arrow')
        } else {
            buttonRight.classList.remove('disabled-arrow')
        }
        
}


buttonRight.addEventListener('mousedown', () => {
    sliderInterval = setInterval(() => scrollSlider(30), 100)

  })

buttonLeft.addEventListener('mousedown', () => {
    sliderInterval = setInterval(() => scrollSlider(-30), 100)


  })

buttonRight.addEventListener('mouseleave',()=>clearInterval(sliderInterval))
buttonLeft.addEventListener('mouseleave',()=>clearInterval(sliderInterval))

document.addEventListener('mouseup', ()=>clearInterval(sliderInterval))

scrollSlider(0); //init slider position

window.addEventListener('resize', ()=>{ //reinit slider on window resize
    maxScrollWidth = slider.scrollWidth - slider.clientWidth;
    maxScrollHeight = slider.scrollHeight- slider.clientHeight;; 
    slider.scrollLeft = 0;
    slider.scrollTop = 0;
    scrollSlider(0)
})

const menu = document.querySelector('.menu')
// const headerHeight = 200;
// window.addEventListener('scroll', () => {
//     console.log(window.scrollY)
//     if (window.scrollY > headerHeight) {
//         menu.classList.add("fixed-menu")
//     } else {
//         menu.classList.remove("fixed-menu")
//     }
// })

const burgerBtn = document.querySelector("#burger");

burgerBtn.addEventListener('input', ()=>{
    if (burgerBtn.checked){
        menu.classList.add("menu-burger")
    } else {
        menu.classList.remove("menu-burger")
    }
})