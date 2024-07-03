const urlSearchParams = new URLSearchParams(window.location.search);

const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const btnSplashElement = document.querySelector('#splash');
const btnKitElement = document.querySelector('#kit');
const btnPage1Element = document.querySelector('#page1');
const btnPage2Element = document.querySelector('#page2');
const btnPage3Element = document.querySelector('#page3');
const btnPage4Element = document.querySelector('#page4');
const btnPage5Element = document.querySelector('#page5');
const btnPage6Element = document.querySelector('#page6');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});

btnSplashElement.addEventListener('click', () => {
  window.location.href = 'splash.html';
});

btnKitElement.addEventListener('click', () => {
  window.location.href = 'kit.html';
});

btnPage1Element.addEventListener('click', () => {
  window.location.href = 'page1.html';
});

btnPage2Element.addEventListener('click', () => {
  window.location.href = 'page2.html';
});

btnPage3Element.addEventListener('click', () => {
  window.location.href = 'page3.html';
});

btnPage4Element.addEventListener('click', () => {
  window.location.href = 'page4.html';
});

btnPage5Element.addEventListener('click', () => {
  window.location.href = 'page5.html';
});

btnPage6Element.addEventListener('click', () => {
  window.location.href = 'page6.html';
});
