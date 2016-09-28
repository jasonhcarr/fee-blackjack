function runGame() {
    var display = document.getElementById('cards');
    var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var standBtn = document.getElementById('stand').addEventListener('click', function() {checkResult(true, false);});
    var hitBtn = document.getElementById('hit').addEventListener('click', hit);
dealCards();
function dealCards() {
      var card = Math.floor(Math.random() * cards.length);
      display.innerHTML = cards[card];
      card = Math.floor(Math.random() * cards.length);
      display.innerHTML = display.innerHTML + ' ' + cards[card];
      checkResult(false, false);
}

    function hit() {
        var card = Math.floor(Math.random() * cards.length);
        display.innerHTML = display.innerHTML + ' ' + cards[card];
        checkResult(false, true);
    }

    function checkResult(standing, hitting) {
      console.log(standing, hitting);
        var hand = display.innerHTML.split(' ');
        var cardValue = 0;
        hand.forEach(function(card) {
          if (card === 'A') {
            cardValue = parseInt(cardValue) + 11;
          }
          else if (card ===  'J'|| card == 'Q' || card === 'K') {
              cardValue = parseInt(cardValue) + 10;
          }
          else {
              cardValue = parseInt(cardValue) + parseInt(card);
        }
        return cardValue;
        });
        if (cardValue < 15 && standing) {
            alert('Dealer wins.');
        }
        else if (cardValue < 18 && standing) {
            alert('Push!');
        }
        else if (cardValue > 18 && standing || cardValue === 21) {
            alert('You win!');
        }
        else if (cardValue > 21) {
            alert('You Bust.');
        }



}
}


runGame();
