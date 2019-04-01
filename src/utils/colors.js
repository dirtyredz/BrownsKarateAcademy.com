var Black = "#0D0D0D"
var White = "#F3F3F3"
var Grey = "#D8D8D8"
var DarkGrey = "#757575"
var Red = "#780203"
var Green = "#1C7D22"

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

module.exports = {
  Black,
  White,
  Grey,
  DarkGrey,
  Red,
  Green,
  hexToRgb,
}
