'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var temp = [];
  var t =collection.join(",").split(",");
  for(var i = 0; i < t.length; i++){
    temp.push(Number.parseInt(t[i]));
  }
  return temp;
}

module.exports = double_to_one;
