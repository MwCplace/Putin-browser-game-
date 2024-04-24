var buttonStyle = {
  background: 'deeppink',
  color: 'beige',
  border: 'none',
  padding: '13px 25px 13px 25px',
  fontWeight: '700'
};

function hideFrameById(frameName) {
  var frame = document.getElementById(frameName);
  if (frame == null) {
    console.log(frameName);
  }
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





function playOption1() {
  // var option = document.getElementsByClassName('option_btn1')[1];
  // colorChosenELement(option);
  var frame = document.getElementById('option_frame-1');
  frame.style.display = 'block';
  hideFrameById('option_frame-2');
  hideFrameById('option_frame-3');
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-5');
  hideFrameById('option_frame-6');
}

function playOption2() {
  // var option = document.getElementsByClassName('option_btn1')[1];
  // colorChosenELement(option);
  var frame = document.getElementById('option_frame-2');
  frame.style.display = 'block';
  hideFrameById('option_frame-1');
  hideFrameById('option_frame-3');
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-5');
  hideFrameById('option_frame-6');
}

function playOption3() {
  // var option = document.getElementsByClassName('option_btn1')[1];
  // colorChosenELement(option);
  var frame = document.getElementById('option_frame-3');
  frame.style.display = 'block';
  hideFrameById('option_frame-1');
  hideFrameById('option_frame-2');
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-5');
  hideFrameById('option_frame-6');
}

function playOption4() {
  // var option = document.getElementsByClassName('option_btn1')[1];
  // colorChosenELement(option);
  var frame = document.getElementById('option_frame-4');
  frame.style.display = 'block';
  hideFrameById('option_frame-5');
  hideFrameById('option_frame-6');
}

function playOption5() {
  // var option = document.getElementsByClassName('option_btn1')[1];
  // colorChosenELement(option);
  var frame = document.getElementById('option_frame-5');
  frame.style.display = 'block';
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-6');
}

function playOption6() {
  // var option = document.getElementsByClassName('option_btn1')[1];
  // colorChosenELement(option);
  var frame = document.getElementById('option_frame-6');
  frame.style.display = 'block';
  hideFrameById('option_frame-4');
  hideFrameById('option_frame-5');
}

// function showMoreGames() {
//   showFrame('more-games-frame');
// }

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
