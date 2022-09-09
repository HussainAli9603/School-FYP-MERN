import {useState} from "react";

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../style.css";
import {Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Appbar from './Appbar'
const useStyle = makeStyles({
  LgBtn: {
    backgroundColor: " #F9BE02 !important",
    marginLeft: "10px !important",
    border: "1px solid white !important",
    padding: "5px 20px !important",
    color: "white !important",
  },
  
  hero: {
    width: "75% !important",
    padding: "2% 15%",
    margin: "0px auto",
    display:'flex',
    justifyContent:'space-between',
    
  },
 main:{
   marginTop:'8%'
 },
  
  activityHr:{
      height:'2px',
      backgroundColor:'white'
  },
  topRecent:{
      color:'lightGray',
      marginBottom:'5px'

  },mainActivity:{
      backgroundColor:'white',
      width:'100%',
      height:'100vh',
      marginTop:'15px !important',
      border:'1px solid gray'
  },
  postHeader:{
      display:'flex',
      alignItems:'center',
      padding:'10px 20px'
  },
  Title:{
    padding:'10px 20px',
    fontSize:'16px',
    fontWeight:'400',
    textDecoration:'underLine',
  },
  message:{
    padding:'10px 20px',
    fontSize:'14px',
    fontWeight:'300',

  },
  regard:{
      fontWeight:'400',
      fontSize:'16px',
      marginLeft:'5px'
  },
  postEndHr:{
      height:'2px',
      backgroundColor:'lightGray',
      border:'none'
    
  }
});
function StudentDashboard() {
  const classes = useStyle();
  const [showBtn,setShowBtn]=useState(false)


  return (
    <>
      <div className="main">
       <Appbar/>
        <Grid container className={classes.hero}>
      <div className={classes.main}>
      <Grid item xs={12} md={12}>
            <Typography variant="p" className={classes.topRecent}>
                Recent Activity
            </Typography>
            <hr className={classes.activityHr} />
        </Grid>
        <Grid container xs={12} md={12} className={classes.mainActivity}>
        {/* Recent posts */}
<Grid item >
<div className={classes.postHeader}>
    <h5 className={classes.name}>Ali zeb</h5>
<ArrowRightIcon/>
    <h5 className={classes.subject}>JavaScript</h5>
</div>
<h5 className={classes.Title}>Dear Students:</h5>
<p className={classes.message}>
Attached is your semester result including attendance, mid1, mid2 and fianal (excluding 
presentation marks).
</p>
<p className={classes.message}>
In case you have submitted mid1, mid2 or final and your marks are not uploaded then 
contact me by email as soon as possible. CR is asked to share this file in groups for convenience
 to students who are not using this website.
</p>
<p  className={classes.message}>Regard:<span className={classes.regard}>AliZeb</span></p>
<hr className={classes.postEndHr} />
</Grid>
<Grid item >
<div className={classes.postHeader}>
    <h5 className={classes.name}>Ali zeb</h5>
<ArrowRightIcon/>
    <h5 className={classes.subject}>JavaScript</h5>
</div>
<h5 className={classes.Title}>Dear Students:</h5>
<p className={classes.message}>
Attached is your semester result including attendance, mid1, mid2 and fianal (excluding 
presentation marks).
</p>
<p className={classes.message}>
In case you have submitted mid1, mid2 or final and your marks are not uploaded then 
contact me by email as soon as possible. CR is asked to share this file in groups for convenience
 to students who are not using this website.
</p>
<p  className={classes.message}>Regard:<span className={classes.regard}>AliZeb</span></p>
<hr className={classes.postEndHr} />
</Grid>
<Grid item >
<div className={classes.postHeader}>
    <h5 className={classes.name}>Ali zeb</h5>
<ArrowRightIcon/>
    <h5 className={classes.subject}>JavaScript</h5>
</div>
<h5 className={classes.Title}>Dear Students:</h5>
<p className={classes.message}>
Attached is your semester result including attendance, mid1, mid2 and fianal (excluding 
presentation marks).
</p>
<p className={classes.message}>
In case you have submitted mid1, mid2 or final and your marks are not uploaded then 
contact me by email as soon as possible. CR is asked to share this file in groups for convenience
 to students who are not using this website.
</p>
<p  className={classes.message}>Regard:<span className={classes.regard}>AliZeb</span></p>
<hr className={classes.postEndHr} />
</Grid>
  {/* Recent posts End*/}
        </Grid>

      </div>
         
        </Grid>
      </div>
    </>
  );
}

export default StudentDashboard;
