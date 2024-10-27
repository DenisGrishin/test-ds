document.addEventListener('DOMContentLoaded', () => {
  // form отправка
  function sendEmail(params) {
    const forms = document.querySelectorAll('form');
    const finishForm = document.querySelector('.finish-form');

    if (forms !== 0) {
      forms.forEach((form) => {
        const wrapperInput = form.querySelector('.block-input');
        const input = form.querySelector('.block-input__email-input');
        const checkbox = form.querySelector('.checkbox__input');
        const labelСheckbox = form.querySelector('.checkbox__label');

        input.addEventListener('input', (e) => {
          let value = e.target.value;

          deletStateValidate(wrapperInput);

          if (value && validateEmail(value)) {
            wrapperInput.classList.add('_correct');
          }
        });

        // событие если есть чекбокс в форме
        if (checkbox) {
          checkbox.addEventListener('change', () => {
            if (!checkbox.checked) {
              return;
            }
            deletStateValidate(wrapperInput);
            wrapperInput.classList.add('_correct');
            labelСheckbox.classList.remove('_error');
          });
        }

        form.addEventListener('submit', function (e) {
          e.preventDefault();

          // валидация на пустое поле и почту
          if (!validateEmail(input.value)) {
            createElementText(
              wrapperInput,
              'block-input__text-error',
              'Formato de email inválido,<br> verifique a ortografia'
            );
            return;
          }
          // валидация на чекбокс
          if (checkbox && !checkbox.checked) {
            labelСheckbox.classList.add('_error');

            createElementText(
              wrapperInput,
              'block-input__text-error',
              'Требуется ваше согласие<br> на обработку данных'
            );
            return;
          }

          //тут должен быть какой-то поромис, и если он срабатывает, покзываем блок финишь, а если нет то показываем ошибку............
          if (wrapperInput) {
            let isClassCheckbox = checkbox
              ? 'finish-form'
              : 'finish-form_no-chckBox';

            form.style.display = 'none';
            createElementText(
              wrapperInput.parentElement.parentElement,
              isClassCheckbox,
              'Fantástico! Espera<br> La primera carta'
            );
          }
        });
      });
    }

    // создание текст с ошибкой и финиша
    function createElementText(seletor, classStyle, text) {
      deletStateValidate(seletor);

      seletor.insertAdjacentHTML(
        'beforeend',
        `<div class="${classStyle}">${text}</div>`
      );
      seletor.classList.add('_error');
    }

    // валидация почты возвращает true / false
    function validateEmail(email) {
      const regExtEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
      return regExtEmail.test(email);
    }

    // удаляет классы состояния, и блок текста ошибки  если он есть
    function deletStateValidate(wrapperInput) {
      const textError = document.querySelector('.block-input__text-error');

      textError ? textError.remove() : '';
      wrapperInput.classList.remove('_error');
      wrapperInput.classList.remove('_correct');
    }
  }

  sendEmail();
});
