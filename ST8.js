(x=>{
    if(typeof window.ST8=='object')return;
    let S=window.ST8={
        V:{},
        F:{},
        sub:(name,F)=>{
            S.F[name]=S.F[name]||[];
            if(S.F[name].indexOf(F)>=0)return S;
            S.F[name].push(F);
            if(S.V[name])F(S.V[name]);
            return S;
        },
        unsub:(name,F)=>{ // may never even need this facility
            if(S.F&&S.F[name]){
                let i=S.F[name].indexOf(F);
                (i>=0)&&S.F[name].splice(i,1);
            }
            return S;
        },
        set:(name,val,init,flat)=>{
            if(name.constructor===Object && (typeof val=='undefined') && !flat) {
                Object.keys(name).forEach(k=>S.set(k,name[k],init,1));
                return S;
            }
            if(init&&typeof S.V[name]!='undefined')return S;
            if(S.V[name]===val)return S;
            S.V[name]=val;
            if(S.F[name])S.F[name].forEach(F=>F.call(S,val));
            return S;
        },
        init:(name,val)=>S.set(name,val,1),
        save:x=>{localStorage.ST8V=JSON.stringify(S.V);return S;},
        draw:x=>(
                    Object.keys(S.F)
                        .forEach(name=>S.F[name]&&S.F[name]
                            .forEach( F=>F.call(S,S.V[name]/*could be undefined if not retrieved, that's fine*/) )
                        ),
                    S
                ),
        load:x=>( localStorage.ST8V ? (S.V=JSON.parse(localStorage.ST8V), S.draw()) : S ),
        wipe:x=>( delete localStorage.ST8, S.V={}, S.draw() )
    };
    S.load();
})();