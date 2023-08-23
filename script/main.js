'use strict'
// --------------------------------3 секція Our Services--------------------
const menuTabs = document.querySelectorAll('.ourServices__title');
menuTabs.forEach((element) => {
    element.addEventListener("click", (e) => {
        const allTabs = document.querySelectorAll('.ourServices__title');
        allTabs.forEach((element) => {
            element.classList.remove('active');
        })
        e.target.classList.add('active');

        const tabsContent = document.querySelectorAll('.ourServices__tabs-content li');
        tabsContent.forEach((element) => {
            element.style.display = 'none';
        })
        const dataAttribute = e.target.getAttribute('data-tab');
        const foundEl = document.querySelector(`.ourServices__tabs-content [data-tab="${dataAttribute}"]`);
        foundEl.style.display = 'flex';

    })

})



















// -----------------------------8 секція----Gallery of best images-----------------------------
$(document).ready(function(){
    $('#gallery__container').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
        itemSelector: '.item',
// указываем класс элемента являющегося блоком в нашей сетке
        singleMode: false,
// true - если у вас все блоки одинаковой ширины
        isResizable: true,
// перестраивает блоки при изменении размеров окна
        isAnimated: true,
// анимируем перестроение блоков
        animationOptions: {
            queue: false,
            duration: 500
        }
// опции анимации - очередь и продолжительность анимации
    });
})