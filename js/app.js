const backgrounds = [
  'blue50',
  'blue60',
  'blue70',
  'darkblue30',
  'darkblue50',
  'darkblue70',
  'green50',
  'green60',
  'green70',
  'grey40',
  'grey70',
  'grey80',
  'red50',
  'red60',
  'red70',
  'yellow50',
  'yellow60',
  'yellow70'
];
const ears = ['default', 'tilt-backward', 'tilt-forward'];
const eyes = ['default', 'angry', 'naughty', 'panda', 'smart', 'star'];
const hair = ['default', 'bang', 'curls', 'elegant', 'fancy', 'quiff', 'short'];
const leg = [
  'default',
  'bubble-tea',
  'cookie',
  'game-console',
  'tilt-backward',
  'tilt-forward'
];
const mouth = ['default', 'astonished', 'eating', 'laugh', 'tongue'];
const neck = ['default', 'bend-backward', 'bend-forward', 'thick'];
const accessories = ['earings', 'flower', 'glasses', 'headphone'];
const nose = ['default'];
const mainItemsArray = [
  backgrounds,
  neck,
  nose,
  mouth,
  ears,
  hair,
  eyes,
  leg,
  accessories
];
let mainCategory = '';

const ui = new UI();
ui.showMainCategories(ui.getImageNodeArray());

buttons = document.querySelectorAll('.main-button');
buttons.forEach((button, index) => {
  button.addEventListener('click', function (e) {
    mainCategory = button.innerText.toLowerCase();
    ui.clearSubCategories();
    ui.showSubCategories(mainCategory, index);
  });
});

subButtonWrapper = document.querySelector('.sub-button-collection');
subButtonWrapper.addEventListener('mouseover', function () {
  subButtons = document.querySelectorAll('.sub-button');
  subButtons.forEach(subButton => {
    subButton.addEventListener('click', function (e) {
      let image = e.target.innerText;
      ui.changeImage(mainCategory, image);
    });
  });
});

imageWrapperItems = ui.getImageNodeArray();
imageWrapperItems.forEach((imageWrapperItem, index) => {
  ui.changeImage(imageWrapperItem, mainItemsArray[index][0]);
});

randomButton = document.getElementById('random');
randomButton.addEventListener('click', () => {
  ui.generateRandomImage();
});
