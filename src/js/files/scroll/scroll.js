// Переменная контроля добавления события window scroll.
let addWindowScrollEvent = false;
//====================================================================================================================================================================================================================================================================================================

// Работа с шапкой при скроле
export function headerScroll() {
  addWindowScrollEvent = true;
  const header = document.querySelector('header.header');
  const headerShow = header.hasAttribute('data-scroll-show'); // Добавить
  const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
  let scrollDirection = 0;
  document.addEventListener('windowScroll', function (e) {
    const scrollTop = window.scrollY;

    if (scrollTop >= startPoint) {
      !header.classList.contains('_header-scroll')
        ? header.classList.add('_header-scroll')
        : null;
      if (headerShow) {
        if (scrollTop > scrollDirection) {
          // downscroll code
          header.classList.contains('_header-show')
            ? header.classList.remove('_header-show')
            : null;
        } else {
          // upscroll code

          !header.classList.contains('_header-show')
            ? header.classList.add('_header-show')
            : null;
        }
      }
    } else {
      header.classList.contains('_header-scroll')
        ? header.classList.remove('_header-scroll')
        : null;
      if (headerShow) {
        header.classList.contains('_header-show')
          ? header.classList.remove('_header-show')
          : null;
      }
    }
    scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// При подключении модуля обработчик события запустится автоматически
setTimeout(() => {
  if (addWindowScrollEvent) {
    let windowScroll = new Event('windowScroll');
    window.addEventListener('scroll', function (e) {
      document.dispatchEvent(windowScroll);
    });
  }
}, 0);
