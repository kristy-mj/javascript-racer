var track1 = document.getElementById('player1_strip');
var track2 = document.getElementById('player2_strip')

var Q = 81;
var P = 80;

document.onkeyup = function (e) {
  switch (e.keyCode) {
    case Q:
      var cells = track1.getElementsByTagName('td');
      for (var i = 0; i < cells.length; i++) {
        if (cells[i].className.indexOf('active') !== -1) {
          if (i === (cells.length - 1)) {
          }
          else {
            cells[i].className = '';
            cells[i + 1].className = 'active';
            break;
          }
        }
      }
      break;
    case P:
      var cells = track2.getElementsByTagName('td');
      for (var i = 0; i < cells.length; i++) {
        if (cells[i].className.indexOf('active') !== -1) {
          if (i === (cells.length - 1)) {
          }
          else {
            cells[i].className = '';
            cells[i + 1].className = 'active';
            break;
          }
        }
      }
      break;
  }
}
