var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    var tag1 = "";
    var tag2 = "";
    tag1 = "<h" + level + ">";
    tag2 = "</h" + level + ">";
    return tag1 + text + tag2
}

lib.generateOrderedList = function(arrayOfText) {
    var text="";
   
    for (i = 0; i < arrayOfText.length; i++) { 
        text += "<li>"+arrayOfText[i]+"</li>";}
    return "<ol>"+ text +"</ol>"

}

lib.generateUnorderedList = function(arrayOfText) {
    var text="";
    for (i = 0; i < arrayOfText.length; i++) { 
        text += "<li>"+arrayOfText[i]+"</li>";}
    return "<ul>"+ text +"</ul>"
}

lib.generateTableRow = function (arrayOfText) {
    var text="";
       for (i = 0; i < arrayOfText.length; i++) { 
        text += "<td>"+arrayOfText[i]+"</td>";}
    return "<tr>"+ text +"</tr>"

}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var text = "";
    for(i = 0; i < twoDimensionalArrayOfText[1].length; i++){
        text += "<td>" + twoDimensionalArrayOfText[1][i] + "</td>"
        }
    return text;
}

lib.generateHyperLink = function(url, text) {
    return tag = "<a href=\"" + url + "\">" + text + "</a>"
}

lib.generateFormTextField = function(name) {
    return "<input type=\"text\" name=\"" + name + "\">"
}

// lib.generateFormTextField = function(name) {
//     return "not yet implemented"
// }

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "<label>" + label +"</label> <input type=\"text\" name=\"" + name + "\">"
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var text = "<select>";
    for (i = 0; i < arrayOfValues.length; i++) { 
    text += "<option value=\"" + arrayOfValues[i] + "\">" + arrayOfText[i] + "</option>";
    }
    text += "</select>";
    return text
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "<iframe width=\"" + width + "\" height=\"" + height +"\" src=\"//www.youtube.com/embed/" + videoId + "\" allowfullscreen><iframe>"
}

module.exports = lib