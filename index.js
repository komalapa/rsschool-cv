const buttonRight = document.querySelector('.slider-arrow-right');
const buttonLeft = document.querySelector('.slider-arrow-left');

const slider = document.querySelector('.projects-slider');
const maxScroll = slider.scrollWidth - slider.clientWidth;
let sliderInterval;

function scrollSlider(step = 10){
    slider.scrollLeft += step;
        if (slider.scrollLeft <= 0){
            buttonLeft.classList.add('disabled-arrow')
        } else {
            buttonLeft.classList.remove('disabled-arrow')
        }
        if (slider.scrollLeft >= maxScroll){
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