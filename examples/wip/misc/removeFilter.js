
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var logo;
var background;
var filter;

function preload() {

    game.load.image('phaser', 'assets/sprites/phaser2.png');
    game.load.script('fire', '../filters/Fire.js');

}

function create() {


    logo = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
    logo.anchor.setTo(0.5, 0.5);

    background = game.add.sprite(0, 0);
    background.width = 800;
    background.height = 600;

    filter = game.add.filter('Fire', 800, 600);
    filter.alpha = 0.0;

    background.filters = [filter];


    game.input.onDown.add(removeBackground, this);

}

function update() {

    filter.update();

}

function removeBackground() {

    console.log('removeBackground');


    // background.filters = null;
    background.destroy();

    // console.log(background.filters);

}
