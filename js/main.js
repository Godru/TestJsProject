$(document).ready(function () {
    var servicesPage = 1;
    function moving(move,i,rate) {
        $('.' + move).css('margin-top', i*rate+'px');
        $('.' + move).css('opacity', i*4/100);
        i++;
        if(i<26){
            setTimeout(function () {moving(move,i,rate)},35);
        }
    }

    function openClose(OpenClose,picElement,i){
        picElement.style.width = parseInt(getComputedStyle(picElement).width,10) + 5*OpenClose + 'px';
        picElement.style.height = parseInt(getComputedStyle(picElement).height,10) + 5*OpenClose + 'px';
        picElement.style.left = parseInt(getComputedStyle(picElement).left,10) + -OpenClose + 'px';
        picElement.style.top = parseInt(getComputedStyle(picElement).top,10) + -OpenClose + 'px';
        i++;
        if(i<26){
            setTimeout(function () {openClose(OpenClose,picElement,i)},10);
        }
        if(i === 26 & OpenClose === -1){
            picElement.style.position = 'relative';
            picElement.style.zIndex = '0';
        }
    }
    function secondcatShow (elem,i,rate){
        elem.style.marginTop = i*rate+'px' ;
        elem.style.opacity = i*4/100;
        i++;
        if(i<26){
            setTimeout(function () {secondcatShow(elem,i,rate)},35);
        }
    }
    function phoneCallShow (elem,i,rate){
        elem.style.top = i*rate+'%' ;
        elem.style.opacity = i*4/100;
        i++;
        if(i<26){
            setTimeout(function () {phoneCallShow(elem,i,rate)},35);
        }
    }

   function serviceDiscShowing(show,hide1,hide2) {
       $('.tree__change').html('&#8594; ' + show);
       $('.' + show).css('display', 'block');
       $('#' + show).css('color', '#b81c31');
       $('#' + show).css('border-color', '#b81c31');
       $('.' + hide1).css('display', 'none');
       $('#' + hide1).css('color', '#a1a6af');
       $('#' + hide1).css('border-color', '#fff');
       $('.' + hide2).css('display', 'none');
       $('#' + hide2).css('color', '#a1a6af');
       $('#' + hide2).css('border-color', '#fff');
       var i=0;
       moving(show,i,1);
       moving("serv-dics__menu",i,0);
   }
    function serviceOpen() {
        document.querySelector(".serv-dics__link").onclick = function () {  };
    }
   function serviceDisc () {
       $(".accounting-button").click(function () {
           var show ='accounting',
               hide1 = 'legal',
               hide2 ='consulting';
           serviceDiscShowing(show,hide1,hide2);
       });
       $(".legal-button").click(function () {
           var show ='legal',
               hide1 = 'accounting',
               hide2 ='consulting';
           serviceDiscShowing(show,hide1,hide2);
       });
       $(".consulting-button").click(function () {
           var show ='consulting',
               hide1 = 'accounting',
               hide2 ='legal';
           serviceDiscShowing(show,hide1,hide2);
       });
   }
    function secondcatMenu(){
            var secondcatElements = document.querySelectorAll(".serv-dics__link");
            for (var i = 0; i < secondcatElements.length; i++) {
                (function (n) {
                    secondcatElements[n].onclick = function () {
                            var that = n + 1;
                            for (var j = 1; j < secondcatElements.length + 1; j++) {
                                if (j != that) {

                                    document.querySelector(".secondcat__" + j).style.display = "none";
                                }
                            }
                            document.querySelector(".secondcat__" + (n + 1)).style.display = "block";
                            secondcatShow(document.querySelector(".secondcat__" + (n + 1)), 0, 0);
                    };
                }(i));
            }
    }
    function maps(){
        var mapElements = document.querySelectorAll(".tab__element");
        for (var i = 0; i < mapElements.length; i++) {
            (function (n) {
                mapElements[n].onclick = function () {
                    var that = n + 1;
                    for (var j = 1; j < mapElements.length + 1; j++) {
                        if (j != that) {
                            document.querySelector(".map" + j).style.display = "none";
                            mapElements[j-1].style.borderColor = "#fff";
                            mapElements[j-1].style.color = "#a1a6af";
                        }
                    }
                    mapElements[n].style.borderColor = "#b81c31";
                    mapElements[n].style.color = "#b81c31";
                    document.querySelector(".map" + (n + 1)).style.display = "block";
                    secondcatShow(document.querySelector(".map" + (n + 1)), 0, 0);
                };
            }(i));
        }
    }
   function about(){
        var vantagesBlocks = document.querySelectorAll(".vantages__block");
        var buttonsElements = document.querySelectorAll(".tab__element-about");
        for (var i = 0; i < buttonsElements.length; i++) {
            (function (that) {
                buttonsElements[that].onclick = function () {
                    for (var j = 0; j < vantagesBlocks.length; j++) {
                        if (j !== that) {
                            vantagesBlocks[j].style.display = "none";
                            buttonsElements[j].style.borderColor = "#fff";
                            buttonsElements[j].style.color = "#a1a6af";
                        }
                    }
                    buttonsElements[that].style.borderColor = "#b81c31";
                    buttonsElements[that].style.color = "#b81c31";
                    vantagesBlocks[that].style.display = "block";
                    secondcatShow(vantagesBlocks[that], 0, 0);
                };
            }(i));
        }
    }
    function picOpenClose(){
        var picElements = document.querySelectorAll(".photos__item");
        var picOpen = document.querySelectorAll(".photos__open");
        var picClose = document.querySelectorAll(".photos__close");
        var picMask = document.querySelectorAll(".photo__mask");
        for (var i = 0; i < picOpen.length; i++) {
            (function (n) {
                picOpen[n].onclick = function () {
                    for(var j = 0;  j< picOpen.length ;j++){
                        if( j !==n && getComputedStyle(picClose[j]).display ==='block') {
                            openClose(-1, picElements[j], 0);
                            picMask[j].style.display = 'block';
                            picOpen[j].style.display = 'block';
                            picClose[j].style.display = 'none';
                        }
                    }
                    picMask[n].style.display = 'none';
                    picOpen[n].style.display = 'none';
                    picClose[n].style.display = 'block';
                    picElements[n].style.position = 'absolute';
                    picElements[n].style.zIndex = '2';
                    openClose(1,picElements[n],0);
                };
            }(i));
        }
        for (var j = 0; j < picClose.length; j++) {
            (function (n) {
                picClose[n].onclick = function () {
                    openClose(-1,picElements[n],0);
                    picMask[n].style.display = 'block';
                    picOpen[n].style.display = 'block';
                    picClose[n].style.display = 'none';
                };
            }(j));
        }
    }
    function phoneCall(){
        var phoneButtons = document.querySelectorAll(".phone-button");
        for (var i = 0; i < phoneButtons.length; i++) {
            (function (n) {
                phoneButtons[n].onclick = function () {
                        document.querySelector(".phone-call").style.display = "flex";
                        document.querySelector(".black-mask").style.display = "block";
                        phoneCallShow(document.querySelector(".phone-call"), 1, 2);
                };
            }(i));
        }
    }

    var activeSlide = 1;
    var slideGo=true;
    function slide(sliderBlocks,sliderButtons, lr){
        if(slideGo === true){
            slideGo=false;
            activeSlide+= lr;
            for(var i = 0; i<sliderBlocks.length; i++){
                sliderBlocks[i].style.left =  350*(i-activeSlide+1)  + 'px';
            }
            for(var j = 0;  j< sliderButtons.length ;j++){
                if( j !== activeSlide-1) {
                   sliderButtons[j].style.backgroundColor = '#BDC5D6';
                }
            }
            sliderButtons[activeSlide-1].style.backgroundColor = '#8B9AB7';

            setTimeout(function () {slideGo=true;},1500);
        }
    }

    function slider() {
        var sliderButtons = document.querySelectorAll(".review__button");
        var sliderBlocks = document.querySelectorAll(".review__block");
        document.querySelector(".review__right").onclick = function(){
            activeSlide === sliderBlocks.length ? slide(sliderBlocks,sliderButtons,-sliderBlocks.length+1) : slide(sliderBlocks,sliderButtons,1);
        };
        document.querySelector(".review__left").onclick = function(){
            activeSlide === 1 ? slide(sliderBlocks,sliderButtons,sliderBlocks.length-1): slide(sliderBlocks,sliderButtons,-1);
        };
        for (var i = 0; i < sliderButtons.length; i++) {
            (function (n) {
                sliderButtons[n].onclick = function () {
                    slide(sliderBlocks,sliderButtons,n-activeSlide+1);
                };
            }(i));
        }
       setInterval(function() {activeSlide === sliderBlocks.length ? slide(sliderBlocks,sliderButtons,-sliderBlocks.length+1) : slide(sliderBlocks,sliderButtons,1)}, 5000);
    }
    document.querySelector(".phone-call__close").onclick = function() {
        document.querySelector(".phone-call").style.display = "none";
        document.querySelector(".black-mask").style.display = "none";
    };
    document.querySelector(".call-button").onclick = function() {
        document.querySelector(".phone-call").style.display = "none";
        document.querySelector(".black-mask").style.display = "none";
    };
    document.querySelector(".burger").onclick = function() {
        var menu = document.querySelector(".menu");
        if (getComputedStyle(menu).display != "none") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
            moving(menu, 1, 0);
        }
    };
    serviceDisc ();
    phoneCall();
    secondcatMenu();
    picOpenClose();
    maps();
    about();
    slider();
});
