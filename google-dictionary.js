////////////////////////////////////////////
// Find definitions and synoyms of words
////////////////////////////////////////////


//doc: 
//It will work either you are on google (finding the definition of a word you just queried)
// --reading the queried word and 
// --perform a query on Google Dictionary
//or any website (finding the definition of a highlighted word)
// --find highlighted word
// --ask Google Dictionary 



function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}


var myLocation = window.location.href;
var mod = "google";
var newLink="";
    
if(myLocation.includes(mod)){ 
    // move the user to another page
    var input = document.getElementById("lst-ib").value;
    newLink = "https://www.google.co.uk/search?site=async/dictw&q=Dictionary#dobs="+input;
    window.open(newLink,"_self")
}
else{
    var word = getSelectionText();
    //find the defintion and put it here
    newLink = "https://www.google.co.uk/search?site=async/dictw&q=Dictionary#dobs="+word;
    window.open(newLink,"_blank")
}
