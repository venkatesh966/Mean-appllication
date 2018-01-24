var fs = require('fs');

var myobj={};

fs.readFile('file1.txt',function(err,data)
{
    if(!err)
    {
        myobj['data1']=data.toString();
        console.log(myobj);
        fs.readFile('file2.txt',function(err,data)
        {
            if(!err)
            {
                myobj['data2']=data.toString();
                console.log(myobj);
                fs.readFile('file3.txt',function(err,data)
                {
                    if(!err)
                    {
                        myobj['data3']=data.toString();
                        console.log(myobj);
                    }
                });
                console.log(myobj);
            }
        });
        console.log(myobj);
    }
   
});
console.log(myobj);

//fs.readFile('file2.txt',function(err,data)
//{
 //   if(!err)
  //  {
    //    myobj['data1']=data.toString();
  //  }
//});
//console.log(myobj);