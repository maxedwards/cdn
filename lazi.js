function dolazi(loadingPixel){
    const autoRetry=true;
    let x=this;
    if(!x._observer){
        x._observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach((entry) => {
                if(entry.isIntersecting || entry.intersectionRatio >= 0.01){
                    var L=entry.target;
                    if( L.dataset.src && (autoRetry||L.src!=L.dataset.src) ){
                        L.src=L.dataset.src;
                        L.onload=function(){
                            L.classList.remove('load');
                            L.removeAttribute('data-src');
                            L.lazd=1;
                        }
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
    //var lc=0;
    lazi.forEach(L=>{
        if(L.lazd)return;
        if(L.classList.contains('load'))return;
        x._observer.observe(L);
        L.classList.add('load');
        L.src=loadingPixel;
        //lc++;
    });
}