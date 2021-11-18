
function TersCevir(str) {
    var arr = [];
    for (var i = 0; i <= str.length; i++)
      arr.push(str.charAt(str.length - i));
    return arr.join('');
  }
  console.log(TersCevir("Full Stack Developer"));