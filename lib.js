var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
    return arrayOfText.sort();
}

lib.generateUnorderedList = function(arrayOfText) {
    var str = '<ul>';
    for (var i in arrayOfText) {
        str += '<li>' + arrayOfText[i] + '</li>'
    }
    str += '</ul>';
    return str
}

lib.generateTableRow = function (arrayOfText) {
    return "not yet implemented"
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    return "not yet implemented"
}

lib.generateHyperLink = function(url, text) {
    return "<a href=" + '"' + url + '"' + ">" + text + "</a>"
}

lib.generateFormTextField = function(name) {
    return "<form>" + name + ":" + "<input type='text' name='" + name + "'/>" + "</form>"
}

// lib.generateFormTextField = function(name) {
//     return "not yet implemented"
// }

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