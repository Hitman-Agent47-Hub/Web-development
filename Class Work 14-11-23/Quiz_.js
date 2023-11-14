function letterFinder(word,match){
    for (var i=0;i<word.length;i++){
        if(word[i]==match){
            console.log("Found the", match,"at",i);
        }
        else{
            console.log("---No match Found at", i);
        }
    }
}
letterFinder("test","t");
// letterFinder("Zaid","Z");
