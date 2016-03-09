// Create your variable here, name it `insects`
var insects = {
  name: 'Ant Nest Beetle',
};

var x = document.getElementById("myImg");("ant-Nest-Beetle.jpg");

{
  family: carabidae,
  size: 6-20 mm,
  food: insects,
};
{
  name: 'DungBeetle',
  var x = document.getElementById("myImg");("dung-Beetle.jpg");
  family: scarabidae,
  size: 20-30 mm,
  food: dung,
};
{
  name: 'Stage Beetle',
  var x = document.getElementById("myImg");("stage-Beetle.jpg");
  family: lucanidae,
  size: 5-120 mm,
  food: plants,
};
{
  name: 'Tortoise Beetle',
  var x = document.getElementById("myImg");("tortoise-Beetle.jpg");
  family: Cassidinae,
  size: 1-18 mm,
  food: plants,
};
];

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var writeInsects = function (bugs) {
  document.write('<h1>Insects</h1>');

  document.write('<ol>');

  bugs.forEach(function (bug) {
    document.write('<li>');
    document.write('<h2>' + bug.name + '</h2>');
    document.write('<img src="images/' + bug.img + '" alt="">');
    document.write('<dl>');
    document.write('<dt>Family</dt>');
    document.write('<dd><i>' + bug.family + '</i></dd>');
    document.write('<dt>Size</dt>');
    document.write('<dd>' + bug.size[0] + '–' + bug.size[1] + ' mm</dd>');
    document.write('<dt>Eats</dt>');

    document.write('<dd>');

    if (bug.food.eatsInsects) {
      document.write('Insects');
    }

    if (bug.food.eatsDung) {
      document.write('Dung');
    }

    if (bug.food.eatsPlants) {
      document.write('Plants');
    }

    document.write('</dd>');

    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ol>');
};

writeInsects(insects);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
