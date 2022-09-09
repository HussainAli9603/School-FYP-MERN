import {useState} from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Grid, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./style.css";
import { Button, Typography } from "@mui/material";

const useStyle = makeStyles({
  root: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    width: "80% !important",
    margin: "0px auto",
  },
  topLeft: {
    display: "flex",
    alignItems: "center",
  },
  topRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    position:'relative'
  },
  logo: {
    width: "80px",
    height: "80px",
    background: "#685E41",
    color: "white",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    border: "2px dotted white",
    marginRight: "10px",
    fontSize:'14px',
    
  },
  RgBtn: {
    backgroundColor: "#4CAF50 !important",
    border: "1px solid white !important",
    color: "white !important",
    padding: "5px 20px !important",
    '&:hover':{
        showBar:{
            display:'block'
        }
    }
  },
  showBar:{
    backgroundColor:'gray',
    color:'white',
    width:'80px',
    padding:'10px 15px',
    textAlign:'center',
    borderRadius:'10px',
    marginTop:'10px', 
    position:'absolute',
    top:'30px',
  

},
hideBar:{
display:'none'
},
teacher:{
    padding:'5px 5px',
    color:'white',
    textDecoration:'none',
    
'&:hover':{
    cursor:'pointer',
    color:'blue',
}
},
student:{
    padding:'5px 5px',
    color:'white',
    textDecoration:'none',

'&:hover':{
    cursor:'pointer',
    color:'blue',
}
},
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
    marginTop:'30px'
  },
  hero: {
    width: "90% !important",
    padding: "10% 5%",
    margin: "0px auto",
    display:'flex',
    justifyContent:'space-between'
  },
  heroText: {
    color: "white",
    fontWeight: "400 !important",
  },
  heroPragraph: {
    fontWeight: "400",
    color: "white",
    padding:'70px 0',
    fontStyle:'italic'
   
  },
  homeImageSection:{
      width:'100%',
      height:'400px',
      backgroundColor:'lightGray',
      borderRadius:'5px'
  }
  ,
  homePic:{
      width:'100%',
      height:'100%',
      margin:'0 auto'
  }
 
});
function Home() {
  const classes = useStyle();
  const [showBtn,setShowBtn]=useState(false)
  const dropDown=()=>{
   if (!showBtn)
    {setShowBtn(true)}
   else {
       setShowBtn(false)
        
    }
}  

  return (
    <>
      <div className="main">
        <AppBar position="static" className={classes.root} name='teacher'>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6} className={classes.topLeft}>
                {/* <img src='/assets/images/logo.png' className={classes.logo}></img> */}
                <p className={classes.logo}>Online ClassRoom</p>
                <h4>Online ClassRoom</h4>
              </Grid>
              <Grid item xs={12} md={6} className={classes.topRight}>
                <div className={classes.topButtons}>
                  <Button className={classes.RgBtn} onClick={dropDown}>Register</Button>
                  <div className={showBtn?classes.showBar:classes.hideBar}>
                    
                     <h3 >
                   <Link className={classes.teacher} to='/teacherregister'>Teacher</Link>
                      </h3>
                   
                      <hr />
                      <h3>
                      <Link className={classes.student} to='/studentregister'>Student</Link>
                      </h3>
                  </div>
                  <Link className={classes.LgBtn} to='/login' >LogIn</Link>
                 
                </div>
              </Grid>

            </Grid>
          </Toolbar>
          <hr className={classes.hr} />
        </AppBar>
        <Grid container className={classes.hero}>
          <Grid item xs={12} md={6} >
            <Typography variant="h2" className={classes.heroText}>
              Online Class Room Is Here To help
            </Typography>
            <p  className={classes.heroPragraph}>
              PowerSchool is doing everything we can to make it easy for districts to get up and running with distance learning.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className={classes.homeImageSection}>
        
           <img src="/assets/images/pic1.png" alt="Picture"  className={classes.homePic}/>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
