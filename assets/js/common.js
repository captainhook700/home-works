$(window).ready(function() {
  $articleTag.css({
    height: '150px',
    lineHeight: '150px'
  });
});

var $bodyTag = $('body');
$bodyTag.prepend('<article>Press Enter to start.</article>');

var $articleTag = $('article');
$articleTag.css({
  width: '400px',
  height: '0px',
  overflow: 'hidden',
  borderRadius: '5px',
  fontFamily: 'monospace',
  fontSize: '20px',
  background: 'linear-gradient(to bottom, #f5f5f5, #cccccc)',
  textAlign: 'center',
  margin: 'auto',
  transition: '1s'
});

$(this).one("keypress", toStart);

function toStart(e) {
  var keyCode = e.keyCode;

  if(keyCode == 13) {
    $articleTag.css('display', 'none');
    $bodyTag.append('<section></section>');

    var $sectionTag = $('section');

    $sectionTag.css({
      width: '80%',
      height: '600px',
      borderRadius: '5px',
      background: 'linear-gradient(to bottom, #f5f5f5, #cccccc)',
      margin: '20px auto',
      position: 'relative',
      transition: '2s'
    });

    $sectionTag.after('<button>Add Elements</button>');

    var $buttonTag = $('button');

    $buttonTag.css({
      marginLeft: '10%',
      border: 'none',
      borderRadius: '5px',
      outline: 'none',
      padding: '0 20px',
      cursor: 'pointer',
      fontSize: '16px',
      lineHeight: '50px',
      background: 'linear-gradient(to bottom, #f5f5f5, #cccccc)',
      fontFamily: 'monospace',
      transition: '2s'
    });

    $buttonTag.on('click', addElements);

    function addElements() {
      function randomSize(min, max) {
        return 0|(Math.random() * (max - min + 1) + min);
      }

      $sectionTag.append('<div></div>').find('div:last-child').css({
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: randomSize(100, 150) + 'px',
        height: randomSize(100, 150) + 'px',
        position: 'absolute',
        opacity: '0.9',
        backgroundColor: '#' + String(randomSize(100000, 900000)),
        top: randomSize(0, 75) + '%',
        left: randomSize(0, 85) + '%'
      });

      var $divTag = $('div');

      $divTag.on('mousedown', function() {
        var offsetLeft = event.target.offsetLeft;
        var offsetTop = event.target.offsetTop;
        var marginX = event.pageX - offsetLeft;
        var marginY = event.pageY - offsetTop;

        $(this).addClass('active');

        $sectionTag.on('mousemove', function() {
          var newLeft = event.pageX - marginX;
          var newTop = event.pageY - marginY;

          if (newLeft < 0) newLeft = 0;
          if (newTop < 0) newTop = 0;

          var newRight = $sectionTag[0].offsetWidth - event.target.offsetWidth;
          if (newLeft > newRight) newLeft = newRight;

          var newBottom = $sectionTag[0].offsetHeight - event.target.offsetHeight;
          if (newTop > newBottom) newTop = newBottom;

          $('.active').css({
            zIndex: '2',
            left: newLeft,
            top: newTop
          });
        });

        $divTag.on('mouseup', function() {
          $(this).removeClass('active');
          $(this).css('z-index', '1');
          $sectionTag.off('mousemove');
        });
      });
    }
  }
}
