let S=window.ST8;
if(typeof S!='object'){
    S=window.ST8={
        V:{},
        F:{},
        sub:(name,F,flat)=>{ // returns a single ready to execute unsub function for both single and compound subs
            if(name.constructor===Object && (typeof F=='undefined') && !flat) {
                let unsubs=[];
                Object.keys(name).forEach(k=>unsubs.push(S.sub(k,name[k],1)));
                return ()=>unsubs.forEach(u=>u());//S;
            }
            S.F[name]=S.F[name]||[];
            if(S.F[name].indexOf(F)>=0)return ()=>S.unsub(name,F);
            S.F[name].push(F);
            if(S.V[name])F(S.V[name]);
            return ()=>S.unsub(name,F);
        },
        unsub:(name,F)=>{ // ok to call it multiple times, won't error. Returns main ST8 library.
            if(S.F&&S.F[name]){
                let i=S.F[name].indexOf(F);
                if(i>=0){
                    S.F[name].splice(i,1);
                    console.log('ST8.js: Unsubscribed',F,'from',name);
                }
            }
            return S;
        },
        set:(name,val,init,flat)=>{ // returns main ST8 library
            if(name.constructor===Object && (typeof val=='undefined') && !flat) {
                Object.keys(name).forEach(k=>S.set(k,name[k],init,1));
                return S;
            }
            //console.log('ST8.set',{name,val,init,flat});
            if(init&&typeof S.V[name]!='undefined')return S;
            if(S.V[name]===val){/*console.log('ST8:',name,'unchanged');*/ return S};
            //console.log('ST8:',name,'now',val);
            S.V[name]=val;
            if(S.F[name])S.F[name].forEach(F=>F.call(S,val));
            return S;
        },
        init:(name,val)=>S.set(name,val,1),
        save:x=>{localStorage.ST8V=JSON.stringify(S.V);return S;}, // returns main ST8 library
        _run:x=>( // internal use only, should not be exposed
                    Object.keys(S.F).forEach(name=>
                        S.F[name].forEach( F=>F.call(S,S.V[name]/*could be undefined if not retrieved, that's fine*/) )
                    ),
                    S
                ),
        load:x=>( console.log('ST8.load'), localStorage.ST8V ? (S.V=JSON.parse(localStorage.ST8V), S._run()) : S ),
        wipe:x=>( delete localStorage.ST8, S.V={}, S._run() )
    };
    console.log('global ST8 created');
    //S.load();
} else console.log('global ST8 reused');

export default ST8=S;