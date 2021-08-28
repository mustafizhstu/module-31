const myObject ={ 
    x:1, 
    y:2, 
    z:4, 
    a:45,
    b:56,
    ok: {
        t:45,
        o:65,
        u: {
            m:34,
            n:52,
        }
    }
}
const {x , y , z} = myObject;
console.log(x,y,z);
const {t,o} = myObject.ok;
console.log(t,o);
const {m,n} = myObject.ok.u;
console.log(m,n);
console.log(x,y,z,t,o,m,n);