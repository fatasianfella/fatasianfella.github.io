let num1, num2, operator, correctAnswer;

function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
    num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*']; // Add division later if needed
    operator = operators[Math.floor(Math.random() * operators.length)];

    // Update the problem display
    document.getElementById('problem').innerHTML = `${num1} ${operator} ${num2} = ?`;

    // Calculate the correct answer
    switch (operator) {
        case '+':
            if(num1 == 9 && num2 == 10 || (num1 == 10 && num2 == 9)) {
              correctAnswer = 21; 
            } else {
              correctAnswer = num1 + num2;
            }
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
    }
    document.getElementById('answer').value = ""; // Clear the input field
    document.getElementById('result').textContent = ""; // Clear the result
}

function fadeOutWithTransition(element, duration) {
  element.style.transition = `opacity ${duration / 1000}s`;
  element.style.opacity = 0;
  element.style.zIndex = -1;
}

function fadeIn(element, duration = 400) {
  element.style.opacity = 0;
  let last = +new Date();
  const tick = function() {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();
    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}

function fadeToNextPage() {
  fadeOutWithTransition(document.getElementById('page1'), 1000);
  fadeOutWithTransition(document.getElementById('menacingFellowVideo'), 1000);
  document.getElementById('menacingFellowVideo').classList.add("hide");
  document.getElementById('fatchiggaseasonpromo').classList.remove("hide");
  document.getElementById('fatchiggaseasonpromo').style.opacity = 0.9;
  document.getElementById('fatchiggaseasonpromo').style.zIndex = 10;  
  document.getElementById('dexscreener').style.opacity=1;
  document.getElementById('dexscreener').style.zIndex=11;
  document.getElementById('instagramLink').style.opacity=1;
  document.getElementById('instagramLink').style.zIndex=11;
  document.getElementById('xLink').style.opacity=1;
  document.getElementById('xLink').style.zIndex=11;
}

function checkAnswer() {
      const userAnswer = parseInt(document.getElementById('answer').value);

      if (userAnswer === correctAnswer) {
        document.getElementById('mainButton').querySelector('span').textContent  = "ight certifed CHIGGA, get in";
        setTimeout(fadeToNextPage, 1000);
        setTimeout(document.getElementById("fatchiggaseasonpromo").play(),2000);
      } else {
        document.getElementById('mainButton').querySelector('span').textContent  = `you cooked CHIGGA, try again`;
        document.getElementById('restrictedSign').src = `media/img/accessdenied.png`;
        generateProblem();
      }
   
}

const video = document.getElementById('fatchiggaseasonpromo');
video.addEventListener('ended', function() {
  setTimeout(video.play(),4000);
});

function volumeClick() {
  const volumeButton = document.getElementById('volumeControl');
  if(video.muted) {
    video.muted = false; 
    volumeButton.src="media/img/volume_up.png"
  } else {
    video.muted = true; 
    volumeButton.src="media/img/volume_down.png"
  }
}

// Generate the first problem on page load
generateProblem();
