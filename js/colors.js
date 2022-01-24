
      
var Title = {
  setColor : function (color) {
    $('#title').css('color', color);
  }
}

var Menu = {
  setColor : function (color,a_color) {
    $('.menu a').css('color', color);
    $('#active').css('color', a_color);
  }
}

var Body = {
  setTitleColor : function (color) {
    $('h2').css('color',color);
  },
  
  setColor : function (color) {
    $('body').css('color', color);
  },
  setBackgroundColor : function (color) {
    $('body').css('background-color', color);
  }
}

var Button = {
  setColor : function (color) {
    $('input').css('color', color);
  },
  setBackgroundColor : function (color) {
    $('input').css('background-color', color);
  }
}

var Border = {
  setColor : function (color) {
    $('section').css('border-color', color);
    $('ol').css('border-color', color);
    $('h1').css('border-color', color);
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
    Title.setColor('#d98550');
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