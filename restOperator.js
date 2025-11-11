function fruit(f1, f2, ...f){
    console.log(f1,f2 , f)
    for (let restFruit in f){
        console.log(f[restFruit])
    }
}
fruit('apple' ,'banana','grapes', 'orange','strawberry','guava','pineapple')