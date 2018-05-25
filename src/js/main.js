// var ru = {
//     "container_up_titleid":" Ваш персональный помощников путешествии гид по развлечениям",
//     "cityid":"Город"};
//     var eng  = {
//         "container_up_titleid":" Your personal travel assistants guide to entertainment",
//         "cityid":"City"};
//         var elements = [
//             "container_up_titleid",
//             "cityid"};
//             if(elements){
//                 for(let i=0;i<elements.length;i++){
//                   document.getElementById(elements[i]).innerHTML=ru[elements[i]];
//                 }
//               }
//               function changelang(lang){

//                 if (lang == 'ru') { 
//                   document.getElementById("lang_logo1").src="stylesheets/img/ru.png";
//                   document.getElementById("container_spisok_lang").style.display = "none";
//                   document.getElementById("lang_logo2").src="stylesheets/img/Group3.1.png";
              
//                   if(elements){
//                     for(let i=0;i<elements.length;i++){
//                       document.getElementById(elements[i]).innerHTML=ru[elements[i]];
//                     }
//                   }
                
//                   return false; 
//                 } 
                
//                 if (lang == 'eng') { 
//                   document.getElementById("lang_logo1").src="stylesheets/img/1.png";
//                   document.getElementById("container_spisok_lang").style.display = "none";
//                   document.getElementById("lang_logo2").src="stylesheets/img/Group3.1.png";
              
//                   if(elements){
//                     for(let i=0;i<elements.length;i++){
//                       document.getElementById(elements[i]).innerHTML=eng[elements[i]];
//                     }
//                   }
                
//                 return false; 
//                 } 

//////////////////sliger
// (function($) {

//     $.fn.slider = function(multiply) {
//         multiply || (multiply = 1);

//         var marker = $('.slider__scroll-marker', this),
//             cnt = $('.types-slider-boxes-item', this),//types-slider-boxes-item
//             maxContentLeft = cnt.children(0).width() - cnt.width(),
//             ratio = ($('.b-slider__scroll', this).width() - marker.width()) / maxContentLeft,
//             maxPos = Math.floor(maxContentLeft / multiply),
//             prevOffset = 0,
//             semaphore = 0,
//             currentPos = 0,
//             direction,

//             scrollToPos = this.scrollToPos = function(pos) {
//                 pos > maxPos && (pos = maxPos);
//                 currentPos = pos;

//                 var markerLeft = prevOffset = Math.round(pos * multiply * ratio);

//                 marker.animate({ left: markerLeft + 'px' });
//                 cnt.animate({ left: -Math.round(pos * multiply) + 'px' });
//             };

//         marker.draggable({
//             containment: 'parent',
//             axis: 'x',

//             start: function() {
//                 direction = undefined;
//                 semaphore++;
//             },

//             drag: function(event, ui) {
//                 cnt.css('left', Math.round(-ui.position.left / ratio) + 'px');
//             },

//             stop: function(event, ui) {
//                 var left = ui.position.left,
//                     pos = Math.floor(left / ratio / multiply);


//                 scrollToPos(pos + (left > prevOffset && pos != maxPos ? 1 : 0));

//                 setTimeout(function() {
//                     semaphore--
//                 }, 3000);
//             }
//         });

//         setInterval(function() {
//             if (semaphore) {
//                 console.log('ds');
//                 return;
//             }
//             if (!direction) {
//                 direction = currentPos > maxPos / 2 ? 'left' : 'right';
//             } else if (direction == 'left' && currentPos == 0) {
//                 direction = 'right';
//             } else if (direction == 'right' && currentPos == maxPos) {
//                 direction = 'left';
//             }

//             scrollToPos(direction == 'left' ? currentPos - 1 : currentPos + 1);
//         }, 2500)

//         return this;
//     };

//     $(function() {
//         $('.b-slider').slider(310);
//     });

// })(jQuery.noConflict());
// (function() {
//     var method;
//     var noop = function () {};
//     var methods = [
//         'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
//         'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
//         'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
//         'timeStamp', 'trace', 'warn'
//     ];
//     var length = methods.length;
//     var console = (window.console = window.console || {});

//     while (length--) {
//         method = methods[length];

//         // Only stub undefined methods.
//         if (!console[method]) {
//             console[method] = noop;
//         }
//     }
// }());



function changecol1(){
    document.getElementById("modal-close").style.background="#d2e7f6";
}
function changecol2(){
    document.getElementById("modal-close").style.background="#e0e9f0";
}
function changecol3(){
    document.getElementById("modal-close").style.background="#c3d5e2";
    document.getElementById("window-modal").style.display="none";
}
function modalopen(){
    document.getElementById("window-modal-box").style.display="block";
}

var options = {
    strings: ["VK", "FACEBOOK","TELEGRAM","OK","VIBER"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    startDelay : 0 , 
  }
  
  var typed = new Typed(".telega", options);
// 
// document.getElementById('1slider-left').onclick = sliderLeft;
var left = 0;

function slider1Left(){
	var polosa = document.getElementById('typessliderboxes');
	left = left - 291;
	if (left < -582) {
        left = -582;
    }
    if (left < -291) {
        var btn = document.getElementById('1slider-left').style.background = "url(../img/right-arrow-lite-blue.svg)";
    }
    else{
        var btn = document.getElementById('1slider-right').style.background = "url(../img/right-arrow-blue.svg)";
        
    }
	typessliderboxes.style.left = left +'px';
}
function slider1right(){
	var polosa = document.getElementById('typessliderboxes');
	left = left + 291;
	if (left >0) {
		left =0;
    }
    if (left == 0) {
        var btn = document.getElementById('1slider-right').style.background="url(../img/right-arrow-lite-blue.svg)";
    }
    else{
        var btn = document.getElementById('1slider-left').style.background="url(../img/right-arrow-blue.svg)";
        
    }
	typessliderboxes.style.left = left +'px';
}

function slider2Left(){
	var polosa = document.getElementById('reviewsboxesline');
	left = left - 390;
	if (left < -1170) {
		left = -1170;
    }
    if (left < -780) {
        var btn = document.getElementById('2slider-left').style.background = "url(../img/right-arrow-lite-blue.svg)";
    }
    else{
        var btn = document.getElementById('2slider-right').style.background = "url(../img/right-arrow-blue.svg)";
        
    }
	reviewsboxesline.style.left = left +'px';
}
function slider2right(){
	var polosa = document.getElementById('reviewsboxesline');
	left = left + 390;
	if (left >0) {
		left =0;
    }
    if (left == 0) {
        var btn = document.getElementById('2slider-right').style.background="url(../img/right-arrow-lite-blue.svg)";
    }
    else{
        var btn = document.getElementById('2slider-left').style.background="url(../img/right-arrow-blue.svg)";
        
    }
	reviewsboxesline.style.left = left +'px';
}
console.log('ok');