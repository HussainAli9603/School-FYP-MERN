import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  TextareaAutosize,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../style.css";

import { Add ,CloudUpload,Close} from "@mui/icons-material";
import Appbar from './Appbar'

const useStyle = makeStyles({
 
  LgBtn: {
    backgroundColor: " #F9BE02 !important",
    marginLeft: "10px !important",
    border: "1px solid white !important",
    padding: "5px 20px !important",
    color: "white !important",
  },
  hr: {
    height: "3px",
    width: "100%",
    backgroundColor: "white",
    margin: "0px auto",
  },
  hero: {
    width: "80% !important",
    padding: "2% 0%",
    margin: "0px auto",
    display: "flex",
    justifyContent: "space-between",
  },
main:{
marginTop:'5%'
},
  activityHr: {
    height: "2px",
    backgroundColor: "white",
  },
  registerCourse: {
    backgroundColor: "white !important",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    minWidth:'100%',
    padding: "10px 15px",
    flexWrap: "wrap",
  },
  courseCard: {
    width: "31% !important",
    minWidth:'300px',
    cursor: "pointer",
    marginTop: "5%",
    boxShadow: '8px 4px 5px -2px rgba(0,0,0,0.75) !important'
  },
  addCourse: {
    fontSize: "300px !important",
    marginLeft: "10%",
    cursor: "pointer",
  },
  courseTitle:{
      fontSize:'20px !important',
      fontWeight:'500',
      color:'white'
  }
});
function Course(props) {
  const classes = useStyle();
  const [courseName,setCourseName]=useState()
  const [sectionName,setSectionName]=useState()
  const [level,setLevel]=useState()
  const [accessCode,setAccessCode]=useState()
  const [addMaterial,setAddmaterial]=useState(false)
  let courseData={
    courseName:courseName,
    sectinname:sectionName,
    level:level,
    accessCode:accessCode
  }
  const [createCourseDetail,setCreateCourseDetail]=useState([{courseData}])
  // const courseDetail=createCourseDetail;

  const createCourseInput=(e)=>{
    switch(e.target.id){
      case'createcourse':
      let x=e.target.value;
      return setCourseName(x);
      default:
        return null;
    }
  }
  const CreateCourse=()=>{
    setCreateCourseDetail(...createCourseDetail,{courseData})
    addMateriaShow()
    
  }
console.log(createCourseDetail)
  const addMateriaShow=()=>{
 if(!addMaterial){
     setAddmaterial(true)
 }else{
     setAddmaterial(false)}
  }

  
  return (
    <>
      <div className="main">
      <Appbar name='teacher'/>
      
        <Grid container className={classes.hero}>
     <div className={classes.main}>
     <Typography  className={classes.courseTitle}>{props.name} Courses</Typography>
          <Grid item className={classes.registerCourse}>
            {/* course Card */}
            {Object.entries(createCourseDetail).map((items)=>{

              return<>
                <Card className={classes.courseCard}>
          {props.name?  <Link to='/tmaterial'>
            <CardMedia
                component="img"
                height="180"
                image="/assets/images/logo.jpg"
                alt="course image"
              />
            </Link>:  <Link to='/material'>
            <CardMedia
                component="img"
                height="180"
                image="/assets/images/logo.jpg"
                alt="course image"
              />
            </Link>}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
               {items.courseName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  JavaScript is most populer language use for web development
                </Typography>
              </CardContent>
            </Card>
            </>}
              
            )}
         

          
          
          
          
        {props.name? <Card className={classes.courseCard}>
              {/* <Link to='/registercourse'> */}
              <Add className={classes.addCourse} onClick={addMateriaShow}/>
              {/* </Link> */}
           
            </Card>:<Card className={classes.courseCard}>
              <Link to='/registercourse'>
              <Add className={classes.addCourse} />
              </Link>
           
            </Card>}
            
            {/* ///////////////////   Add Material hidden Section */}
<div className= {addMaterial?'showCreateCourse':'createCourse'}>
<div className='createCourseSection'>
          <Card className='createCourseCard'>
         
          <div className='courseTopBar'>
              <p> Create Course</p>
              <Close className='courseTopIcon' onClick={addMateriaShow} />
            </div>
        <div className="CourseBody">
        <div className="bodySectionLeft">
           <div className='createCourseBody'>
              <p className='CourseName'>Course Name:</p>
              <input type="text" className='createCourseInput' id='createcourse' onChange={createCourseInput}/>
            </div>
            <div className='createCourseBody'>
              <p className='CourseName'>Section Name:</p>
              <input type="text" className='createCourseInput' id="sectionname" onChange={createCourseInput}/>
            </div>
            <div className='createCourseBody'>
              <p className='CourseName'>Level:</p>
              <input type="text" className='createCourseInput' id="level" onChange={createCourseInput} />
            </div>
            <div className='createCourseBody'>
              <p className='CourseName'>Create Access Code:</p>
              <input type="text" className='createCourseInput' id="accesscode" onChange={createCourseInput} />
            </div>
           </div>
          <div className="bodySectionRight">
          <label className="uploadImg" htmlFor="courseImg">
          <CloudUpload className="arrowUpIcon"/>

          </label>
          <input type="file" id="courseImg" accept=".jpg,.png"  style={{display:'none'}}/>
         <p style={{padding:'5px 10px',color:'white',margin:'0 55px 0 10px',backgroundColor:'green',border:'2px solid #097ff2'}}>Upload Image</p>
          </div>
        </div>
            <div className='createCoursebtn'>
          
                <Button className='joinBtn' onClick={CreateCourse}>Create</Button>
           
              <Button className='cancelBtn' onClick={addMateriaShow}>Cancel</Button>
            </div>
            
          </Card>
          </div>
          </div>
{/* ///////////////////   Add Material hidden Section  End*/}

            {/* course Card  End*/}
          </Grid>

     </div>
        </Grid>
      </div>
    </>
  );
}

export default Course;
