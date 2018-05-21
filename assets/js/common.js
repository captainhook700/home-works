  var inp = document.querySelectorAll('input');
  var btn = document.querySelector('button');

  inp[0].addEventListener('keyup', function() {
    if (this.value.indexOf('@') == -1) {
      this.style.border='1px solid grey';
    } else {
      this.style.border='2px solid green';
    }
  })

  inp[1].addEventListener('keyup', function() {
    if (this.value) {
      this.style.border='2px solid green';
      inp[2].removeAttribute('disabled');
      inp[2].style.cursor='inherit';
    } else {
      this.style.border='1px solid grey';
    }
  })

  inp[2].addEventListener('keyup', function() {
    if (this.value != inp[1].value) {
      this.style.border='2px solid red';
    } else {
      this.style.border='2px solid green';
    }
    if (getComputedStyle(inp[0]).border == '2px solid rgb(0, 128, 0)') {
      btn.removeAttribute('disabled');
      btn.style.cursor='pointer';
    }
  })

  btn.addEventListener('click', function() {
    if (inp[2].value != inp[1].value) {
      alert('Проверьте правильность ввода!');
      inp[1].style.border='2px solid red';
    } else {
      alert('Данные успешно отправлены!')
      console.log(inp[0].value='')
    }
  })

  if (btn.hasAttribute('disabled') && inp[2].hasAttribute('disabled')) {
    btn.style.cursor='not-allowed';
    inp[2].style.cursor='not-allowed';
  }
