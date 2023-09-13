document.addEventListener("DOMContentLoaded", function () {
  suggest();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 200;
  canvas.height = 300;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    if (!isDrawing) return;

    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  canvas.addEventListener('touchstart', handleWritingStart);
canvas.addEventListener('touchmove', handleWritingInProgress);
canvas.addEventListener('touchend', handleDrawingEnd);
});

document.addEventListener("DOMContentLoaded", function () {
  suggest();
  const canvas = document.getElementById("canvas2");
  const ctx = canvas.getContext("2d");
  canvas.width = 200;
  canvas.height = 300;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    if (!isDrawing) return;

    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  canvas.addEventListener('touchstart', handleWritingStart);
canvas.addEventListener('touchmove', handleWritingInProgress);
canvas.addEventListener('touchend', handleDrawingEnd);
});

document.addEventListener("DOMContentLoaded", function () {
  suggest();
  const canvas = document.getElementById("canvas3");
  const ctx = canvas.getContext("2d");
  canvas.width = 200;
  canvas.height = 300;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    if (!isDrawing) return;

    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  canvas.addEventListener('touchstart', handleWritingStart);
canvas.addEventListener('touchmove', handleWritingInProgress);
canvas.addEventListener('touchend', handleDrawingEnd);
});

let finalChar;
let character;
let character2;
let character3;
async function submitImage() {
  const aTag = document.createElement("a");
  aTag.href = "#guessarea";
  aTag.click();
  const canvas = document.getElementById("canvas");
  const canvas2 = document.getElementById("canvas2");
  const canvas3 = document.getElementById("canvas3");
  var img = canvas.toDataURL();
  var img2 = canvas2.toDataURL();
  var img3 = canvas3.toDataURL();
  console.log("SUBMIT");
  await predictImage(img);
  await predictImage2(img2);
  await predictImage3(img3);

  if(character==="<!doctype" && character2==="<!doctype" && character3==="<!doctype" )
  {
      finalChar="No input"
  }
  else
  {

      if(character==="<!doctype")
      {
          character="";
      }
  
      if(character2==="<!doctype")
      {
          character2="";
      }
      if(character3==="<!doctype")
      {
          character3="";
      }
      

      if(character!='ெ' && character!='ே' && character!='ை')
      {
          if(character2=='ெ' || character2=='ே' || character2=='ை')
          {
              finalChar=character3+character2;
          }
          else
          {
              finalChar=character2+character3;
          }
          if(character==="<!doctype")
          {
              finalChar=finalChar;
          }
          else
          {
              finalChar=character+finalChar;
          }
          c=1;
      }

      else
      {
          if(character=='ெ' || character=='ே' || character=='ை')
          {
              finalChar=character2+character;
          }
          else
          {
              finalChar=character+character2;
          }
          if(character3==="<!doctype")
          {
              finalChar=finalChar;
          }
          else
          {
              finalChar=finalChar+character3;
          }
      }
  
  }

  console.log("finalchar", finalChar);

  returnChar(finalChar);

  suggest();
}

async function predictImage(img) {
  let res = await fetch("/predict", {
    method: "POST",
    body: img,
  });
  let data = await res.text();
  console.log(data);
  var strings = data.split(" ");
  character = strings[0];
  prob = strings[1];
}

async function predictImage2(img) {
  let res = await fetch("/predict", {
    method: "POST",
    body: img,
  });
  let data = await res.text();
  console.log(data);
  var strings = data.split(" ");
  character2 = strings[0];
  prob2 = strings[1];
}

async function predictImage3(img) {
  let res = await fetch("/predict", {
    method: "POST",
    body: img,
  });
  let data = await res.text();
  console.log(data);
  var strings = data.split(" ");
  character3 = strings[0];
  prob3 = strings[1];
}

function clearCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const canvas2 = document.getElementById("canvas2");
  const ctx2 = canvas2.getContext("2d");
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  const canvas3 = document.getElementById("canvas3");
  const ctx3 = canvas3.getContext("2d");
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
}

function returnChar() {
  const myguess = document.getElementById("myguess");
  myguess.textContent = "My guess:";

  const guess = document.getElementById("guess");
  guess.textContent = finalChar;
}

function suggest() {
  const suggestion = document.getElementById("suggestion");
  fetch("/suggest")
    .then((response) => response.text())
    .then(
      (data) =>
        (suggestion.textContent =
          "Draw a Tamil character into the box. Try " + data + ".")
    );
}

const url = parent.location.href.split("/").reverse()[0];

if (url === "ourwork") {
  document.querySelector("#fss").style.display='none';
  document.querySelector("#anim").innerHTML='<iframe src="https://my.spline.design/draganddropbookpencilschoolcopy-054658f00d7a880bd34290a3c77684a9/" frameborder="0" style="width: 100%; height: 125%;position: absolute;top:0;"></iframe>';
}
