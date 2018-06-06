$('.tabs').tabs();

let createAlbum = $('.create');
let modal = $('.modal');
let albumTab = $('#tab-2');
let modalBtn = $('.modal__btn');

modalBtn.click( () => {
  let inputTitle = $('.modal__input:first-child').val();
  let inputDesc = $('.modal__input:last-of-type').val();

  albumTab.append(`
    <article class="albums">
      <h1>${inputTitle}</h1>
      <p>${inputDesc}</p>
    </article>
    `);

})
