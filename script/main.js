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
        console.log(tabsContent)
        tabsContent.forEach((element) => {
            element.classList.remove('active');
        })
        const dataAttribute = e.target.getAttribute('data-tab');
        const foundEl = document.querySelector(`.ourServices__tabs-content [data-tab="${dataAttribute}"]`);
        foundEl.classList.add('active');
    })
})

// -----------------5 секція------------------
const amazingWorksTitles = document.querySelectorAll('.amazingWork__title');
const showCards = 12;
const maxCards = 36;
let currentCountCategoryItems = showCards;

amazingWorksTitles.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        amazingWorksTitles.forEach((tab) => {
            tab.classList.remove('active');
        })

        e.target.classList.add('active');
        const flippingCards = document.querySelectorAll('.flipping__card');
        flippingCards.forEach((card) => {
            card.classList.remove('active');
        })


        const dataCardAttribute = e.target.getAttribute('data-tab');
        currentCountCategoryItems = showCards;
        renderAmazingWorkCards(dataCardAttribute);

    })
})


function renderAmazingWorkCards(dataTab) {
    let foundFlippingCards;
    if (dataTab === 'cardAll') {
        foundFlippingCards = document.querySelectorAll('.flipping__card')
    } else {
        foundFlippingCards = document.querySelectorAll(`.flipping__card[data-tab="${dataTab}"]`)
    }

    foundFlippingCards.forEach((card, index) => {
        if (index < currentCountCategoryItems) {
            card.classList.add('active');
        }else {
            card.classList.remove('active');
        }
    })

    showAmazingWorkButton(dataTab)
}

const activeDataTab = document.querySelector('.amazingWork__title.active').getAttribute('data-tab')
renderAmazingWorkCards(activeDataTab);
showAmazingWorkButton(activeDataTab);

function showAmazingWorkButton(dataTab) {
    const btnLoadMore = document.querySelector('.amazingWork__btn');
    let foundFlippingCards;
    if (dataTab === 'cardAll') {
        foundFlippingCards = document.querySelectorAll('.flipping__card')
    } else {
        foundFlippingCards = document.querySelectorAll(`.flipping__card[data-tab="${dataTab}"]`)
    }


    let foundFlippingActiveCards;
    if (dataTab === 'cardAll') {
        foundFlippingActiveCards = document.querySelectorAll('.flipping__card.active')
    } else {
        foundFlippingActiveCards = document.querySelectorAll(`.flipping__card.active[data-tab="${dataTab}"]`)
    }

    if (foundFlippingActiveCards.length < foundFlippingCards.length && foundFlippingActiveCards.length < maxCards) {
        btnLoadMore.style.display = 'flex';
    } else {
        btnLoadMore.style.display = 'none';
    }
}

const btnLoadMore = document.querySelector('.amazingWork__btn');
btnLoadMore.addEventListener('click', (e) => {
    const dataTab = document.querySelector('.amazingWork__title.active').getAttribute('data-tab');

    currentCountCategoryItems += showCards;
    if (currentCountCategoryItems > maxCards) {
        currentCountCategoryItems = maxCards;
    }
    renderAmazingWorkCards(dataTab);
})


// -----------------------------8 секція----Gallery of best images-----------------------------
$(document).ready(function () {
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