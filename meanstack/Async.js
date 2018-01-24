var fs = require('fs');
//var async = require('asyncawait/async');
//var await = require('asyncawait/await');


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
 var my = async function() {
myobj['data1']= await doA();
myobj['data2']=await doB();
console.log(myobj);
};
my();