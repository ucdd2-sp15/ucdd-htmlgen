var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "not yet implemented"
}

lib.generateOrderedList = function(arrayOfText) {
    return "not yet implemented"
}

lib.generateUnorderedList = function(arrayOfText) {
    var arrayLength = arrayOfText.length;
    var finalString = "<ul>" + "\n";
    for (var i = 0; i < arrayLength; i++) {
        finalString += "<li>";
        finalString += arrayOfText[i];
        finalString += "</li>" + "\n";
    }
    finalString += "</ul>";
    return finalString;
}
lib.generateTableRow = function (arrayOfText) {
    return "not yet implemented"
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    return "not yet implemented"
}

lib.generateHyperLink = function(url, text) {
    return "not yet implemented"
}

lib.generateFormTextField = function(name) {
    return "not yet implemented"
}

lib.generateFormTextField = function(name) {
    return "not yet implemented"
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "not yet implemented"
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    return "not yet implemented"
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "not yet implemented"
}

module.exports = lib