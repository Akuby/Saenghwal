function linkColor(color,h_color,s_color) {
  var alist = document.querySelectorAll('a');
  for(var i = 1; i < alist.length; i++)
    alist[i].style.color = color;
  alist[0].style.color = h_color;
  if (document.getElementById('active')){
    document.querySelector('#active').style.color = s_color;
  }
}

function bodyColor(color,b_color) {
  var target = document.querySelector('body');
  target.style.color = color;
  target.style.backgroundColor = b_color;
}

function buttonColor(color,s_color) {
  var target = document.querySelector('input');
  target.style.color = s_color;
  target.style.backgroundColor = color;
}

function borderColor(color) {
  document.querySelector('section').style.border = color;
  document.querySelector('ol').style.borderRight = color;
  document.querySelector('ol').style.borderBottom = color;
  document.querySelector('h1').style.borderBottom = color;
}

function day_night_change(self) {
  if (self.value == 'night') {
    bodyColor('white','#313336');
    buttonColor('white','black');
    linkColor('#a8e1ff','#feffa8','#e07e46');
    borderColor('2px solid white');
    self.value = 'day';
  }
  else {
    bodyColor('black','white');
    buttonColor('black','white');
    linkColor('black','black','black');
    borderColor('2px solid black');
    self.value = 'night';
  }
}