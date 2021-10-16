window.addEventListener('DOMContentLoaded', () => {

    // ---------------sliider----------------------

    const prev = document.querySelector('.slider__btn_prev'),
        next = document.querySelector('.slider__btn_next'),
        slider = document.querySelector('.slider_top'),
        slidesWrapper = document.querySelector('.slider__wrapper'),
        slidesField = document.querySelector('.slider__field'),
        slides = document.querySelectorAll('.slider__slide');

    let width = 0,
        widthRace = 0;


    //получаем ширину дорожки слайдера  
    function getWidthRace() {
        slides.forEach(slide => {
            const widthItem = slide.clientWidth;
            widthRace -= widthItem;
        });

        widthRace += slidesWrapper.clientWidth;
    }

    getWidthRace();




    slidesWrapper.style.overflow = 'hidden';


    slider.style.position = 'relative';

    //запускаем движение слайдера влево
    function moveLeft() {
        width += 1;
        slidesField.style.transform = `translateX(${width}px)`;

        if (width < 0) {
            requestAnimationFrame(moveLeft);
        } else {
            moveSlider();
        }
    }
    //запускаем движение слайдера вправо
    function moveRight() {

        width -= 1;
        slidesField.style.transform = `translateX(${width}px)`;

        if (width > widthRace) {
            requestAnimationFrame(moveRight);
        } else {
            moveSlider();
        }
    }

    function moveSlider() {
        if (width > widthRace) {

            moveRight();

        } else if (width < 0) {

            moveLeft();
        }
    }

    moveSlider();


    next.addEventListener('click', () => {

        width += widthRace / 2;
        slidesField.style.transform = `translateX(${width}px)`;


    });

    prev.addEventListener('click', () => {
        width += -widthRace / 2;
        slidesField.style.transform = `translateX(${width}px)`;

    });
    slider.addEventListener('mouseenter', () => {
       console.log('hh');
    });
});