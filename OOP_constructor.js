class RailwayForm{
    constructor(name , trainNo , address , time){                      //no need to create fill method
        this.name= name
        this.trainNo= trainNo   
        this.address= address
        this.time= time
    }
    submit(){
        console.log(this.name,':form Submitted for train no.:',this.trainNo, "from BBSR to ",this.address,' at ',this.time,"o'clock");
    }
    cancel(){
        this.trainNo=0;
        this.address=0;
        this.time=0;
        console.log(this.name,': Your form is cancelled Successfully');
    }
    
}
let rahul = new RailwayForm('rahul',6545646,"Mumbai",'9:30')        //  value is given through constructor
let safik = new RailwayForm('safik',5643420, "Delhi","11.00")
rahul.submit()
safik.submit()
safik.cancel()