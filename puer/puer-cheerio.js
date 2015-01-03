var cheerio = require('cheerio')

var exampleTableHtml = '<table> \
  <tr> \
    <th>Month</th> \
    <th>Savings</th> \
  </tr> \
  <tr> \
    <td>January</td> \
    <td>$100</td> \
  </tr> \
  <tr> \
    <td>February</td> \
    <td>$80</td> \
  </tr> \
</table>'

var $ = cheerio.load(exampleTableHtml)
debug('1 == %d', $('table').children.length)
debug('3 == %d', $('tr').length)
debug('2 == %d', $('th').length)
debug('4 == %d', $('td').length)
debug('4 == %d', $('table tr td').length)
debug('0 == %d', $('table p').length)
debug('January == %s', $('table td').eq(0).text())
debug('$100 == %s', $('table td').eq(1).text())
