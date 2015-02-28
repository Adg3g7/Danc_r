var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Danc_r',
  icon: 'images/menu_icon.png',
  subtitle: 'dance app',
  body: 'Press up for menu. Press select for fancy text. Press down for info about this app.'
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Dancing mode',
        icon: 'images/menu_icon.png',
        subtitle: 'Start dancing!'
      }, {
        title: 'Party mode',
        subtitle: 'Start your music!'
      }, {
        title: 'Trammel mode',
        subtitle: 'You do you!'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Fancy Text!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('About this app');
  card.subtitle('Its for a hackathon');
  card.body('by Joe Trammel, Alex Foster, and the Genius Goff');
  card.show();
});
