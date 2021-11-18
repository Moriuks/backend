function contruir(muro){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            muro.contruido = true;
        })
    })
}