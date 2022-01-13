function linkColor(color) {
  var alist = document.querySelectorAll('a');
  for(var i = 0; i < alist.length; i++)
    alist[i].style.color = color;
}

function bodyColor(color) {
  document.querySelector('body').style.color = color;
}

function bodybackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function buttonColor(color,s_color) {
  document.querySelector('input').style.backgroundColor = color;
  document.querySelector('input').style.color = s_color;
}

function borderColor(color) {
  document.querySelector('section').style.border = color;
  document.querySelector('ol').style.borderRight = color;
  document.querySelector('h1').style.borderBottom = color;
}

function day_night_change(self) {
  if (self.value == 'night') {
    linkColor('powderblue');
    bodyColor('white');
    bodybackgroundColor('RGB(26, 36, 54)');
    buttonColor('white','black');
    borderColor('2px solid white')
    self.value = 'day';
  }
  else {
    linkColor('black');
    bodyColor('black');
    bodybackgroundColor('white');
    buttonColor('black','white');
    borderColor('2px solid black')
    self.value = 'night';
  }
}