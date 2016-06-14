'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var temp=[],result=[];
  for(var i=0;i<collection.length;i++)
    for(var j=0;j<collection[i].length;j++){
      temp.push(collection[i][j]);
    }
    for(var k=0;k<temp.length-1;k++)
      for(var t=1;t<temp.length;t++)
      {
        if(temp[k]!=temp[t])
            result.push(temp[k]);  
      }
    return result;
}

module.exports = double_to_one;
