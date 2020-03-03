function dolazi(loadingPixel){
    const autoRetry=true;
    let x=this;
    if(!x._observer){
        x._observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach((entry) => {
                if(entry.isIntersecting || entry.intersectionRatio >= 0.01){
                    var L=entry.target;
                    if(
                        L.classList.contains("load")
                        && L.dataset.src
                        && L.src!=L.dataset.src
                    ){
                        L.src=L.dataset.src;
                    }
                }
            });
        }, {
            root: x._scroll,
            rootMargin: '30%',
            threshold: .01
        });
    }

    let lazi=document.querySelectorAll('img[data-src]');
    lazi.forEach(L=>{
        if(L.lazd)return;
        L.lazd=1; x._observer.observe(L);
        L.classList.add('load');
        L.onload=function(){
            if(L.src==loadingPixel)return;
            L.classList.remove('load');
            L.removeAttribute('data-src');
        }
        L.onerror=function(){
            if(L.src==loadingPixel)return;
            if(!autoRetry)L.classList.remove('load');
            L.src=loadingPixel;
        }
        L.src=loadingPixel;
    });
}