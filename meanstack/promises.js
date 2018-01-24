var fs = require('fs');

var myobj={};


function doA()
{
    return new Promise(function(resolve,reject)
{
    fs.readFile('file1.txt',function(err,data)
    {
        if(!err)
        {
            resolve(data.toString());//callback function resolve
        }
    });

});
}
function doB()
{
    return new Promise(function(resolve,reject)
{
    fs.readFile('file2.txt',function(err,data)
    {
        if(!err)
        {
            resolve(data.toString());
        }
    });
    
});
}
doA().then(function(data1)
{
    myobj['data1']=data1;
    doB().then(function(data2){
        myobj['data2']=data2;
        console.log(myobj);
    });
});

console.log(myobj);