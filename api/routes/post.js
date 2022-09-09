const router = require("express").Router();
const Post = require("../Model/Post");
const User= require('../Model/User')
///////////////// create posts
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    await newPost.save();
    res.status(200).send(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find user
router.get('/user',async(req,res)=>{
    
    // const userId=req.query.userId;
    // const username=req.query.username
    const userId=req.query.id;
    
        try{
            // const user=userId?await User.findById(userId):await User.findOne({desc:username})
            const user= await Post.findById(userId)
            res.status(200).json(user)
        }catch(err){
            res.status(403).json(err)
        }
    
    })


module.exports = router;