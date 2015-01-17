var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>";
}

lib.generateHeading = function(level, text) {
    return "<h" + level ">" + text " </h" + level + ">";
}

lib.generateOrderedList = function(arrayOfText) {
    var arrayLength = arrayOfText.length;
    var finalString = "<ol>" + "\n";
    for (var i = 0; i < arrayLength; i++) {
        finalString += "<li>";
        finalString += arrayOfText[i];
        finalString += "</li>" + "\n";
    }
    finalString += "</ol>";
    return finalString;
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
lib.generateTableRow = function(arrayOfText) {
    var arrayLength = arrayOfText.length;
    var finalString = "<tr>";
    for (var i = 0; i < arrayLength; i++) {
        finalString += "<td>";
        finalString += arrayOfText[i];
        finalString += "</td>"
    }
    finalString += "</tr>";
    return finalString;
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    return "not yet implemented"
}

lib.generateHyperLink = function(url, text) {
    return '<a href="' + url + '">' + text + '</a>'
}

lib.generateFormTextField = function(name) {
    return "<input type='text' name='" + name + "''>";
}

lib.generateFormTextField = function(name) {
    return "not yet implemented"
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "<label>" + label + "</label><input type='text' name='" + name + "''>";
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var arrayLength = arrayOfText.length;
    var finalString = "<select>";
    for (var i = 0; i < arrayLength; i++) {
        finalString += "<option value='" + arrayOfValues[i] + "'>";
        finalString += arrayOfText[i] + "</option>";
    }
    finalString += "</select>";
    return finalString;
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "not yet implemented"
}

module.exports = lib
