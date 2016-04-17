/*// Find a <table> element with id="myTable":
var table = document.getElementsByClassName('racer_table');

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";

var lengthOfTrack = 30*/


var player1 = document.getElementById('player1_strip')
var player2 = document.getElementById('player2_strip')

var Q = 81
var P = 80
var isGameOver = false
var playAgainButton = document.getElementById('btn-play-again')

var updatePlayerPosition = function (player, playerName) {
  if (!isGameOver) { 
    var cells = player.getElementsByTagName('td');
      for (var i = 0; i < cells.length; i++) {
        if (cells[i].className.indexOf('active') !== -1) {
          if (i === (cells.length - 1)) {
            alert (playerName + ' wins!!');
            isGameOver = 1;
            showButton();
          }
          else {
            cells[i].className = '';
            cells[i + 1].className = 'active';
            break;
          }
        }
      }
    }
  }


document.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case Q: 
     updatePlayerPosition(player1, 'Player One');
      break;
    case P:
      updatePlayerPosition(player2, 'Player Two');
      break;
  }
});

 var showButton = function () {
  if (isGameOver === 1) {
    playAgainButton.style.display = 'block'
  }
 }
 var playAgainClick = function () {
  window.location.reload();
 }
