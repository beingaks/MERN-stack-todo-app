const express = require('express');
const user = require('./user')
const message = require('./message')
const cors = require('cors');
const { find } = require('./user');

require('./configure');


const app = express();
app.use(cors());


app.use(express.json());


app.post('/login',async(req,res)=>{
    console.log(req.body);
    let data = await user.findOne(req.body).select('-password');
    console.log(data);

    if(data){
        res.send(data)
    }
    else{
        res.send(false);

    }
});


app.post('/signup',async(req,res)=>{

    let check = await user.find({email:req.body.email});
    console.log(check);
    if(check.length>0){
        console.log('not ok')
        res.send(false);
    }
    else{
        let data = new user(req.body);
        data = await data.save();
        data = data.toObject()
        delete data.password;
        console.log(data);

        if(data){
            res.send(data);
    
        }
        else{
            res.send(false);
        }
    }

 
})

app.get('/read/:id',async (req,res)=>{
    let data = await message.find({userId:req.params.id})
    console.log(data.length)
    res.send(data)


})
app.post('/write',async(req,res)=>{
    console.log(req.body)
    let data = new message(req.body)
    data = await data.save()
    data = data.toObject()
    console.log(data)
    res.send(data);
})
app.put('/update/:id',async(req,res)=>{
    console.log(req.body);
    let data = await message.updateOne({_id:req.params.id},{$set:req.body});
    // data =data.toObject();
   if(data.acknowledged){
    res.send(true)
   }
   else{
    res.send(false)

   }
})

app.delete('/deleteData/:id',async(req,res)=>{
    let data = await message.deleteOne({_id:req.params.id})
    if(data.acknowledged){
        res.send(true)
       }
       else{
        res.send(false)
    
       }
})

app.listen(5000);