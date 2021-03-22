function ST8(id){
    if(!window._ST8){window._ST8={}; console.log('window._ST8 created');}
    let S=window._ST8[id];
    if(typeof S!='object'){
        S=window._ST8[id]={
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
                        console.log(`ST8("${id}") unsubscribed`,F,'from',name);
                    }
                }
                return S;
            },
            set:(name,val,init,flat)=>{ // returns main ST8 library
                if(name.constructor===Object && (typeof val=='undefined') && !flat) {
                    Object.keys(name).forEach(k=>S.set(k,name[k],init,1));
                    return S;
                }
                //console.log(`ST8("${id}").set`,{name,val,init,flat});
                if(init&&typeof S.V[name]!='undefined')return S;
                if(S.V[name]===val){/*console.log('ST8:',name,'unchanged');*/ return S};
                // console.log(`ST8("${id}").set: `,name,'is now',val);
                S.V[name]=val;
                if(S.F[name])S.F[name].forEach(F=>F.call(S,val));
                return S;
            },
            init:(name,val)=>S.set(name,val,1),
            save:x=>{localStorage["ST8V"+id]=JSON.stringify(S.V);/*console.log(`ST8("${id}").save()`);*/return S;}, // returns main ST8 library
            _run:x=>( // internal use only, should not be exposed
                        Object.keys(S.F).forEach(name=>
                            S.F[name].forEach( F=>F.call(S,S.V[name]/*could be undefined if not retrieved, that's fine*/) )
                        ),
                        S
                    ),
            load:x=>( console.log(`ST8("${id}").load()`), localStorage["ST8V"+id] ? (S.V=JSON.parse(localStorage["ST8V"+id]), S._run()) : S ),
            wipe:x=>( delete localStorage["ST8V"+id], S.V={}, S._run() )
        };
        console.log('window._ST8.',id,' created');
        //S.load();
    } //else console.log('window._ST8.',id,' reused');
    return S;
}
if(typeof window.ST8!='function')window.ST8=ST8;
export default ST8;

const st8bind=(val,sub)=>{
    if(typeof val=='string' && val.startsWith('ST8.')){
        let parts=val.split('.');
        if(parts.length!=3)return ()=>{};
        return ST8(parts[1]).sub(parts[2],sub); //one-way bind
    } else return ()=>{}
}
export {st8bind}