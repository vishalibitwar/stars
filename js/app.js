particlesJS.load('particles-js', 'particles.json', function () {});

const changeColor = document.getElementById('changeColor');
const background = document.getElementById('particles-js');
let colorNo = 1;
const colors = [
    'black',
    'gray',
    'chocolate',
    'yellow',  
    'skyblue',
    'aquamarinea',     
    'pink',
    'antiquewhite',
    'blueviolet',
    'blue',    
    'crimson',
    'darkcyan',
    'darkslategray',
    'firebrick',
    'fuchsia',
    'gold',
    'goldenrod',
    'green',
    'greenyellow',
    'hotpink',
    'honeydew',
    'indigo',
    'khaki',
    'lightgreen',
    'mediumaquamarine',
    'navajowhite',
    'olive',
    'orangered',
    'orchid',
    'red',
    'peru',
    'powderblue',
    'purple',
    'sienna',
    'tomato',
    'yellowgreen',
    'transparent'
];


changeColor.addEventListener('click', function () {
    background.style.backgroundColor = colors[colorNo];
    if (colorNo < colors.length - 1) {
        colorNo++;
    } else {
        colorNo = 0;
    }
});
