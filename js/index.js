

const inputNumber = document.querySelector('.input__number');
const inputDate = document.querySelector('.input__date');

const numberMask = new Inputmask('9999 9999 9999 9999', { placeholder: 'x' });
numberMask.mask(inputNumber);



// const dateMask = new Inputmask("99/99");
// dateMask.mask(inputDate)

const number = document.querySelector('.number');
const cardName = document.querySelector('.card__name');
const cardDate = document.querySelector('.card__date');
const inputName = document.querySelector('.input__holder')
const inputCvv = document.querySelector('.input__cvv')

const cvvMask = new Inputmask('999');
cvvMask.mask(inputCvv);



new JustValidate('.form', {
  rules: {
    holder: {
      required: true,
    },
    number: {
      required: true,
    },
    date: {
      required: true,
    },
    cvv: {
      required: true,
      minLength: 3,
      maxLength: 3,
    }
  },
  messages: {
    holder: {
      required: 'Введите имя',
    },
    number: {
      required: 'Введите номер карты',
    },
    date: {
      required: 'Введите дату',
    },
    cvv: {
      required: 'CVV код',
      minLength: 'CVV код состоит из 3 цифр',
      maxLength: 'CVV код состоит из 3 цифр',
    }
  },

  submitHandler: function (form, values, ajax) {

    number.textContent = inputNumber.value;
    cardName.textContent = inputName.value;
    cardDate.textContent = inputDate.value;
  },
});

let minDate = new Date('2021-11-03');
let maxDate = new Date('2030-12-31');

new AirDatepicker('.input__date', {
  dateFormat: 'M/yy',
  minDate,
  maxDate,
});



