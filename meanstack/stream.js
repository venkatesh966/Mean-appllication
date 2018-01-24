var fs = require('fs');

var myobj={};

fs.readFile('file1.txt',function(err,data)
{
    if(!err)
    {
        myobj['data1']=data.toString();
    }
});
fs.readFile('file2.txt',function(err,data)
{
    if(!err)
    {
        myobj['data2']=data.toString();
    }
});
console.log(myobj);