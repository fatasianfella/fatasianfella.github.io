const fatchiggaseasonpromo = document.getElementById('fatchiggaseasonpromo');
const howtobuychga = document.getElementById('howtobuychga');

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
  fatchiggaseasonpromo.classList.remove("hide");
  fatchiggaseasonpromo.style.opacity = 0.9;
  fatchiggaseasonpromo.style.zIndex = 10;  
  document.getElementById('dexscreener').style.opacity=1;
  document.getElementById('dexscreener').style.zIndex=11;
  document.getElementById('instagramLink').style.opacity=1;
  document.getElementById('instagramLink').style.zIndex=11;
  document.getElementById('xLink').style.opacity=1;
  document.getElementById('xLink').style.zIndex=11;
  document.getElementById('buyButton').style.opacity=1;
  document.getElementById('buyButton').style.zIndex=11;
  document.getElementById('contactAddress').style.opacity=1;
  document.getElementById('contactAddress').style.zIndex=11;
}
  

function nextPage() {
  setTimeout(fadeToNextPage, 500);
  setTimeout(fatchiggaseasonpromo.play(),2000);
}

fatchiggaseasonpromo.addEventListener('ended', function() {
  setTimeout(fatchiggaseasonpromo.play(),4000);
});

function volumeClick() {
  const volumeButton = document.getElementById('volumeControl');
  if(fatchiggaseasonpromo.muted) {
    fatchiggaseasonpromo.muted = false; 
    volumeButton.src="media/img/volume_up.png"
  } else {
    fatchiggaseasonpromo.muted = true; 
    volumeButton.src="media/img/volume_down.png"
  }
}

function copyContactAddress() {
  navigator.clipboard.writeText("5SkgLR8nSZS7XwhhweFRHzKnQ3xaj4WAe8iRVGEnpump");
  alert("CA address copied");
  fatchiggaseasonpromo.play();
}

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

function clickBuyNowButton() {
  modal.style.display = "block";
  howtobuychga.play();
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}