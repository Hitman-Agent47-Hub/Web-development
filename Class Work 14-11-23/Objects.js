var table={
    legs:3,
    color:"brown",
    priceUSD:100,
}
table.color1="blue";
console.log(table);
console.log(table.color);
console.log(table["color1"]);
//---------------------------------------------------
var car={};
car.color="red";
car["color"]="green";
car ["speed"]=200; //overwrite because of same name
car.speed=100;
console.log(car);
//--------------------------------------------------------------
var arrOfKeys=['speed','altitude','color'];
var drone={
    speed:100,
    altitude:200,
    color:"red",
}
for(var i=0;i<arrOfKeys.length;i++){
    console.log(drone,[arrOfKeys[i]]);
}
//------------------------------------------------------------
var fruits=[];
fruits.push("apple");
fruits.push("pear");
fruits.pop();
console.log(fruits);
//--------------------------------------------------------
function arrayBuilder(one,two,three){
var arr=[];
arr.push(one);
arr.push(two);
arr.push(three);
return arr;
}
var simpleArr= arrayBuilder('apple','pear','plum');
console.log(simpleArr);