var i=1;
for(i=1; i<11;i++){
    if(i==1){
        console.log("Gold Medal");
    }
   else if(i==2){
        console.log("Silver Medal");
    }
    else if(i==3){
        console.log("Bronze Medal");
    }
    else{
        console.log(i);
    }
}
//----------------------------------------------
for(var j=1; j<11;j++){
switch(j){
    case 1:
        console.log("Gold Medal");
        break;

   case 2:
        console.log("Silver Medal");
        break;

    case 3:
        console.log("Bronze Medal");
        break;

      default:
        console.log(j);
}
}