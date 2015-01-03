var debug = require('debug')('peur')
var chalk = require('chalk')

module.exports = {

    // Client code example
    //
    //	 $ = html('<h1>heading 1</h1>')   --> returns a function(tageName), assigned to $
    //
    //   $('td')  --> invoked with the string 'td' bound to the argument 'tagName', which returns
    //                an object with a "should" property
    //
    //   $('td').should.exist() --> "should" is an instance of the Should class, which provides
    //                              a set of matcher methods, such as exist()
    // 	
    html: function(htmlText) {

        function $(tagName) {

            return {
                should: new Should(htmlText, tagName)
            }

        }

        return $
    }
}

function html(htmlText) {
    return should
}

function Should(html, tagName) {
    this.html = html
    this.tagName = tagName
}

Should.prototype = {
    constructor: Should,

    exist: function() {
        var isPassed = this.html.match(this.tagName)
        this._toConsole('exist', isPassed)
    },

    notExist: function() {
        var isPassed = !this.html.match(this.tagName)
        this._toConsole('not exist', isPassed)
    },

    haveExactly: function(count) {
        var regularExpression = new RegExp('<' + this.tagName + '>', 'ig')
        var isPassed = this.html.match(regularExpression).length === count
        this._toConsole('have exactly ' + count, isPassed)
    },

    containTextAtIndex: function(text, i) {
        var isPassed,
            regularExpressionToMatchAllGivenTags = new RegExp('<' + this.tagName + '>(.*?)<', 'ig'),
            regularExpressionToMatchGivenText = new RegExp(text, 'ig'),
            matchedTags = this.html.match(regularExpressionToMatchAllGivenTags)

        if (i < matchedTags.length) {
            var nthTag = matchedTags[i]
            isPassed = nthTag.match(regularExpressionToMatchGivenText)
        } else {
            isPassed = false
        }
        this._toConsole('contain ' + text + ' at index ' + i, isPassed)
    },

    containTextInSequence: function(arrayOfText) {
        var isPassed,
            regularExpressionToMatchAllGivenTags = new RegExp('<' + this.tagName + '>(.*?)<', 'ig'),
            arrayOfFoundTags = this.html.match(regularExpressionToMatchAllGivenTags)

        // assume it passes (until it's shown otherwise)
        var isPassed = true

        // iterate through the array of tags found and the array of text to match
        for (var i = 0; i < arrayOfFoundTags.length; i = i + 1) {
            var tag = arrayOfFoundTags[i]
            var text = arrayOfText[i]

            // if i-th tag does not match the i-th text
            if (!tag.match(text)) {
                isPassed = false
                // break out of the loop
                break
            }
        }

        this._toConsole('contain text in sequence ' + arrayOfText, isPassed)
    },



    _toConsole: function(assertionStatement, isPassed) {
        console.log('<' + this.tagName + '> should ' + assertionStatement + ' ... ' + (isPassed ? chalk.green('passed') : chalk.red('failed')))
    }
}