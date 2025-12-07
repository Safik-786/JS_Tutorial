// import {EventEmitter} from 'events'

// const emitter= new EventEmitter()

// emitter.on('lunch',()=>{
//     console.log('yummy')
// })


// emitter.emit('lunch')


class CustomEventEmitter{
    constructor(){
        this.data= {}
    }
    on(eventName, eventFunction ){
        // console.log(eventName)
        if (!this.data[eventName]) {
            this.data[eventName] = []
            this.data[eventName].push(eventFunction)
        }
        else{
            this.data[eventName].push(eventFunction)
        }
    }
    emit(eventName){
        if(this.data[eventName].length === 0){
            return null
        }
        this.data[eventName].forEach((eventFunction)=> eventFunction())
    }

    displayEvents(){
        // console.log("Hello")
        console.log(this.data)
    }
}

const customEvent= new CustomEventEmitter()

customEvent.on("move", ()=> console.log("Hello"))
customEvent.on("move", ()=> console.log("Hello2"))
customEvent.on("move", ()=> console.log("Hello3"))
customEvent.on("move", ()=> console.log("Hello4"))

customEvent.on("on", ()=> console.log("Safik"))
customEvent.on("on", ()=> console.log("Safik2"))
customEvent.on("on", ()=> console.log("Safik3"))
customEvent.on("on", ()=> console.log("Safik4"))


// customEvent.displayEvents()
customEvent.emit("on")