/*Generated Tue Feb 11 2020 22:19:05 GMT+0100 (Central European Standard Time)*/
/*BEGIN frag.tapp2js:gallery via pages/tapp/_gallery.tapp.min.htm*/
(function(){var s=document.createElement('style');
s.innerHTML=`[tapp-component].gallery,[tapp-component].gallery div{box-sizing:border-box;color:#fff;font-size:24px;font-family:Arial,Helvetica,sans-serif;border:0;margin:0;padding:0}[tapp-component].gallery .scroller{overflow-x:auto;word-wrap:none;white-space:nowrap;scrollbar-width:none;box-sizing:border-box;padding:2vmax;padding-right:0;height:100%;background:0 0}[tapp-component].gallery .feat ::-webkit-scrollbar{height:3px;width:3px;background:#d64}[tapp-component].gallery .scroller::-webkit-scrollbar{height:0;width:0;background:0 0}[tapp-component].gallery .scroller:focus{outline:0!important}[tapp-component].gallery .feat:focus{outline:0!important}[tapp-component].gallery .scroller .iwrap{display:inline-block;box-sizing:border-box;margin:0;height:100%;padding:0;margin-right:2vmax;background:0 0}[tapp-component].gallery .scroller .iwrap img{cursor:pointer;height:100%;width:auto;object-fit:contain;max-width:75vw;box-sizing:border-box;background:0 0;border:0}[tapp-component].gallery .scroller .iwrap img.load{width:30vw;box-sizing:border-box;padding:25%}[tapp-component].gallery .feat{display:none;position:fixed;top:0;bottom:0;left:0;right:0;background:#000;z-index:9999999;margin:0;padding:0;border:0;overflow-y:auto;box-sizing:border-box}[tapp-component].gallery.feat .feat{display:block}body.gallery-feat{overflow:hidden}[tapp-component].gallery .feat img{width:100%;height:100%;border:0;padding:0;margin:0;object-fit:contain}[tapp-component].gallery img.load{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBjbGFzcz0ic3Bpbm5lciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9Im1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7IGFuaW1hdGlvbi1kZWxheTogMHM7IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMiIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2U9IiNkZDY2NDQiIHN0cm9rZS1kYXNoYXJyYXk9IjUwLjI2NTQ4MjQ1NzQzNjY5IDUwLjI2NTQ4MjQ1NzQzNjY5IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0eWxlPSJhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZzsgYW5pbWF0aW9uLWRlbGF5OiAwczsiIHRyYW5zZm9ybT0icm90YXRlKDEyNi45NTQgNTAgNTApIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMC42NDEwMjU2NDEwMjU2NDFzIiBrZXlUaW1lcz0iMDsxIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7IGFuaW1hdGlvbi1kZWxheTogMHM7Ij48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPgo8IS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAtLT48L3N2Zz4=);background-repeat:no-repeat;background-size:20% 20%;background-position:center center}[tapp-component].gallery .feat img.load{border:1px solid #333;box-sizing:border-box}[tapp-component].gallery .feat .hud{display:none;cursor:pointer;position:fixed;top:0;left:0;right:0;bottom:0}[tapp-component].gallery .feat.hud .hud{display:block}[tapp-component].gallery .feat .hud div{position:fixed;display:block;width:auto;height:auto;background:rgba(0,0,0,.4);padding:10px}[tapp-component].gallery .feat .hud .navb{font-size:50px;top:calc(50vh - 40px)}[tapp-component].gallery .feat .hud .navb.left{left:0}[tapp-component].gallery .feat .hud .navb.right{right:0}[tapp-component].gallery .feat .hud .caption{top:0;left:0;font-weight:700;max-width:50vw;max-height:calc(50vh - 80px);overflow-y:auto}[tapp-component].gallery .feat .hud .topr{right:0;top:0;padding:0;text-align:right;background:0 0}[tapp-component].gallery .feat .hud .topr div{position:relative;display:inline-block;cursor:pointer;font-size:50px}[tapp-component].gallery .feat .hud .info{bottom:0;left:0;right:0;max-height:calc(50vh - 80px);overflow-y:auto}[tapp-component].gallery .feat .hud .exit{bottom:0;right:0;background:red;cursor:pointer}[tapp-component].gallery .hid{display:none!important}[tapp-component].gallery.carousel{position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;height:auto!important;background:#000!important;padding-top:10vh!important;padding-bottom:10vh!important;margin:0!important;border:0!important}[tapp-component].gallery.carousel .scroller{height:100%;margin:0;padding:5vmax;padding-right:0}[tapp-component].gallery.carousel .scroller .iwrap{margin-right:5vmax}[tapp-component].gallery.carousel .scroller .iwrap img.load{width:75vh!important}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}`;
document.head.appendChild(s);
//var module={};
tapp.on["gallery.create"]=function(e){Array.isArray(e.imgs)||alert("Gallery has no images"),e.feat=parseInt(e.feat);var t=e.feat>=0;t||(e.feat=0),e.loadingPixel="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",e._initCarousel=e.tapp.el.classList.contains("carousel"),e._feat=e.tapp.el.shimQSA(".feat")[0],e._fimg=e._feat.shimQSA("img")[0],e._scroll=e.tapp.el.shimQSA(".scroller")[0],e._scroll.focus(),e.fnFullscreen=function(e){e||(e=document.documentElement),document.fullscreenElement!==e&&(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen())},e.fnFullscreenOff=function(){document.fullscreenElement&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen())},e.fnFeature=function(t,a){a||e.fnFullscreen(),e.feat=t,e.tapp.render(),e._fimg.src=e.loadingPixel,e._fimg.onload=function(){e._fimg.src!=e.loadingPixel&&e._fimg.classList.remove("load")},e._fimg.classList.add("load"),e._fimg.src=e.imgs[e.feat].src,e.tapp.el.classList.add("feat"),e._swiping?e._feat.classList.remove("hud"):a&&e._feat.classList.add("hud"),document.body.classList.add("gallery-feat"),e._feat.focus()},e.carousel=function(t){e.fnFullscreen(),t.stopPropagation(),e.tapp.el.classList.add("carousel"),e.tapp.el.classList.remove("feat"),e._scroll.focus(),delete e._swiping},e.gofeat=function(t){var a=e.feat+t;a<0||a>e.imgs.length-1||e.fnFeature(a)},e.keydown=function(t){var a=t.key.toLowerCase();"escape"!=a&&"esc"!=a||e.togfeat(t),32==t.keyCode&&(e._feat.classList.toggle("hud"),t.stopPropagation(),e._feat.focus()),"pagedown"!=a&&"arrowright"!=a||(e.gofeat(1),t.stopPropagation()),"pageup"!=a&&"arrowleft"!=a||(e.gofeat(-1),t.stopPropagation()),"home"==a&&(e.fnFeature(0),t.stopPropagation()),"end"==a&&(e.fnFeature(e.imgs.length-1),t.stopPropagation())},e.togfeat=function(t){e.tapp.el.classList.contains("feat")?(e._scroll.focus(),t.stopPropagation(),e.tapp.el.classList.remove("feat"),document.body.classList.remove("gallery-feat"),delete e._swiping,e._initCarousel||(e.fnFullscreenOff(),e.tapp.el.classList.remove("carousel"))):(e.fnFeature(e.feat),e._feat.classList.add("hud"))},e._swipeready||(document.addEventListener("swiped-right",function(t){0!=e.feat&&e.tapp.el.classList.contains("feat")&&(e._swiping=1,e.fnFeature(e.feat-1))}),document.addEventListener("swiped-left",function(t){e.feat!=e.imgs.length-1&&e.tapp.el.classList.contains("feat")&&(e._swiping=1,e.fnFeature(e.feat+1))}),e._swipeready=!0),console.log("gallery.create"),t&&e.fnFeature(e.feat,1)},tapp.on["gallery.render"]=function(e){},tapp.on["gallery.render-post"]=function(e){e.imgHeight=e.tapp.el.shimQSA(".scroller .iwrap")[0].clientHeight;e._observer||(e._observer=new IntersectionObserver(function(e,t){e.forEach(e=>{if(e.isIntersecting||e.intersectionRatio>=.01){var t=e.target;t.dataset.src&&(t.src=t.dataset.src,t.onload=function(){t.classList.remove("load"),t.removeAttribute("data-src"),t.lazd=1})}})},{root:e._scroll,rootMargin:"30%",threshold:.01})),e.tapp.el.shimQSA("img[data-src]").forEach(t=>{t.lazd||t.classList.contains("load")||(e._observer.observe(t),t.classList.add("load"),t.src=e.loadingPixel)})},tapp.on["gallery.destroy"]=function(e){console.log("gallery.destroy")};
//var config=module.exports;
tapp.templates["gallery"]=`<div class="scroller noselect" tapp tapp-tabindex="Math.random().toString().slice(-3)" onkeydown="ctx.keydown(event)" ><div class="iwrap" tapp-for="i:imgs"> <img tapp tapp-data-src="ctx.imgs[:i:].src" tapp-alt="ctx.imgs[:i:].cap" tapp-title="ctx.imgs[:i:].cap" onclick="event.stopPropagation();ctx.fnFeature(:i:)" /></div></div><div class="feat hud noselect" tapp tapp-tabindex="Math.random().toString().slice(-3)" onkeydown="ctx.keydown(event)" onclick="event.stopPropagation();this.classList.toggle('hud')" > <img tapp tapp-alt="ctx.imgs[ctx.feat].cap" /><div class="hud"><div class="caption" tapp-eval="imgs[feat].cap"></div><div class="info" tapp-eval="imgs[feat].inf"></div><div class="topr"><div class="caro" tapp onclick="ctx.carousel(event)" tapp-class="ctx._initCarousel?'hid':''" >&rect;</div><div class="bye" tapp onclick="ctx.togfeat(event)">&times;</div></div><div class="exit" tapp-eval="imgs[feat].exit+'&raquo;'" onclick="event.stopPropagation();window.open(ctx.imgs[ctx.feat].exitu);ctx._fimg.focus();" ></div><div class="navb left" tapp onclick="event.stopPropagation();delete ctx._swiping;ctx.fnFeature(ctx.feat-1)" tapp-class="(ctx.feat>0)?'':'hid'" title="previous" >&laquo;</div><div class="navb right" tapp onclick="event.stopPropagation();delete ctx._swiping;ctx.fnFeature(ctx.feat+1)" tapp-class="(ctx.feat<ctx.imgs.length-1)?'':'hid'" title="next" >&raquo;</div></div></div>`;
})();

/*END frag.tapp2js:gallery via pages/tapp/_gallery.tapp.min.htm*/
