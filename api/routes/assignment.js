const route = require("express").Router();
const Assignment = require("../Model/Assignment");
const SubmitAssign = require("../Model/SubmitAssign");
const multer  = require('multer')
const fs  = require('fs')
const cloudinary = require("cloudinary")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assigment')
    },
    filename: function (req, file, cb) {
        // You could rename the file name
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

        // You could use the original name
        cb(null, file.originalname)
    }
});

// Get ALL Assignment 
route.get('/',async(req,res)=>{
    try{
    const Assign=await Assignment.find({}).sort({"createdAt":-1});
    res.status(200).json(Assign);

}catch(e){
    res.status(404).send(e)
}
})

//  Assignment DEtails 
route.get('/detail/:id',async(req,res)=>{
    try{
    const Assign=await Assignment.findOne({_id:req.params.id});
    res.status(200).json(Assign);

}catch(e){
    res.status(404).send(e)
}
})

route.post('/',async(req,res)=>{
try{
    const assignment= new Assignment({
        name:req.body.name,
        desc:req.body.desc,
        dueDate:req.body.dueDate
    });

    await assignment.save();
    res.status(200).json(assignment)
}catch(err){
    console.log(err)
}
});

route.post('/student/assigment',async(req,res)=>{
    try{
    
        var ImagesArray = [];
        let dir = './public/uploads/assigment/';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        let profileImage = req.files.name;
            let imageUrl = dir + Date.now() + "" + profileImage.name;
            await profileImage.mv(imageUrl, function (err) {
                if (err)
                    console.log(err);
            });
            imageUrl = imageUrl.substring(9);

            await ImagesArray.push(imageUrl);

            let newAssigment= new SubmitAssign();
            // newAssigment.assignId = req.params.id;
            // newAssigment.name = req.body.name;
            newAssigment.images = ImagesArray;


            console.log(newAssigment)

            newAssigment.save(async function (err, Assigment) {
                if(err){
                    console.log(err);
                }
                else{
                    return res.send({'Success' : true,'message' : 'Assigment added Successfully.',Assigment})
                }
            })

      
        
    }catch(err){
        res.send(err)
    }


    // try{
    //     const assignment = await Assignment.findOne({_id:req.params.id});
    //     let images = [];
    //      if(typeof req.body.images === "string"){
    //         images.push(req.body.images);
    //      }else{
    //         images = req.body.images
    //      }
    //      const imagesLinks = [];
    //      for(let i = 0; i < images.length; i++){
    //         var result = await cloudinary.v2.uploader.upload(images[i],{
    //             folder:"Assigments"
    //         });
    //         imagesLinks.push({
    //             public_id : result.public_id;
    //             url:result.secure_url,
    //         })
    //      }
    //      req.body.images = imagesLinks;
    //      req.body.user = req.user.id

    //     // var upload = multer({storage: storage})
        
    //     var submitAssign = new SubmitAssign({
    //         title:req.body.title,
    //         explanation:req.body.explanation,
    //         userId:req.body.userId
    //     })

    //     // await quiz.save();
    //     res.status(200).json(score)
    // }catch(err){
    //     console.log(err)
    // }
    });


// find Assignment 
route.get('/:id',async(req,res)=>{
    try{
    const Assign=await SubmitAssign.findOne({_id:req.params.id});
    res.status(200).json(Assign);

}catch(e){
    res.status(404).send(e)
}
})

module.exports=route;