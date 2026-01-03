function  outer(){
    let counter= 0
    let inner= ()=>{
        counter ++

        console.log(counter)
    }
    return inner
}

const ansFunc= outer()


// ansFunc()
// ansFunc()
// ansFunc()
// ansFunc()