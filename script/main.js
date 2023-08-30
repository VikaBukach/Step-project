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

// -----------------5 секція---Our Amazing Work---------------
const amazingWorksTitles = document.querySelectorAll('.amazingWork__title');
const showCards = 12;
const maxCards = 36;
let currentCountCategoryItems = showCards;

amazingWorksTitles.forEach((category) => {
    category.addEventListener("click", (e) => {
        amazingWorksTitles.forEach((category) => {
            category.classList.remove('active');
        })

        e.target.classList.add('active');
        const flippingCards = document.querySelectorAll('.flipping__card');
        flippingCards.forEach((card) => {
            card.classList.remove('active');
        })

        const dataCardAttribute = e.target.getAttribute('data-category');
        currentCountCategoryItems = showCards;
        renderAmazingWorkCards(dataCardAttribute);


    })
})

const categoryList = [
    {
        categoryName: "Graphic Design",
        category: "cardGraphic",
    },
    {
        categoryName: "Web Design",
        category: "cardWeb",
    },
    {
        categoryName: "Landing Pages",
        category: "cardLanding",
    },
    {
        categoryName: "Wordpress",
        category: "cardWordpress",
    },
];

var currentCategoryType = 0;
function generateOneCard() {

    if (currentCategoryType === categoryList.length) {
        currentCategoryType = 0;
    }

    const imgSize = getRandomImageSize(200, 285);
    let flippingCard = document.createElement('div');
    flippingCard.classList.add('flipping__card');
    flippingCard.classList.add('active');
    flippingCard.setAttribute('data-category', categoryList[currentCategoryType].category);
    flippingCard.innerHTML = `<img class="flipping__card-front" src="https://source.unsplash.com/random/${imgSize}" alt="">
            <div class="flipping__card-back">
                <svg class="icon__desc" xmlns="http://www.w3.org/2000/svg" width="88" height="43"
                     viewBox="0 0 88 43" fill="none">
                    <g clip-path="url(#clip0_2143_233)">
                        <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                              fill="#1FDAB5"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                              fill="#18CFAB"/>
                        <rect x="60" y="17" width="12" height="11" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2143_233">
                            <rect width="88" height="43" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <h3 class="flipping__card-back-subtitle">creative design</h3>
                <p class="flipping__card-back-text">${categoryList[currentCategoryType].categoryName}</p>
            </div>`;

    currentCategoryType++;

    return flippingCard;
}


function renderAmazingWorkCards(dataCategory) {
    let foundFlippingCards;
    console.log(dataCategory)
    if (dataCategory === 'cardAll') {
        foundFlippingCards = document.querySelectorAll('.flipping__card')
    } else {
        foundFlippingCards = document.querySelectorAll(`.flipping__card[data-category="${dataCategory}"]`)
    }

    document.querySelectorAll('.flipping__card').forEach((card) => {
        card.classList.remove('active');
    })

    foundFlippingCards.forEach((card, index) => {
            card.classList.add('active');
    })


}

const activeDataTab = document.querySelector('.amazingWork__title.active').getAttribute('data-category')
renderAmazingWorkCards(activeDataTab);


const btnLoadMore = document.querySelector('.amazingWork__btn');
btnLoadMore.addEventListener('click', (e) => {
    btnLoadMore.style.display = 'none';
    const btnPreloader = document.querySelector('.amazingWork__preloader');
    btnPreloader.style.display = 'block';


    setTimeout(function () {
        const cardWrapper = document.querySelector('.work__card-wrapper');
        for ( let i = 0; i < showCards; i++) {
            cardWrapper.append(generateOneCard());
        }

        currentCountCategoryItems += showCards;

        const allTabs = document.querySelectorAll('.amazingWork__title');
        allTabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        const activeTab = document.querySelector('.amazingWork__title[data-category="cardAll"]');
        activeTab.classList.add('active');

        const flippingCards = document.querySelectorAll('.flipping__card');
        btnPreloader.style.display = 'none';

        if (flippingCards.length < maxCards) {
            btnLoadMore.style.display = 'flex';
        }
    }, 2000)
})

// ----------------------------7 секція-----whatPeopleSay--------

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
let indexActiveAvatar = 0
btnPrev.addEventListener("click", (e) => {
    let teamCarousel = document.querySelectorAll('.team__carousel-card');
    teamCarousel.forEach((element, index) => {
        if (element.classList.contains('active')) {
            indexActiveAvatar = index;
        }
        element.classList.remove('active');
    })
    let dataTab;
    if (indexActiveAvatar === 0) {
        indexActiveAvatar = teamCarousel.length - 1;
        teamCarousel[indexActiveAvatar].classList.add('active');
        dataTab = teamCarousel[indexActiveAvatar].getAttribute('data-tab');
    } else {
        teamCarousel[indexActiveAvatar - 1].classList.add('active');
        dataTab = teamCarousel[indexActiveAvatar - 1].getAttribute('data-tab');
    }
    const AllBigAvatars = document.querySelectorAll('.team__carousel-card-big');
    AllBigAvatars.forEach((avatar) => {
        if (avatar.getAttribute('data-tab') === dataTab) {
            avatar.style.display = 'flex'
        } else {
            avatar.style.display = 'none'
        }
    })
})

btnNext.addEventListener("click", (e) => {
    let teamCarousel = document.querySelectorAll('.team__carousel-card');
    teamCarousel.forEach((element, index) => {
        if (element.classList.contains('active')) {
            indexActiveAvatar = index;
        }
        element.classList.remove('active');
    })
    let dataTab;
    if (indexActiveAvatar === teamCarousel.length - 1) {
        indexActiveAvatar = 0;
        teamCarousel[indexActiveAvatar].classList.add('active');
        dataTab = teamCarousel[indexActiveAvatar].getAttribute('data-tab');
    } else {
        teamCarousel[indexActiveAvatar + 1].classList.add('active');
        dataTab = teamCarousel[indexActiveAvatar + 1].getAttribute('data-tab');
    }
    const AllBigAvatars = document.querySelectorAll('.team__carousel-card-big');
    AllBigAvatars.forEach((avatar) => {
        if (avatar.getAttribute('data-tab') === dataTab) {
            avatar.style.display = 'flex'
        } else {
            avatar.style.display = 'none'
        }
    })
})

// -----------------------------8 секція----Gallery of best images-----------------------------
$(document).ready(function () {
    $('#gallery__container').masonry({
        itemSelector: '.item',
        singleMode: false,
        isResizable: true,
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
        }
    });
})
// --------------------кнопка----------
const btnGallery = document.querySelector('button.gallery__btn');

btnGallery.addEventListener('click', (e) => {
    btnGallery.style.display = 'none';
    const preloader = document.querySelector('.gallery__preloader');
    preloader.style.display = 'block';

    setTimeout(function () {
        preloader.style.display = 'none';
        btnGallery.style.display = 'flex';
    }, 2000);

    generateNewImages();
})

function getRandomImageSize(min, max) {
    let width = Math.floor(Math.random() * (max - min + 1)) + min;
    let height = Math.floor(Math.random() * (max - min + 1)) + min;

    return width + 'x' + height;
}

function generateNewImages() {
    for (let i = 0; i < 6; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        const img = document.createElement("img");
        img.setAttribute("src", "https://source.unsplash.com/random/" + getRandomImageSize(100, 400));
        item.append(img);
        const galleryContainer = document.querySelector('.gallery__container');
        galleryContainer.append(item);
    }
}

















