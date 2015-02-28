var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Danc_r',
  icon: 'images/menu_icon.png',
  subtitle: 'dance app',
  body: 'Press select and start dancing or Press up for more info and Press down for credits'
});

main.show();

main.on('click', 'up', function(e) {
  var card = new UI.Card();
  card.title('Instructions:');
  card.subtitle('');
  card.body('Press the select button on the main screen. Then start dancing and your music will start. If you stop dancing your music will stop as well.');
  card.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Start Dancing!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('About this app');
  card.subtitle('Made for HackIllinois');
  card.body('by Joe Trammel, Alex Foster, and Adam Goff');
  card.show();
});
