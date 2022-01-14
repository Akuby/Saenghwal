var Title = {
  setColor : function (color) {
    document.querySelector('a').style.color = color;
  }
}

var Menu = {
  setColor : function (color,a_color) {
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = color;
    i += 1; }
  if (document.getElementById('active')){
    document.querySelector('#active').style.color = a_color;
    }
  }
}

var Body = {
  setTitleColor : function (color) {
    document.querySelector('h2').style.color = color;
  },
  
  setColor : function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor : function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

var Button = {
  setColor : function (color) {
    document.querySelector('input').style.color = color;
  },
  setBackgroundColor : function (color) {
    document.querySelector('input').style.backgroundColor = color;
  }
}

var Border = {
  setColor : function (color) {
  document.querySelector('section').style.borderColor = color;
  document.querySelector('ol').style.borderRightColor = color;
  document.querySelector('ol').style.borderBottomColor = color;
  document.querySelector('h1').style.borderBottomColor = color;
  }
}

function day_night_change(self) {
  if (self.value == 'night') { //주간
    Title.setColor('black'); 
    Menu.setColor('black','black');
    Body.setTitleColor('black');
    Body.setColor('black');
    Body.setBackgroundColor('white');
    Button.setColor('black'); 
    Button.setBackgroundColor('white'); 
    Border.setColor('black'); 
    self.value = 'day';
  }
  else { //야간
    Title.setColor('rgb(217, 133, 80)');
    Menu.setColor('white','#ffffab');
    Body.setTitleColor('#abe3ff');
    Body.setColor('white');
    Body.setBackgroundColor('#262626');
    Button.setColor('white');
    Button.setBackgroundColor('black');
    Border.setColor('white');
    self.value = 'night';
  }
}