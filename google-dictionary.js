// to be implemented
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
// --add a popup showing the definition



function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function addHtmlToPage(definition){
  // to implement
}

var myLocation = window.location.href;
var mod = "google";
    
if(myLocation.includes(mod)){ 
    // move the user to another page
}
else{
    var word = getSelectionText();
    //find the defintion and put it here
}
