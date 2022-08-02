console.log("OOPs")

function GeneralCar(givenName,givenSpeed){
    this.Name=givenName
    this.Speed=givenSpeed
    this.chalalunga=function(){
        console.log(`${this.Name} is running`)
    }
    this.faster=function(){
        console.log(`${this.Speed}! fuck this is the speed!!`)
    }
}

car1= new GeneralCar("corolla", 80)
car2= new GeneralCar("bhenchod", 900)

