const express = require('express');
const app = express();
const router = express.Router();
const Client = require('../model/model')

 
router.get('/',async(req,res)=>{
    try{
        const data = await Client.find();
             res.status(200).json(data);
    }catch(e){
        res.status(422).json("error at data rendered");
    }
    
});

router.get('/user/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await Client.findById(_id);
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json("error at data");
        }     
    }catch(e){
        res.status(422).json("error at data rendered");
    }
    
});

router.patch('/edit/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await Client.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json("error at data");
        }     
    }catch(e){
        res.status(422).json("error at data rendered");
    }
    
});

router.delete('/delete/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await Client.findByIdAndDelete(_id);;
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json("error at data");
        }     
    }catch(e){
        res.status(422).json("error at data rendered");
    }
    
});

router.post('/adduser',async(req,res)=>{
try{
    console.log(req.body)
    const user = new Client(req.body);
    console.log(user)
    const data = await user.save();
    if(data){
        res.status(200).json("registration success")
    }else{
        res.status(422).json("inavlid")
    }
}catch(e){
    res.status(422).json("error at registration")
}
});




module.exports = router;