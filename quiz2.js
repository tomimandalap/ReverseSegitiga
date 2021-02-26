function segitiga (x) {
  var y = ''
  for (var i =x; i >= 1; i--) {
    for (var j = x; j >= i; j--) {
      y += ' '
    }
    for (var k = 1; k <=i; k ++) {
      y += '*'
    }
    for (var l = 1; l <=i-1; l++) {
      y +='*'
    }
    y += '\n'
  } 
  console.log(y)
}

segitiga(5)