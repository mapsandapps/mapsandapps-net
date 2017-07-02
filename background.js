let useTwoHues = scheme => {
  let hue1 = Math.random() * 360;
  let color1 = `hsl(${hue1}, 100%, 50%)`;
  let degrees = Math.round(Math.random()) ? 45 : -45;
  let hue2 = hue1 + degrees;
  let color2 = `hsl(${hue2}, 100%, 50%)`;
  return setBackground(color1, color2);
}

let setBackground = (color1, color2) => {
  var gradientSettings = '';
  let randomAngle = Math.random() * 360;
  let gradientStyle = Math.round(Math.random()) ? 'linear' : 'radial';
  if (gradientStyle === 'linear') {
    gradientSettings = `${randomAngle}deg`;
  } else {
    let gradientSizes = ['closest-side', 'farthest-side', 'closest-corner', 'farthest-corner'];
    let randomGradientSize = gradientSizes[Math.floor(Math.random() * 4)];
    gradientSettings = `${randomGradientSize}`;
  }
  let backgroundString = `${gradientStyle}-gradient(${gradientSettings}, ${color1}, ${color2})`;
  console.log(backgroundString);
  return backgroundString;
}

window.onload = () => {
  document.getElementById('page').style.background = useTwoHues();
  document.getElementById('quote1').style.background = useTwoHues();
}
