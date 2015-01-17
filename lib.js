var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
    var finalString = "<ol>";
    for (var i = 0; i < arrayOfText.length; i++) {
        finalString += "<li>" + arrayOfText[i] + "</li>";
    }
    finalString += "</ol>";
    return finalString;
}

lib.generateUnorderedList = function(arrayOfText) {
    var finalString = "<ul>" + "";
    for (var i = 0; i < arrayOfText.length; i++) {
        finalString += "<li>" + arrayOfText[i] + "</li>";
    }
    finalString += "</ul>";
    return finalString;
}

lib.generateTableRow = function (arrayOfText) {
    var finalString = "<tr>";
    for (var i = 0; i < arrayOfText.length; i++) {
        finalString += "<td>" + arrayOfText[i] + "</td>";
    }
    finalString += "</tr>";
    return finalString; 
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var finalString = "<table>";
    for (var i = 0; i < twoDimensionalArrayOfText.length; i++) {

        finalString += lib.generateTableRow(twoDimensionalArrayOfText[i])
 }
    finalString += "</table>";
    return finalString; 
}

lib.generateHyperLink = function(url, text) {
    return '<a href="' +url+ '">'+text+'</a>'
}

lib.generateFormTextField = function(name) {
    return '<form><input type="text" name="'+name+'"></form>';
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return '<label>' + label + '</label> <input type="text" name="' + name + '">';
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var finalString = "<select>";
    for (var i = 0; i < arrayOfValues.length; i++) {
        finalString += '<option value="' + arrayOfValues[i] + '">'+arrayOfText[i]+'</option>';
    }
    finalString += "</select>";
    return finalString; 
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    if ( allowfullscreen == true )
        return '<iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/'+videoId+'" allowfullscreen></iframe>';
    else
        return '<iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/'+videoId+'"></iframe>';
}

module.exports = lib
