'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var temp = [];
  var result = [], hash = {};

  var c =collection.join(",").split(",");
  for(var i = 0; i < c.length; i++){
    temp.push(Number.parseInt(c[i]));
  }

  for (var j = 0, elem; (elem = temp[j]) != undefined; j++) {
    if (!hash[elem]) {
      result.push(elem);
      hash[elem] = true;
    }
  }
  return result;
}

module.exports = double_to_one;
