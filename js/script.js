$("#tabs").tabs();

$('.modalb').click( () => {
  var h3 = $('.modalw:first-child').val();
  var p = $('.modalw:last-of-type').val();

$('#tabs-2').append(`
    <div class="albums">
      <h1>${h3}</h1>
      <p>${p}</p>
    </div>
    `);
})
