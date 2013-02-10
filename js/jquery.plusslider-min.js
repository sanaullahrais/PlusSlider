/*
 * jQuery Plus Slider 1.4.7
 * By Jamy Golden
 * http://css-plus.com
 * @jamygolden
 *
 * Regarding licensing read license.txt. 
 * tl;dr MIT
 */
;(function(e){e.plusSlider=function(t,n){var r=this;r.$el=e(t);r.el=t;r.$el.data("plusSlider",r);r.init=function(){r.options=e.extend({},e.plusSlider.defaults,n);r.$el.addClass("plusslider-container").wrap('<div class="plusslider plusslider-'+r.$el.attr("id")+'" />');r.$wrap=r.$el.parent();r.$slides=r.$el.children();r.$slideCloneFirst;r.$slideCloneLast;r.$wrapContainer=r.$wrap.parent();r.slideCount=r.$slides.length;r.slideIndexCount=r.slideCount-1;r.sliderWidth=0;r.animating=false;r.wrapContainerWidth=r.$wrapContainer.width();r.wrapContainerHeight=r.$wrapContainer.height();r.currentSlideIndex=r.options.defaultSlide;r.$currentSlide=r.$slides.eq(r.currentSlideIndex);r.currentSlideWidth=r.$currentSlide.outerWidth();r.currentSlideHeight=r.$currentSlide.outerHeight();r.calculateSliderWidth=function(){for(var e=0;e<r.slideCount;e++){if(e==0)r.sliderWidth=0;r.sliderWidth+=r.$slides.eq(e).outerWidth()}if(r.options.infiniteSlide){r.sliderWidth+=r.$slides.eq(0).outerWidth();r.sliderWidth+=r.$slides.eq(r.slideIndexCount).outerWidth()}};r.beginTimer=function(){r.timer=window.setInterval(function(){r.toSlide("next")},r.options.displayTime)};r.clearTimer=function(){if(r.timer){window.clearInterval(r.timer)}};r.setSliderDimensions=function(){r.calculateSliderWidth();r.currentSlideWidth=r.$currentSlide.outerWidth();r.currentSlideHeight=r.$currentSlide.outerHeight();if(r.options.fullWidth){r.sliderWidth=r.wrapContainerWidth*r.slideCount;if(r.options.infiniteSlide==true){r.sliderWidth=r.wrapContainerWidth*r.slideCount+2}r.wrapContainerWidth=r.$wrapContainer.width();r.$slides.width(r.wrapContainerWidth);if(r.options.infiniteSlide){r.$slideCloneFirst.width(r.wrapContainerWidth);r.$slideCloneLast.width(r.wrapContainerWidth)}r.calculateSliderWidth();r.$wrap.width(r.wrapContainerWidth).height(r.currentSlideHeight);r.$el.width(r.sliderWidth).height(r.currentSlideHeight).css("left",r.$currentSlide.position().left*-1+"px")}else{r.$wrap.width(r.currentSlideWidth).height(r.currentSlideHeight)}};r.toSlide=function(e){if(r.animating==false){r.animating=true;var t=r.currentSlideIndex;if(e==="next"||e===""){r.currentSlideIndex+=1}else if(e==="prev"){r.currentSlideIndex-=1}else{r.currentSlideIndex=parseInt(e)}if(r.options.disableLoop=="first"||r.options.disableLoop=="both"&&r.currentSlideIndex<0||r.options.disableLoop=="last"||r.options.disableLoop=="both"&&r.currentSlideIndex>r.slideIndexCount){return}if(r.currentSlideIndex>r.slideIndexCount){r.currentSlideIndex=0}else if(r.currentSlideIndex<0){r.currentSlideIndex=r.slideIndexCount}r.$currentSlide=r.$slides.eq(r.currentSlideIndex);r.currentSlideWidth=r.$currentSlide.width();r.currentSlideHeight=r.$currentSlide.height();if(r.options.onSlide&&typeof r.options.onSlide=="function")r.options.onSlide(r);if(r.options.createPagination){r.$sliderControls.find("li").removeClass("current").eq(r.currentSlideIndex).addClass("current")}if(r.options.sliderType=="slider"){var n=r.$currentSlide.position().left;if(r.options.infiniteSlide===true){if(r.currentSlideIndex==0&&e=="next"){n=r.$slideCloneFirst.position().left}else if(r.currentSlideIndex==r.slideIndexCount&&e=="prev"){n=r.$slideCloneLast.position().left}}r.$el.animate({height:r.$currentSlide.outerHeight(),left:n*-1+"px"},r.options.speed,r.options.sliderEasing,function(){if(r.currentSlideIndex==0){r.$el.css("left",r.$slides.eq(0).position().left*-1)}else if(r.currentSlideIndex==r.slideIndexCount){r.$el.css("left",r.$slides.eq(r.slideIndexCount).position().left*-1)}r.endToSlide()})}else{if(t!==r.currentSlideIndex){r.$slides.eq(t).fadeOut(r.options.speed)}r.$slides.eq(r.currentSlideIndex).fadeIn(r.options.speed,function(){r.endToSlide()})}r.$wrap.animate({height:r.$currentSlide.outerHeight(),width:r.$currentSlide.outerWidth()},r.options.speed,r.options.sliderEasing);r.$slides.removeClass("current").eq(r.currentSlideIndex).addClass("current")}if(r.options.autoPlay){r.clearTimer();r.beginTimer()}};r.endToSlide=function(){r.animating=false;if(r.options.afterSlide&&typeof r.options.afterSlide=="function")r.options.afterSlide(r);if(r.options.onSlideEnd&&typeof r.options.onSlideEnd=="function"&&r.currentSlideIndex==r.slideIndexCount)r.options.onSlideEnd(r)};if(r.slideCount===1){r.options.autoPlay=false;r.options.createArrows=false;r.options.createPagination=false}if(r.options.sliderType=="fader"){r.$slides.not(".current").hide();r.options.infiniteSlide=false;r.options.fullWidth=false}r.$slides.addClass("child").eq(r.currentSlideIndex).addClass("current");if(r.options.infiniteSlide===true){r.$slides.css("display","block");r.$slideCloneFirst=r.$slides.first().clone().removeClass("current").insertAfter(r.$slides.eq(r.slideIndexCount));r.$slideCloneLast=r.$slides.last().clone().insertBefore(r.$slides.eq(0))}r.setSliderDimensions();r.currentSlideWidth=r.$currentSlide.outerWidth();r.currentSlideHeight=r.$currentSlide.outerHeight();if(r.options.sliderType=="slider"){r.calculateSliderWidth();r.$wrap.addClass("plustype-slider").find(r.$el).width(r.sliderWidth);if(r.options.fullWidth){r.setSliderDimensions();e(window).resize(function(){if(r.options.autoPlay){r.clearTimer();r.beginTimer()}r.setSliderDimensions()})}r.$slides.show();r.$el.css("left",r.$currentSlide.position().left*-1+"px")}else{r.$wrap.addClass("plustype-fader");r.$slides.eq(0).show()}if(r.options.createPagination){r.$sliderControls=e("<ul />",{"class":"plusslider-pagination"});switch(r.options.paginationPosition){case"before":r.$sliderControls.insertBefore(r.$wrap);break;case"prepend":r.$sliderControls.prependTo(r.$wrap);break;case"after":r.$sliderControls.insertAfter(r.$wrap);break;default:r.$sliderControls.appendTo(r.$wrap);break}r.$sliderControls.wrap('<div class="plusslider-pagination-wrapper" />');for(var t=0;t<r.slideCount;t++){e("<li />",{"data-index":t,text:typeof r.$slides.eq(t).attr("data-title")==="undefined"?t+1:r.$slides.eq(t).attr("data-title")}).appendTo(r.$sliderControls)}if(r.options.paginationWidth)r.$sliderControls.width(r.$sliderControls.find("li").outerWidth(true)*r.slideCount);r.$sliderControls.find("li").click(function(){var t=e(this).index();r.toSlide(t)}).eq(r.currentSlideIndex).addClass("current")}if(r.options.createArrows){r.$arrows=e("<ul />",{"class":"plusslider-arrows"});switch(r.options.arrowsPosition){case"before":r.$arrows.insertBefore(r.$wrap);break;case"append":r.$arrows.appendTo(r.$wrap);break;case"after":r.$arrows.insertAfter(r.$wrap);break;default:r.$arrows.prependTo(r.$wrap);break}r.$arrows.wrap('<div class="plusslider-arrows-wrapper" />');e("<li />",{"class":"next",text:r.options.nextText}).prependTo(r.$arrows);e("<li />",{"class":"prev",text:r.options.prevText}).prependTo(r.$arrows);r.$arrows.find(".next").click(function(){r.toSlide("next")});r.$arrows.find(".prev").click(function(){r.toSlide("prev")})}if(r.options.autoPlay){r.beginTimer();if(r.options.pauseOnHover){r.$el.hover(function(){r.clearTimer()},function(){r.beginTimer()})}}if(r.options.keyboardNavigation){r.$el.click(function(){e(".active-plusslider").removeClass("active-plusslider");e(this).addClass("active-plusslider")});e(window).keyup(function(e){if(r.$el.is(".active-plusslider")){if(e.keyCode==39){r.toSlide("next")}else if(e.keyCode==37){r.toSlide("prev")}}})}if(r.options.onInit&&typeof r.options.onInit=="function")r.options.onInit(r)};r.init()};e.plusSlider.defaults={sliderType:"slider",infiniteSlide:true,disableLoop:false,fullWidth:false,defaultSlide:0,displayTime:4e3,sliderEasing:"linear",speed:500,autoPlay:true,keyboardNavigation:true,pauseOnHover:true,createArrows:true,arrowsPosition:"prepend",nextText:"Next",prevText:"Previous",createPagination:true,paginationPosition:"append",paginationWidth:false,onInit:null,onSlide:null,afterSlide:null,onSlideEnd:null};e.fn.plusSlider=function(t){return this.each(function(){new e.plusSlider(this,t)})}})(jQuery);
