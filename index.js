console.log(`
PR: https://github.com/komalapa/rsschool-cv/pull/4

Score 160/150
1) вёрстка валидная +10
2) вёрстка семантическая +20
footer(#348),
header(#22),
nav (#49)
main (#64),
section (#67 #75 #80 #86 #98 #103 #140 #154 #260 #311 #317),
time (#352)
используются заголовки h1,h2,h3

3) для оформления СV используются css-стили +10

4) контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы. +10
Фон тянется только для тех блоков, для которых это применимо по макету

5) вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
Полоса прокрутки появляется после 300px т.к. дальше уменьшать скриншоты не имеет смысла.

6) есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10
sticky меню заменяется на бургер при 635px

7) на странице СV присутствует изображение, пропорции изображения не искажены, у изображения есть атрибут alt +10
Фото, скриншоты проектов, логотип курса

8) контакты для связи и перечень навыков оформлены в виде списка ul > li +10
#32 - контакты
#105 - навыки

9) CV содержит
контакты для связи+,
краткую информацию о себе,
перечень навыков +,
примеры кода или выполненных проектов +,
информацию об образовании+ и
уровне английского +
+10

10) CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10
секция Code

11)CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
секция Projects

12) CV выполнено на английском языке +10

13) выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка +10

14) есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). +10
секция Video и Video transcription

15) дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10
Дизайн мне нравится за исключением того что скриншот проекта - ссылка (требование задания) и шапка центрирована (требование задания)
Добавлен слайдер и липкое меню.
`)



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