// var clothes=[];
// clothes.push("sweat shirt");
// clothes.push("T-shirt");
// clothes.push("Pants");
// clothes.push("Tie");
// clothes.push("Jacket");
// console.log(clothes.pop());
// console.log(clothes);
// console.log(clothes.push("coat"));
// console.log(clothes);
//----------------------------------------------------------------
var i;
var car={};
car.mileage=98765;
car.color="red";
console.log(car);
car.turnTheKey = function(i)
{
    if(i==0){
        console.log("The engine is running");
    }
    else{
        console.log("The engine is not running");
    }
    
}
car.lightsOn=function(i)
{
    if(i==1)
    {
        console.log("The lights are on.");
    }
    else{
        console.log("The lights are off.");
    }
}
console.log(car);
car.turnTheKey(0);
car.lightsOn(0);
