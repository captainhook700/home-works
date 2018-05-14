$(document).ready(function(){
         $.fn.animate_Text = function() {
          var string = this.text();
          return this.each(function(){
           var $this = $(this);
           $this.html(string.replace(/./g, '<span class="new">$&</span>'));
           $this.find('span.new').each(function(i, el){
            setTimeout(function(){ $(el).addClass('div_opacity'); }, 50 * i);
           });
          });
         };
         $('.text').show();
         $('.text').animate_Text();
        
});
 
    $(document).keydown(function(event) {
        $(".text").hide();
    if(event.keyCode === 13)
    {
        $(".container").css("display", "block");
        $("button").css("display", "block");
    }
});

(function() {
  $('button').click(function(e) {        

      var container = $('.container');

      // Координаты начала контейнера                
      var containerStart = container.offset();                
      console.log('Координаты начала контейнера:', container.offset());

      // Следовательно
      console.log('Отступ слева:', containerStart.left);
      console.log('Отступ сверху:', containerStart.top);

      // Ширина и высота контейнера        
      console.log('Ширина и высота контейнера:', container[0].clientWidth, container[0].clientHeight);
      var containerLeft = containerStart.left;
      var containerTop = containerStart.top;
      var containerWidth = container[0].clientWidth;
      var containerHeight = container[0].clientHeight;
      var containerEndLeft = (containerStart.left + containerWidth);
      var containerEndTop = (containerStart.top + containerHeight);
    //   console.log('Координаты end контейнера:', container[0].clientWidth + container[0].clientHeight) + container.offset();
    // * 1. После этого мы можем получить координаты конца контейнера сложив его ширину и длину с координатами начала  
      console.log('Отступ слева:', containerLeft);
      console.log('Отступ сверху:', containerTop);
      console.log('Ширина контейнера:', containerWidth);
      console.log('высота контейнера:', containerHeight);
      console.log('end контейнера:', containerEndLeft);
      console.log('end контейнера:', containerEndTop);
      /**
       
       * 2. Теперь у нас есть все 4 границы области, куда будет вставляться прямоугольник. То есть мы должны его
       *    вставить на страницу так, чтобы его координаты были случайными, но при этом не больше и не меньше
       *    координатов краёв нашего контейнера.
       * 3. Ширину, высоту и цвет прямоугольника, мы также можем выбрать случайным образом из заданного диапазона чисел
       * 4. Напоминаю как создавать генератор случайных чисел (например от 1 до 10) 
       *    Math.floor(Math.random() * 10) + 1
       */

      // Пример вставки прямоугольника на страницу
    //   var squareWidth = 200;
      var squareWidth = getRandomInRangeW(10, (containerWidth-100));
      function getRandomInRangeW(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
    //   var squareHeight = 100;
      var squareHeight = getRandomInRangeH(10, (containerHeight-100));
      function getRandomInRangeH(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    //   var squareLeft = 400;

      var squareLeft = getRandomInRangeL(0,(containerWidth- squareWidth));
      function getRandomInRangeL(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    //   var squareTop = 200;

      var squareTop = getRandomInRangeT(0,(containerHeight- squareHeight));
      function getRandomInRangeT(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      var bacCol = get_random_color();
        function get_random_color() {
            function c() {
            var hex = Math.floor(Math.random()*256).toString(16);
            return ("0"+String(hex)).substr(-2); // pad with zero
            }
            return "#"+c()+c()+c();
        }
      var square = '<div id="square" class="draggable" style="width: ' + squareWidth + 'px; height: ' + squareHeight + 'px; position: absolute;  left: ' + squareLeft + 'px; background: ' + bacCol  + '; top: ' + squareTop + 'px"></div>';
      container.append(square);   


      document.onmousedown = function(e) {
        var target = e.target;
        if(!target.classList.contains('draggable')) return;
     
        var coords = getCoords(target);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;
     
        target.style.position = 'absolute';
        target.style.zIndex = 1000;
        document.body.appendChild(target);
        moveAt(e);
     
        
        function moveAt(e) {
           var left = e.pageX - shiftX;
           if(left < containerLeft) left = containerLeft;
           if(left > containerWidth) left = (containerEndLeft - squareWidth);
           target.style.left = left + 'px';
     
           var top = e.pageY - shiftY;
           if(top < containerTop) top = containerTop;
           if(top > containerHeight) top = ((containerHeight + 20) - squareHeight);
           target.style.top = top + 'px';
        }
     
        document.onmousemove = function(e) {
           moveAt(e);
        }
     
        document.onmouseup = function(e) {
           document.onmousemove = null;
           document.onmouseup = null;
        }
     }
     
     function getCoords(element) {
        var box = element.getBoundingClientRect();
     
        return {
           left: box.left + pageXOffset,
           top: box.top + pageYOffset
        }
     };
     
     document.ondragstart = function(e) {
        return false;
     };

     document.oncontextmenu = function(e) {
              // return false;
              $('#square').remove();
            };
  });
}());


    
