function reInit(){

/* Landing Animation */

 TweenMax.to('.right-box', .5 ,{top:"0%", ease:Power4.easeOut});
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


