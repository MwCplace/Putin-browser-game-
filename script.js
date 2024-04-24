var buttonStyle = {
  background: 'deeppink',
  color: 'beige',
  border: 'none',
  padding: '13px 25px 13px 25px',
  fontWeight: '700'
};

var btn1 = document.getElementById('option_btn1');
var btn2 = document.getElementById('option_btn2');
var btn3 = document.getElementById('option_btn3');
var btn4 = document.getElementById('option_btn4');
var btn5 = document.getElementById('option_btn5');
var btn6 = document.getElementById('option_btn6');

function hideFrameById(frameName) {
  var frame = document.getElementById(frameName);
  frame.style.display = 'none';
}

function hideFrameByClass(frameName) {
  var frames = document.getElementsByClassName(frameName);
  for (var i = 0; i<frames.length; i++) {
    frames[i].style.display = 'none';
  }
}

function showFrame(frameName) {
  var frame = document.getElementById(frameName);
  frame.style.display = 'block';
}

function colorChosenELement(element) {
  element.style.background = 'pink';
  element.style.color = 'black';
}

function uncolorChosenELement(element) {
  if (element != null) {
    element.style.background = 'deepPink';
    element.style.color = 'beige';
  }
}

function playOption1() {
  // colorChosenELement(btn1);
  // uncolorChosenELement(btn2);
  // uncolorChosenELement(btn3);
  // uncolorChosenELement(btn4);
  // uncolorChosenELement(btn5);
  // uncolorChosenELement(btn6);

  var frame = document.getElementById('option_frame-1');
  frame.style.display = 'block';
  hideFrameById('option_frame-2');
  hideFrameById('option_frame-3');
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-5');
  hideFrameById('option_frame-6');
}

function playOption2() {
  // uncolorChosenELement(btn1);
  // colorChosenELement(btn2);
  // uncolorChosenELement(btn3);
  // uncolorChosenELement(btn4);
  // uncolorChosenELement(btn5);
  // uncolorChosenELement(btn6);

  var frame = document.getElementById('option_frame-2');
  frame.style.display = 'block';
  hideFrameById('option_frame-1');
  hideFrameById('option_frame-3');
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-5');
  hideFrameById('option_frame-6');
}

function playOption3() {
  // uncolorChosenELement(btn1);
  // uncolorChosenELement(btn2);
  // colorChosenELement(btn3);
  // uncolorChosenELement(btn4);
  // uncolorChosenELement(btn5);
  // uncolorChosenELement(btn6);

  var frame = document.getElementById('option_frame-3');
  frame.style.display = 'block';
  hideFrameById('option_frame-1');
  hideFrameById('option_frame-2');
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-5');
  hideFrameById('option_frame-6');
}

function playOption4() {
  // colorChosenELement(btn4);
  // uncolorChosenELement(btn5);
  // uncolorChosenELement(btn6);

  var frame = document.getElementById('option_frame-4');
  frame.style.display = 'block';
  hideFrameById('option_frame-5');
  hideFrameById('option_frame-6');
}

function playOption5() {
  // uncolorChosenELement(btn4);
  // colorChosenELement(btn5);
  // uncolorChosenELement(btn6);

  var frame = document.getElementById('option_frame-5');
  frame.style.display = 'block';
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-6');
}

function playOption6() {
  // uncolorChosenELement(btn4);
  // uncolorChosenELement(btn5);
  // colorChosenELement(btn6);

  var frame = document.getElementById('option_frame-6');
  frame.style.display = 'block';
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-5');
}

function showMenu() {
  var frame = document.getElementById('starting-screen');
  frame.style.display = 'block';
}

function gameStart() {
  hideFrameByClass('frame');
  hideFrameById('starting-screen');
  showFrame('frame1');
}

function showStartFrame() {
  hideFrameByClass('frame');
  showFrame('starting-screen');
}
