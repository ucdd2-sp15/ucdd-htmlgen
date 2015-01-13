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
    return "not yet implemented"
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
    return "<input type=\"text\" name=\"" + name + "\">"
}

// lib.generateFormTextField = function(name) {
//     return "not yet implemented"
// }

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "not yet implemented"
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var text = "<select>";
    for (i = 0; i < arrayOfValues.length; i++) { 
    text += "<option value=" + arrayOfValues[i] + ">" + arrayOfText[i] + "</option>";
    }
    text += "</select>";
    return text
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "not yet implemented"
}

module.exports = lib