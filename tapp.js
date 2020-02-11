/*GENERATED Tue Feb 11 2020 16:18:48 GMT+0100 (Central European Standard Time)*/

/*BEGIN:www/tapp/tapp.expand.js*/
window._fnraws=[];
Object.prototype.shimQSA=function(sel,dbug){
    if(typeof this.querySelectorAll != 'function') return alert('Not a DOM node / QSA missing!');
    var r=this.querySelectorAll(sel);
    
    return r;
}
function debugWrap(raw,crumb){
    //console.log(raw);
    window._fnraws.push(raw);
    var raw2="with(this) return `${" + raw + "}`;";
    var code= "window._fnraws[" + (window._fnraws.length-1) + "]";
    //alert(code);
    var compiled="try{" + raw2 + "}catch(e){console.error(e.toString(),'IN','"+crumb+"', '[', " + code + ", ']')}";
    //console.log('COMPILED:',compiled);
    return new Function(compiled);
}

function tapp(el, componentID, crumb){
    var C=this;
    C.src=el.innerHTML;
    C.crumb=crumb||'APP';
    if(!el)throw 'Invalid DOM node';
    C.componentID=componentID || 'MAIN';
    
    el.tapp=C;
    C.el=el;

    C._components=[];
    //C._fnall=[];
    C._inners=[];
    C._attrs=[];
    return C;
}

tapp.prototype.refreshComponents = function(host,andboot,onfly){
    var C=this;
    if(!host._comps){
        if(host.innerHTML.indexOf('tapp-component')<0)return host._comps=[];
        host._comps=host.shimQSA('[tapp-component]',C.crumb);
        //console.log('refreshComponents found',C.el._comps.length,'DOM nodes for',C.crumb);
    }
    if(andboot){
        host._comps.forEach(el=>C._instantiateComponent(el,C, onfly?host:null));
        return host._comps.length;
    } else return 0;
}

tapp.prototype._instantiateComponent = (divC,parent/*used during eval*/,hostel)=>{
    var C=this;//.root||this; 
    if(divC.tapp) return divC.tapp.render();
    //console.log('Instantiating component',divC.className,divC.innerText)
    //divC.removeAttribute('tapp-component');
    var cid;
    Object.keys(tapp.templates).forEach(ci=>{
        if(divC.classList.contains(ci))cid=ci;
    });
    if(!cid)return console.log(divC.className,' is not a registered component class:');

    var O, el=divC;
    var init=divC.getAttribute('tapp-init')||divC.innerText;
    //console.log(divC.className+':'+init,el.outerHTML);
    
    with(parent.ctx){
        try{
            eval('O='+(init||'{}'));
        }catch(e){
            //console.log('***ERROR EVALUATING TEMPLATE DATA:***',init)
            console.error(e.toString(),'in',parent.crumb,'COMPONENT',cid,'[',init, ']');
        }
    }
    
    divC.classList.remove('tapp');// prevent re-eval unless rebuilt
    
    divC.innerHTML=tapp.templates[cid];
    new tapp(
        divC,
        cid,
        parent.crumb+'.'+cid
    );
    parent._components.push(divC.tapp);
    C.root=parent.root;
    divC.tapp.parent=parent;
    divC.tapp.root=C.root;
    divC.tapp.hostel=hostel;
    return divC.tapp.create(O,C.root).render();
}


tapp.prototype.create=function(O,root){
    var C=this;
    
    C.root=root||C.root||C;
    O=O||{};
    O.tapp=C; // do we really want to hide the global tapp?? Think so...
    C.ctx=C.el.ctx=O; // for native events

    if(typeof tapp.on[C.componentID+'.create']=='function'){
        tapp.on[C.componentID+'.create'].call(C,C.ctx);
        //console.log('Called oncreate function for '+C.componentID);
    } //else console.log('No CREATE function for component',C.componentID);
    C.expand(); // REDUNDANT?
    C.refreshComponents(C.el); // REDUNDANT?
    return C;
}

tapp.prototype.expand=function(){
    const skipattr='tapp tapp-component tapp-eval tapp-boot tapp-init'.split(' ');

    var C=this; var el=C.el;
    //C._fnall.splice(0);
    C._inners.splice(0);
    C._components.splice(0);
    C._attrs.splice(0);
    
    // perform loop expansions:
    function doExpand(L){
        // re-axpansion NOT IMPLEMENTED
        // if we re-expanding, must first destroy all inner codes, templates etc!
        // instead, throw down instances of tapp-for blocks, from with code blocks

        var arr=L.getAttribute('tapp-for').split(':');
        var key=arr[0];
        with(C.ctx){arr=Array.from(eval(arr[1]))}
        

        L.removeAttribute('tapp-for');
        L.setAttribute('tapp','');
        L.classList.add('tapp-exp');
        
        var tmpl = (L.outerHTML).split(':'+key+':');
        
        var h='';
        
        for(var i=0;i<arr.length;i++){
            h+=tmpl.join(i.toString());
        }
        //alert(L.outerHTML+'\n\nto\n\n'+h);
        L.outerHTML=h;
        
    }
    function expNext(){
        var L=document.querySelector('[tapp-for]')
        if(!L)return;//console.log('Exited an expansion loop');
        doExpand(L);
        expNext();
    }
    expNext();
    
    //el.shimQSA('[tapp-for]',C.crumb).forEach(doExpand);

    el.shimQSA('[tapp-evalto]',C.crumb).forEach(E=>{
        var tag=E.getAttribute('tapp-evalto');
        E.outerHTML=`<${tag} tapp-eval>${ E.getAttribute('tapp-eval')||E.innerText }</${tag}>`;
    });

    el.shimQSA('code',C.crumb).forEach(E=>{
        E.outerHTML=`<span tapp-eval>${ E.getAttribute('tapp-eval')||E.innerText }</span>`;
    });

    el.shimQSA('[tapp-eval]',C.crumb).forEach(E=>{
        E.tapp=C;
        
        

        E._evalRaw= E.getAttribute('tapp-eval')||E.innerText;
        E.setAttribute('tapp-eval','');
        //alert(E._evalRaw);
        C.ctx.Components=tapp.components;
        E.fnHTML=((debugWrap(E._evalRaw,C.crumb+':CODE'))).bind(C.ctx);
        E.fnInner=function(){
            var h=E.fnHTML();
            //if(typeof Mustache!='undefined')h=Mustache.render(h,C.ctx);
            if(E.innerHTML==h)return;

            
            if(E._comps){
                E._comps.forEach(N=>{
                    N.tapp.destroy();
                    delete N.tapp;
                });
                delete E._comps;
            }
            E.innerHTML=h;
            C.refreshComponents(E,1,1);
        }
        C._inners.push(E.fnInner);
        //C._fnall.push(E.fnInner);
    });

    //console.log('C._inners',C._inners);
    el.shimQSA('[tapp],[tapp-eval],[tapp-class],[tapp-style],[tapp-component]',C.crumb).forEach(E=>{
        if(!E.ctx){
            // allows native onclick to work with the data and trigger refreshes:
            E.ctx=C.ctx;
            E.render=C.render.bind(C);
            E.refresh=function(){ E._fnall.forEach(F=>F()); }
            
        }
        E._fnall=[];
        if(E.getAttribute('tapp-class')&&!E.fnClass){
            E._classRaw=E.getAttribute('tapp-class');
            E.removeAttribute('tapp-class');
            E._basClass=E.className;
            E._fnClass=(debugWrap(E._classRaw,C.crumb+':CLASS')).bind(C);
            E.fnClass=function(){E.className=E._basClass+' '+E._fnClass();}
            C._attrs.push(E.fnClass);
            E._fnall.push(E.fnClass);
        }
        if(E.getAttribute('tapp-style')&&!E.fnStyle){
            E._styleRaw=E.getAttribute('tapp-style');
            E.removeAttribute('tapp-style');
            E._basStyle=E.style.cssText;
            E._fnStyle=(debugWrap(E._styleRaw,C.crumb+':STYLE')).bind(C);
            E.fnStyle=function(){E.style.cssText=E._basStyle+';'+E._fnStyle();}
            C._attrs.push(E.fnStyle);
            E._fnall.push(E.fnStyle);
        }
        Array
            .from(E.attributes)
            .filter(a =>
                        a.specified
                        && (skipattr.indexOf(a.nodeName)<0)
                        && a.nodeName.startsWith('tapp-')
            )
            .forEach(a=>{
                var aRaw=E.getAttribute(a.nodeName), attr=a.nodeName.slice(a.nodeName.indexOf('-')+1);
                E.removeAttribute(a.nodeName);
                let f=(debugWrap(aRaw,C.crumb+':'+attr)).bind(C);
                let F=function(){E.setAttribute(attr,f());}
                C._attrs.push(F);
                E._fnall.push(F);
                //console.log('Added build function for '+attr);
            });
        
    });

    return C;
}

tapp.prototype.render=function(justme,channel){
    var C=this;
    if(!C._inners)return console.warn('!!tapp.js: SKIPPED RENDER OF DESTROYED COMPONENT',C)
    //console.log('tapp.render',C.componentID,C.ctx);
    if(typeof tapp.on[C.componentID+'.render']=='function'){
        tapp.on[C.componentID+'.render'].call(C,C.ctx);
        //alert('Called onrender function for a '+C.componentID);
    }

    //C.expand();
    
    C._inners&&C._inners.forEach(F=>F());
    
    C._attrs&&C._attrs.forEach(F=>F());
    

    
    if(!justme)refd=C.refreshComponents(C.el,1);

    if(typeof tapp.on[C.componentID+'.render-post']=='function'){
        tapp.on[C.componentID+'.render-post'].call(C,C.ctx);
        //alert('Called onrender function for a '+C.componentID);
    }


    
    
    
    return C;
}

tapp.prototype.destroy=function(reset){
    var C=this;
    if(C.componentID && (typeof tapp.on[C.componentID+'.destroy'] == 'function'))
        tapp.on[C.componentID+'.destroy'].call(C,C.ctx);
    if(C.parent){
        C.parent.removeChild(C); // in case parent didn't remove it first
        delete C.parent;
    }
    //C.el.outerHTML='';//??
    C._inners&&C._inners.splice(0); 
    C._attrs&&C._attrs.splice(0); 
    C._components&&C._components.forEach(C=>{delete C.parent; C.destroy()});
    C._components&&C._components.splice(0);
    
    if(reset){C.el.innerHTML=C.src; return C;}
    if(C.el){
        C.el.innerHTML=''; C.el.outerHTML='';
    } else alert('An elementless component was redestroyed!');
    delete C.el; delete C._inners; delete C._attrs; delete C._components; delete C.ctx; delete C.O;
    return C;
}

tapp.prototype.reboot = tapp.prototype.reset = function(){
    var C=this;
    var O=C.ctx;
    this.destroy(1).create(this.ctx).render();
}

tapp.prototype.removeChild=function(C){
    var P=this;
    var i=P._components.indexOf(C);
    if(i<0)throw 'No such child'
    P._components.splice(i,1);
    //alert('Removed component '+i+' from '+this.crumb)
}


tapp.on={};
tapp.templates={};
tapp.fetches=0;
tapp.registerComponents=function(){

    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("tapp-include-html");
            
            if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                tapp.fetches++;
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        tapp.fetches--;
                        if (this.status == 200) {
                            elmnt.innerHTML = this.responseText;

                            var h0=document.getElementsByTagName("head")[0];
                            
                            elmnt.shimQSA('script','includeHTML').forEach(S=>{
                                if (S.src != "") {
                                    var tag = document.createElement("script");
                                    tag.src = S.src;
                                    h0.appendChild(tag);
                                } else {
                                    try{
                                        eval(S.innerHTML);
                                        //
                                    }catch(e){
                                        
                                        console.error(e);
                                    }
                                }
                            });

                            /*
                            elmnt.shimQSA('style','includeHTML').forEach(S=>{
                                var tag = document.createElement("style");
                                h0.appendChild(tag);
                                tag.innerHTML=S.innerHTML;
                                alert('tapp-include-html inserted a style block from '+file);
                            });
                            */

                            //alert('Loaded & processed '+file);
                            
                            
                        }
                        if (this.status == 404) {elmnt.innerHTML = "<b>tapp-include-html</b><br /><br />404 not found: <pre>"+file+"</pre>";}
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("tapp-include-html");
                        elmnt.setAttribute("tapp-included",file)
                        tapp.registerComponents();
                        //includeHTML();
                        if(tapp.fetches==0 && window.loaded)tapp.isReady();
                    }
                }
                xhttp.open("GET", file, true);
                //setTimeout(function(){
                    xhttp.send();
                    //
                //},1)
                
                /* Exit the function: */
                return;
            }
        }
    }
    includeHTML();

    document.shimQSA('template.tapp-template,template[tapp-template]','registerComponents').forEach(T=>{
        if(!T.id)T.id=T.getAttribute('tapp-template');
        if(!T.id){
            
            return;
        }
        if(tapp.templates[T.id])return;//console.log('Updating defintion of',T.id)
        tapp.templates[T.id]=T.innerHTML;
        tapp.components=tapp.components||{};
        tapp.components[T.id]=function(O){
            return `<div tapp-component class="${T.id}">${JSON.stringify(O)}</div>`
        }
        tapp.components[T.id].all=function(A){
            return A.map(e=>tapp.components[T.id](e)).join('\n')
        }
        //
    });

    return tapp;
}
tapp.boot=function(el,O){
    //console.log('tapp.boot',el);
    if(typeof el=='string')el=document.querySelector(el);
    if(!el.tapp){
        
        el.tapp=new tapp(el).create(O);
    }
    var t=new Date();
    
    el.tapp.render();
    
    return el.tapp;
}
tapp._onready=[];
tapp.onready=function(F){ tapp._onready.push(F); }
tapp.isReady=function(){ tapp._onready.forEach(F=>F()); }
window.onload=function(){
    window.loaded=true;
    if(!tapp.fetches)tapp.isReady();
    
}

if(document.readyState != "loading")
    tapp.registerComponents();
else
    window.addEventListener('DOMContentLoaded',tapp.registerComponents);

tapp.onready(function(){
    document.shimQSA('[tapp-boot]').forEach(el=>{
        var o={}, boot=el.getAttribute('tapp-boot');
        if(boot)try{eval("o="+boot)}catch(e){console.error('tapp-boot invalid config:', e)}
        tapp.boot(el,o);
        
    });
});

/* https://github.com/john-doherty/swiped-events/blob/master/src/swiped-events.js */
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var u=e.createEvent("CustomEvent");return u.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),u},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;o=t.target,l=Date.now(),n=t.touches[0].clientX,u=t.touches[0].clientY,a=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!u)return;var e=t.touches[0].clientX,l=t.touches[0].clientY;a=n-e,i=u-l},!1),e.addEventListener("touchend",function(t){if(o!==t.target)return;var e=parseInt(o.getAttribute("data-swipe-threshold")||"20",10),s=parseInt(o.getAttribute("data-swipe-timeout")||"500",10),r=Date.now()-l,c="";Math.abs(a)>Math.abs(i)?Math.abs(a)>e&&r<s&&(c=a>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&r<s&&(c=i>0?"swiped-up":"swiped-down");""!==c&&o.dispatchEvent(new CustomEvent(c,{bubbles:!0,cancelable:!0}));n=null,u=null,l=null},!1);var n=null,u=null,a=null,i=null,l=null,o=null}(window,document);/*END:www/tapp/tapp.expand.js*/