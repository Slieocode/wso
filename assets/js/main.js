function reInit(){
/* Search Animation */
let searchBtn = document.getElementById('search-btn');
let searchInput = document.querySelector('.search-nav');
let discardSearch = document.querySelector('.discard-search');

let tlSearch = new TimelineMax();
let tlDiscardSearch = new TimelineMax();
searchBtn.addEventListener("click", function(){
    tlSearch.to('nav', .5, {top:"-100px", ease:Power4.easeOut})
            .to(searchInput, 1.5, {top:"100px", opacity:1,  ease:Power4.easeOut});
})

discardSearch.addEventListener("click", function(){
    tlSearch.to(searchInput, .5, {top:"-100px", opacity:0,  ease:Power4.easeOut})
            .to('nav', 1.5, {top:"0", ease:Power4.easeOut});
})

/* navbar color switch */
let targetEm = document.querySelector('#slider-main');

if(targetEm){
  document.querySelectorAll('nav .w-link').forEach(function(a, i){
    a.style.color = "#FFF";
  })
}else{
  document.querySelectorAll('nav .w-link').forEach(function(a, i){
    a.style.color = "#000";
  })  
}

/* Landing Animation */

 // TweenMax.to('.right-box', .5 ,{top:"0%", ease:Power4.easeOut});
let tl1 = new TimelineMax({delay:.3});
    tl1
    .to('nav', 1, {top:"0", opacity:1 ,ease:Power4.easeOut})
    // .to('.profile', 1, {top:"15%", opacity:1 ,ease:Power4.easeOut}, "-=.8")
    // .to([".w-title-container", ".b-title-container"], 1 ,{bottom:"14%", opacity:1,ease:Power4.easeOut}, "-=.5");

let tl2 = new TimelineMax({delay:1});
    tl2.to('.sash', .5, {left:"0%", ease:Power4.easeOut})
    .to('.sash', .9, {left:"100%" ,ease:Power4.easeOut})
    .to('.sash-text', 0, {opacity:"1"}, "-=1")
    // .to('.btn-p', .5, {opacity:"1"}, "-=1");
 
let tl3 = new TimelineMax({delay:1.3});
    tl3
    .to('.index-show', 1, {y:'0%', opacity:1, ease:Power4.easeOut})

/* Scroll Effect */

if(!document.getElementById('basics')){
  function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

}
/* Slider JS Code */
if(!!document.getElementById("slider-main")){

var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
  if (click) {
    if (curpage == 1) curpage = 5;
    console.log("woek");
    sliding = true;
    curpage--;
    svg = true;
    click = false;
    for (k = 1; k <= 4; k++) {
      var a1 = document.getElementById(pagePrefix + k);
      a1.className += " tran";
    }
    setTimeout(() => {
      move();
    }, 200);
    setTimeout(() => {
      for (k = 1; k <= 4; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.classList.remove("tran");
      }
    }, 1400);
  }
}

function rightSlide() {
  if (click) {
    if (curpage == 4) curpage = 0;
    console.log("woek");
    sliding = true;
    curpage++;
    svg = false;
    click = false;
    for (k = 1; k <= 4; k++) {
      var a1 = document.getElementById(pagePrefix + k);
      a1.className += " tran";
    }
    setTimeout(() => {
      move();
    }, 200);
    setTimeout(() => {
      for (k = 1; k <= 4; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.classList.remove("tran");
      }
    }, 1400);
  }
}

function move() {
  if (sliding) {
    sliding = false;
    if (svg) {
      for (j = 1; j <= 9; j++) {
        var c = document.getElementById(transitionPrefix + j);
        c.classList.remove("steap");
        c.setAttribute("class", transitionPrefix + j + " streak");
        console.log("streak");
      }
    } else {
      for (j = 10; j <= 18; j++) {
        var c = document.getElementById(transitionPrefix + j);
        c.classList.remove("steap");
        c.setAttribute("class", transitionPrefix + j + " streak");
        console.log("streak");
      }
    }
    setTimeout(() => {
      for (i = 1; i <= 4; i++) {
        if (i == curpage) {
          var a = document.getElementById(pagePrefix + i);
          a.className += " up1";
        } else {
          var b = document.getElementById(pagePrefix + i);
          b.classList.remove("up1");
        }
      }
      sliding = true;
    }, 600);
    setTimeout(() => {
      click = true;
    }, 1700);

    setTimeout(() => {
      if (svg) {
        for (j = 1; j <= 9; j++) {
          var c = document.getElementById(transitionPrefix + j);
          c.classList.remove("streak");
          c.setAttribute("class", transitionPrefix + j + " steap");
        }
      } else {
        for (j = 10; j <= 18; j++) {
          var c = document.getElementById(transitionPrefix + j);
          c.classList.remove("streak");
          c.setAttribute("class", transitionPrefix + j + " steap");
        }
        sliding = true;
      }
    }, 850);
    setTimeout(() => {
      click = true;
    }, 1700);
  }
}

left.onmousedown = () => {
  leftSlide();
};

right.onmousedown = () => {
  rightSlide();
};

document.onkeydown = e => {
  if (e.keyCode == 37) {
    leftSlide();
  } else if (e.keyCode == 39) {
    rightSlide();
  }
};

  
}




}

sal()

reInit();

/* page transition animation */

var select = function(el){
  return el
} 

var options, tl = new TimelineMax();
options = [
  {
     from: '(.*)', 
     to: '(.*)',
    out: function(next) {
        TweenMax.to(select('.paperTransition'), .3, {x:"100%" , ease: Power4.easeOut, onComplete:next})
    },
    in: (next) => {
       tl = new TimelineMax();
       tl
        .to(select('.paperTransition'), .3, {x:"200%", onComplete:next})
        .to(select('.paperTransition'), 0, {x:"0%"})
         window.scrollTo(0,0);
    }
  },
];


