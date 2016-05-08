var defaultTrack = 5;
var players = 1;


function updateInstructions (numOfPlayers) {
  var letters = [
    {
      buttonletter:'Q',
      name: 'Mrs Yellow'
    },
    {
      buttonletter:'P',
      name: 'Mrs Pink'
    },
     {
      buttonletter:'F',
      name: 'Mrs Blue'
    },
    {
      buttonletter:'L',
      name: 'Mrs Green'
    },
    {
      buttonletter:'Z',
      name: "Mrs Orange"
    },
    {
      buttonletter:'M',
      name: "Mrs Purple"
    }];
  var instructionsHtml = '';
  for (var i = 0; i < numOfPlayers; i++) {
    instructionsHtml += '<h4>Press ' + letters[i].buttonletter + ' to advance ' + letters[i].name + '</h4>';
  }
  $('.racerinfo').html(instructionsHtml);
}


function createTrack(trackLength, numOfPlayers) {

var trackHtml = '';
  for (var x = 0; x < numOfPlayers; x++) {  
    var playerId = 'player' + (x + 1);
    trackHtml += '<tr class="player" id="' + playerId + '">';

    for (var i = 0; i < trackLength; i++) {
      if (i === 0) {
        trackHtml += '<td class="active"></td>';
      }
      else {
        trackHtml += '<td></td>';
      }
    }
    trackHtml += '</tr>';
  }
  $('.racer_table').html(trackHtml);
  updateInstructions(numOfPlayers);
}
$(document).ready(createTrack(defaultTrack, players));


function increase(type) {
  if (type === 'track') {
    if (defaultTrack < 20) {
    defaultTrack += 1;
    }
  }
  else if (type === 'player') {
    if (players < 6) {
      players += 1;
    }
  }
  createTrack(defaultTrack, players);
}


function decrease(type) {
  if (type === 'track') {
    defaultTrack -= 1;
  }
  else if (type === 'player') {
    players -= 1;
  }
  createTrack(defaultTrack, players);
}


var Q = 81;
var P = 80;
var F = 70;
var L = 76;
var Z = 90;
var M = 77;

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
     var player1 = document.getElementById('player1')
     updatePlayerPosition(player1, 'Mrs Yellow');
      break;
    case P:
      var player2 = document.getElementById('player2')
      updatePlayerPosition(player2, 'Mrs Pink');
      break;
    case F: 
      var player3 = document.getElementById('player3')
      updatePlayerPosition(player3, 'Mrs Blue');
      break;
    case L: 
      var player4 = document.getElementById('player4')
      updatePlayerPosition(player4, 'Mrs Green');
      break;
    case Z: 
      var player5 = document.getElementById('player5')
      updatePlayerPosition(player5, 'Mrs Orange');
      break;
    case M: 
      var player6 = document.getElementById('player6')
      updatePlayerPosition(player6, 'Mrs Purple');
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
