const fs1=require('fs')
 //Read the File -readFile()
 fs1.readFile('kle.txt','utf8',(err,data)=>
    {
   if(err){
       console.error('error reading File:',err)
   }
   console.log(data);
    })
    //write-->writeFile()
 fs1.writeFile('kle.txt','Helloworld',(err)=>{
if(err)
{
    console.error(err)
}
console.log('File written successfully');
fs1.readFile('kle.txt','utf8',(err,data)=>
    {
   if(err)
    {
       console.error('error reading File:',err)
   }
   console.log(data);
    })
})
//append-->appendFile()
fs1.appendFile('kle.txt','text world',(err)=>
{
    if(err)
    {
        console.error(err)
    }
    console.log("data appendeed");
})
//Delete-->unlike()
fs1.unlink('kle.txt',(err)=>
{
    if(err){
        console.error(err);
    }
    console.log('deleted succesfully');
})


    
       