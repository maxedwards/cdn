/*GENERATED Thu Feb 20 2020 19:34:49 GMT+0100 (Central European Standard Time)*/
/*BEGIN:www/tapp.static/tapp.opt.src.js*/
/*

MAJOR BREAKING CHANGES:

> tapp-<ANYTHING> is not t-<ANYTHING> - in stylesheets, html attributes, etc

> t-html REPLACES t-eval

> t-attribute always now evaluates in the context of C.ctx (previously was erraycally usually C, sometimes C.ctx),

e.g. instead of:
    tapp-data-src="ctx.imgs[ctx.feat].src"
do
    t-data-src="imgs[feat].src"

*/
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
        if(host.innerHTML.indexOf('t-component')<0)return host._comps=[];
        host._comps=host.shimQSA('[t-component]',C.crumb);
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
    //divC.removeAttribute('t-component');
    var cid;
    Object.keys(tapp.templates).forEach(ci=>{
        if(divC.classList.contains(ci))cid=ci;
    });
    if(!cid)return console.log(divC.className,' is not a registered component class:');

    var O, el=divC;
    var init=divC.getAttribute('t-init')||divC.innerText;
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
    const skipattr='tapp t-component t-eval t-evalto t-html t-for t-implements t-boot t-init'.split(' ');

    var C=this; var el=C.el;
    //C._fnall.splice(0);
    C._inners.splice(0);
    C._components.splice(0);
    C._attrs.splice(0);
    
    // perform loop expansions:
    function doExpand(L){
        // re-axpansion NOT IMPLEMENTED
        // if we re-expanding, must first destroy all inner codes, templates etc!
        // instead, throw down instances of t-for blocks, from with code blocks

        var arr=L.getAttribute('t-for').split(':');
        var key=arr[0];
        with(C.ctx){arr=Array.from(eval(arr[1]))}
        

        L.removeAttribute('t-for');
        L.setAttribute('tapp','');
        L.classList.add('t-exp');
        
        var tmpl = (L.outerHTML).split(':'+key+':');
        
        var h='';
        
        for(var i=0;i<arr.length;i++){
            h+=tmpl.join(i.toString());
        }
        //alert(L.outerHTML+'\n\nto\n\n'+h);
        L.outerHTML=h;
        
    }
    function expNext(){
        var L=document.querySelector('[t-for]')
        if(!L)return;//console.log('Exited an expansion loop');
        doExpand(L);
        expNext();
    }
    expNext();
    
    //el.shimQSA('[t-for]',C.crumb).forEach(doExpand);

    el.shimQSA('[t-evalto]',C.crumb).forEach(E=>{
        var tag=E.getAttribute('t-evalto');
        E.outerHTML=`<${tag} t-html>${ E.getAttribute('t-html')||E.innerText }</${tag}>`;
    });

    el.shimQSA('code',C.crumb).forEach(E=>{
        // <code>fn()</code> is simply shorthand for <span t-html="fn()"></span> pt <span t-html>fn()</span>
        E.outerHTML=`<span t-html>${ E.getAttribute('t-html')||E.innerText }</span>`;
    });

    el.shimQSA('[t-eval],[t-html]',C.crumb).forEach(E=>{
        E.tapp=C;
        
        

        E._evalRaw= E.getAttribute('t-eval')||E.getAttribute('t-html')||E.innerText;
        E.setAttribute('t-eval','');E.setAttribute('t-html','');
        //alert(E._evalRaw);
        C.ctx.Components=tapp.components;
        E.fnHTML=((debugWrap(E._evalRaw,C.crumb+':HTML'))).bind(C.ctx);
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
    el.shimQSA('[tapp],[t-eval],[t-html],[t-class],[t-style],[t-component]',C.crumb).forEach(E=>{
        if(!E.ctx){
            // allows native onclick to work with the data and trigger refreshes:
            E.ctx=C.ctx;
            E.render=C.render.bind(C);
            E.refresh=function(){ E._fnall.forEach(F=>F()); }
            
        }
        E._fnall=[];
        if(E.getAttribute('t-class')&&!E.fnClass){
            E._classRaw=E.getAttribute('t-class');
            E.removeAttribute('t-class');
            E._basClass=E.className;
            E._fnClass=(debugWrap(E._classRaw,C.crumb+':CLASS')).bind(C.ctx);
            E.fnClass=function(){E.className=E._basClass+' '+E._fnClass();}
            C._attrs.push(E.fnClass);
            E._fnall.push(E.fnClass);
        }
        if(E.getAttribute('t-style')&&!E.fnStyle){
            E._styleRaw=E.getAttribute('t-style');
            E.removeAttribute('t-style');
            E._basStyle=E.style.cssText;
            E._fnStyle=(debugWrap(E._styleRaw,C.crumb+':STYLE')).bind(C.ctx);
            E.fnStyle=function(){E.style.cssText=E._basStyle+';'+E._fnStyle();}
            C._attrs.push(E.fnStyle);
            E._fnall.push(E.fnStyle);
        }
        Array
            .from(E.attributes)
            .filter(a =>
                        a.specified
                        && (skipattr.indexOf(a.nodeName)<0)
                        && a.nodeName.startsWith('t-')
            )
            .forEach(a=>{
                var aRaw=E.getAttribute(a.nodeName), attr=a.nodeName.slice(a.nodeName.indexOf('-')+1);
                E.removeAttribute(a.nodeName);
                let f=(debugWrap(aRaw,C.crumb+':'+attr)).bind(C.ctx);
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
tapp._fetched={};

const phold='<!--COMPONENT HAS NOT LOADED-->';

function includeHTML(then) {
    let file, xhttp, whichc;
    var h0=document.getElementsByTagName("head")[0];
    document.shimQSA('[t-include-html]').forEach(elmnt=>{
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("t-include-html");
        elmnt.removeAttribute("t-include-html");
        if(!file)return;
        
        whichc=elmnt.getAttribute('t-implements');
        if(whichc&&!!tapp.templates[whichc])return console.log('Ignoring include-html',file,'- component',whichc,'already loading or defined');
        if(whichc)tapp.templates[whichc]=phold;
        
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            tapp.fetches++;
            
            xhttp = new XMLHttpRequest();
            
            console.log('tapp:XHR fetching',file);
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    tapp.fetches--;
                    if (this.status == 200) {
                        elmnt.setAttribute("t-included",file)
                        elmnt.innerHTML = this.responseText;
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
                            alert('t-include-html inserted a style block from '+file);
                        });
                        */
                        //alert('Loaded & processed '+file);                         
                    } else {
                        elmnt.setAttribute("t-include-failed",file+':'+this.status)
                    }
                    if (this.status == 404) {elmnt.innerHTML = "<b>t-include-html</b><br /><br />404 not found: <pre>"+file+"</pre>";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.setAttribute("t-included",file)
                    
                    if(tapp.fetches==0){
                        console.log('All XHR requests done (for now)');
                        then(true);// DOES WAITING TIL ALL FETCEHS DONE CAUSE A RACE CONDITION?!?!?
                    }
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
    });

    if(tapp.fetches==0){
        console.log('No XHR requests needed (for now)');
        then();
    }
}

function doRegister(){
    document.shimQSA('template.t-template,template[t-template]','registerComponents').forEach(T=>{
        if(T.innerHTML==phold)return console.log('Tried to register a component without letting it load first!',T)
        if(!T.id)T.id=T.getAttribute('t-template');
        if(!T.id){
            
            return;
        }
        if(tapp.templates[T.id] && tapp.templates[T.id]!=phold)return;//console.log('Updating definition of',T.id)
        tapp.templates[T.id]=T.innerHTML;
        tapp.components=tapp.components||{};
        tapp.components[T.id]=function(O){
            return `<div t-component class="${T.id}">${JSON.stringify(O)}</div>`
        }
        tapp.components[T.id].all=function(A){
            return A.map(e=>tapp.components[T.id](e)).join('\n')
        }
        //
        
        //alert('yo');
    });
}

tapp.registerComponents=function(then){
    function iterate(){
        doRegister();
        includeHTML(function(repeat){
            
            if(repeat){
                
                return iterate();
            }
            //if(!tapp._firstboot){ tapp._firstboot=1; tapp.isReady(); }
            if(typeof then=='function')then();
        });
        
    }
    iterate();
}
tapp.boot=function(el,O){
    
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
tapp._regOK=function(){
    //
    if(document.readyState=='complete')return tapp.isReady();
    //
    window.onload=tapp.isReady;
}
if(document.readyState == "loading") {
    window.addEventListener('DOMContentLoaded',()=>tapp.registerComponents(tapp._regOK))
    //
} else {
    tapp.registerComponents(tapp._regOK);
}

tapp.onready(function(){
    document.shimQSA('[t-boot]').forEach(el=>{
        var o={}, boot=el.getAttribute('t-boot');
        if(boot)try{eval("o="+boot)}catch(e){console.error('t-boot invalid config:', e)}
        tapp.boot(el,o);
        
    });
});

/* https://github.com/john-doherty/swiped-events/blob/master/src/swiped-events.js */
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var u=e.createEvent("CustomEvent");return u.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),u},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;o=t.target,l=Date.now(),n=t.touches[0].clientX,u=t.touches[0].clientY,a=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!u)return;var e=t.touches[0].clientX,l=t.touches[0].clientY;a=n-e,i=u-l},!1),e.addEventListener("touchend",function(t){if(o!==t.target)return;var e=parseInt(o.getAttribute("data-swipe-threshold")||"20",10),s=parseInt(o.getAttribute("data-swipe-timeout")||"500",10),r=Date.now()-l,c="";Math.abs(a)>Math.abs(i)?Math.abs(a)>e&&r<s&&(c=a>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&r<s&&(c=i>0?"swiped-up":"swiped-down");""!==c&&o.dispatchEvent(new CustomEvent(c,{bubbles:!0,cancelable:!0}));n=null,u=null,l=null},!1);var n=null,u=null,a=null,i=null,l=null,o=null}(window,document);/*END:www/tapp.static/tapp.opt.src.js*/