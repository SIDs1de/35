// imports

document.addEventListener('DOMContentLoaded', () => {
  const headerHeightCalculate = () => {
    const header = document.querySelector('.header');

    return header.clientHeight;
  }

  const setHeaderHeight = () => {
    const headerHeight = headerHeightCalculate();
    const main = document.querySelector('.main');
    const menu = document.querySelector('.menu');
    const menuInner = document.querySelector('.menu__inner');

    main.style.marginTop = `${headerHeight}px`;
    menu.style.paddingTop = `${headerHeight}px`;
    menuInner.style.paddingBottom = `${headerHeight}px`;

  }

  const openCloseHeaderBurger = () => {
    const headerBurgerBtn = document.querySelector('.burger');
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    headerBurgerBtn.addEventListener('click', () => {
      body.classList.toggle('_menu-open')
      html.classList.toggle('_menu-open')
    })
  }

  const menuItemsAnimationCalculate = () => {
    const menuItems = document.querySelectorAll('.menu__item');
    const stepPixels = 50;
    const stepDelay = 0.1;


    menuItems.forEach((item, idx) => {
      const multiplier = idx + 1;
      item.style.transform = `translateX(${multiplier * stepPixels}px)`
      item.style.transitionDelay = `${multiplier * stepDelay}s`
    })
  }

  const slidersActivate = () => {
    const sectionSlider = new Swiper('.slider-section__swiper', {
      // Свои классы
      wrapperClass: 'slider-section__swiper-wrapper',
      slideClass: 's-slide',

      // Количество слайдов для показа
      slidesPerView: 1,

      // Управление клавиатурой
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      // Отключение функционала
      // при изменении элементов слайдера
      watchOverflow: true,

      speed: 600,

      // Обновить свайпер
      // при изменении родительских
      // элементов слайдера
      observeParents: true,

      // Обновить свайпер
      // при изменении дочерних
      // элементов слайда
      observeSlideChildren: true,

      navigation: {
        nextEl: '.slider-section__swiper-button-next',
        prevEl: '.slider-section__swiper-button-prev',
      },

      grabCursor: true,
    });
  }

  const main = () => {
    setHeaderHeight();
    openCloseHeaderBurger();
    menuItemsAnimationCalculate();
    slidersActivate();
  }

  // Запуск функций
  main();

  window.addEventListener('resize', () => {
    setHeaderHeight();
  })
})
