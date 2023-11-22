class RailwayForm{
    submit(){
        console.log(this.name,':form Submitted for train no.:',this.trainNo,);
    }
    cancel(){
        console.log(this.name,':form is cancelled of train no.', this.trainNo);
    }
    fill(name,trainNo){
        this.name= name
        this.trainNo= trainNo
        console.log("form is fill by", name);
    }
}
// Creating Object
let rahul = new RailwayForm()
rahul.fill("rahul",7676786)
rahul.submit()
rahul.cancel()
let safik = new RailwayForm()
safik.fill('safik',6564420)
safik.submit()
safik.cancel()