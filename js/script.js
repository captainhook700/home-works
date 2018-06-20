$(document).ready(function() { 
  $(".name__input").on("keyup", function() { 
    var value = $(this).val().toLowerCase(); 
    $("#demo table").filter(function() { 
      $(this).toggle($(this).attr('data-country').toLowerCase().indexOf(value) > -1) 
    });
  });	
});

// $(document).ready(function() {
//     var search = $(this).val().toLowerCase(); 
//     $( "tr:contains('.name__input')" ).css( "text-decoration", "underline" );
// });

    function loadDoc() {
        $.ajax({
            url: 'http://restapi.fintegro.com/data.json', // Путь к файлу, к которому мы пытаемся обратиться

            dataType: 'text', // Формат данных, который мы планируем получить

            success: parseCSVData, // Callback функция выполняемая в случае успешного ответа

            beforeSend: function() { // Callback функция, выполняемая перед отправкой данных (если нужна)
                // debugger;
                $('#demo').html('Loading...'); // Добавим в контейнер надпись "Loading..." пока данные загружаются
                // debugger;
            },

            error: function() {  // Callback функция, выполняемая в случае ошибки при получении ответа
                $('#demo').html('<span style="color: red">There is some error!</span>');
            }
        });
    }


    $('button').on('click', function(){ // при клике на кнопку выполняем нашу функцию с запросом
        loadDoc();
    });

    function parseCSVData(data) { // Функция для парсинга данных CSV (так как выполняем её на success нашего
        // AJAX запроса, ей автоматически доступен параметр с данными ответа)
        // Запишем его в переменную data

        $('#demo').html(''); // Очищаем содержимое контейнера (от Loading, ошибок (если есть) и т.д.)

        var row = data.split('\n'); // Разбиваем полученные CSV данные по строкам в массив (по символу перевода строки)

        console.log('row: ', row); // Посмотрим в консоли, что из этого вышло

        var rowArray = [], i, doc = document;

        for(var i = 0; i < row.length; i++) {      // Теперь каждую строку разобьём опять же на массив отдельных элементов
            rowArray.push(row[i].split(','));  // и добавим в новый массив, который будет хранить уже готовые для использования данные
        }                                      // (так как у нас CSV разбиваем по запятой)

        for (var i = 0; i < rowArray.length; i++) {
        var div = document.createElement('div');

        for (var k = 0; k < rowArray[i].length; k++) {
        var span = document.createElement('span');

        $(span).append(rowArray[i][k]);
        $(div).append(span);
      }

      $('main').append(div);
    }



        console.log('rowArray: ', rowArray); // В результате имеем массив строк, где каждая строка является массивом ячеек

        var table = doc.createElement('table'), tr, td; // Создадим переменные для наших HTML элементов (table, tr, td)

        $(table).attr({ // добавим таблице рамку и внутренние отступы, для более приятного отображения
            border: 1,
            cellpadding: 5
        });
        
        $(tr).attr('data-country');

        // Теперь при помощи двух циклов, мы можем извлечь наши данные из массивов
        for(i = 0; i < rowArray.length; i++) {  // В этом цикле перебираем строки

            tr = doc.createElement('tr'); // создаём <tr></tr>

            for(j = 0; j < rowArray[i].length; j++) { // В этом цикле перебираем ячейки внутри каждой строки

                rowArray[i][j] = $.trim(rowArray[i][j]); // Делаем $.trim() каждой ячейки, просто чтобы убрать
                                                         // лишние пробелы по краям, если есть

                td = doc.createElement('td'); // создаём <td></td>
                $(td).append(rowArray[i][j]); // вставляем содержимое текущей ячейки массива в td

                tr.append(td); // добавляем текущий td в текущий tr
            }

            table.append(tr); // после окончания строки массива, добавляем текущий tr в table
        }

        $('#demo').append(table); // По завершении работы циклов, вставляем готовую таблицу в контейнер

    }
var idInp = $('.id');
var firstNameInp = $('.first-name');
var lastNameInp = $('.last-name');
var emailInp = $('.email');
var genderInp = $('.gender');
var cytyInp = $('.city');


idInp.keyup(function() {
  var firstSpan = $('div:not(:first-child) span:first-of-type');

  firstSpan.each(function() {
    var dataArr = [];
    dataArr.push($(this).text().split(':'));

    var clearID = dataArr[0].slice(1);
    $(this).attr('data-id', clearID);

    if ($(this).attr('data-id') === idInp.val()) {
      $('div:not(:first-of-type)').not($(this)[0].parentElement).hide();
      $(this.parentElement)[0].style.display = 'flex';
    }

  })

  if ( !!idInp.val() === false ) {
    $('div').attr('style', 'display: none;').css('display', 'flex')
  }
});