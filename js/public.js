function resize(origin,type){
        type = type || "x";
        if(type == "x"){
            var widths = document.documentElement.clientWidth;
            var scale = widths/origin*100+"px";
        }else if(type == "y"){
            var hieghts = document.documentElement.clientHeight;
            var scale = heights/origin*100+"px";
        }
        document.getElementsByTagName("html")[0].style.fontSize = scale;
    }
    window.onload = function(){
        resize(750);
       	var mySwiper = new Swiper('.swiper-container',{
            pagination : '.swiper-pagination',
        });
        var myscroll=new IScroll('#wrapper',{
        	vScrollbar:true,
        	preventDefault:false,
        }); 
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }