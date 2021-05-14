let position = 0;
//    let position = 0;
const previousImage = function () {
  // increment the position by 200
  position = position + 200;
  // grab image slider from the DOM
  document.getElementById("slider").style.transform = `translate(${position}px, 0)`;
  // adjust the style for transform translate +200px

}

const nextImage = function () {
  // decrement the position by 200
  position = position - 200;
  // position = 0 - 200
  // grab image slider from the DOM
  document.getElementById("slider").style.transform = `translate(${position}px, 0)`;
  // adjust the style for transform translate -200px

}