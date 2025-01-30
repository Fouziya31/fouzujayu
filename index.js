//  const fs1=require('fs')
//  //Read the File -readFile()
//  fs1.readFile('kle.txt','utf8',(err,data)=>
//     {
//    if(err){
//        console.error('error reading File:',err)
//    }
//    console.log(data);
//     })
//     //write-->writeFile()
//  fs1.writeFile('kle.txt','Helloworld',(err)=>{
// if(err)
// {
//     console.error(err)
// }
// console.log('File written successfully');
// fs1.readFile('kle.txt','utf8',(err,data)=>
//     {
//    if(err)
//     {
//        console.error('error reading File:',err)
//    }
//    console.log(data);
//     })
// })
// //append-->appendFile()
// fs1.appendFile('kle.txt','text world',(err)=>
// {
//     if(err)
//     {
//         console.error(err)
//     }
//     console.log("data appendeed");
// })
// //Delete-->unlike()
// fs1.unlink('kle.txt',(err)=>
// {
//     if(err){
//         console.error(err);
//     }
//     console.log('deleted succesfully');
// })
// const path1=require('path')
// //fine a path -->join(_dirname,'folder''Filename')
// const fullpath=path1.join(__dirname,"node",'kle.txt')
// console.log(fullpath);

// let http=require('http')
// console.log(http.METHODS);
// console.log(http.STATUS_CODES);
// //create a own server-->createServer()
// http.createServer(function(req,res)
// {
//     if(req.url=='/home')
//     {
//         res.write("home")
//     }
//     else if(req.url=='/about')
//     {
//         res.write('about')
//     }
//     else{
//         res.write('undefined')
//     }
//     res.end()
// })
// .listen(8000,()=>console.log("Server is runing"))
//for importing express module
// const express=require('express')
// const app=express()
// //define a route
// app.get('/',(req,res)=>{
// res.send("welcome to express")
// })
// app.get('/home',(req,res)=>{
//     res.send('kle')
// })
// //start the server
// app.listen(8000,()=>console.log('server is runing in the port on 8000'))
// const express=require('express')
// const app=express()
// app.use(express.json())
// let users=[
//     {id:1,name:"aliene",email:"abc@gmail.com"},
//     {id:2,name:"rosiii",email:"abcfhg@gmail.com"}

// ]
// //get all users
// app.get('/users',(req,res)=>{
//     res.json(users)
// }) 
// //POST
// app.post('/users',(req,res)=>{
//     const newuser={id:users.length+1, ...req.body}
//     users.push(newuser);
//     res.status(201).json(newuser);

// });
// //update--put()
// app.put('/users/:id',(req,res)=>{
//     const user=users.find( u=>u.id===parseInt(req.params.id))
//     if(!user) return res.status(404).json({message:"user not found"})
//         user.name=req.body.name||req.name
//         user.email=req.body.email||req.email
//         res.json(user)
// })
// //delete
// app.delete('/user/:id',(req,res)=>{
//     users=user.filter(user=>user.id !==parseInt(req.params.id))
//     res.join({message:'user Deleted'})
// })
// app.listen(8000,()=>console.log("server is on"))
