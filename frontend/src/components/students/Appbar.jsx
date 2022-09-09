import {Link} from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Grid,
  
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  import { Assignment, ArrowDropDown, Add } from "@mui/icons-material";
  const useStyle = makeStyles({
    root: {
      background: 'linear-gradient(80deg, #61a1e2, #097ff2) !important',
      // boxShadow: "none !important",
      boxShadow: '-12px 2px 5px -2px #61a1e2 !important',
      
      width: "80% !important",
      // margin: "0px auto",
      position: "sticky",
     margin:'0  10% 0 0 !important',
     zIndex:'999!important'

    },
    topLeft: {
      display: "flex",
      alignItems: "center",
    },
    topRight: {
      display: "flex",
      alignItems: "center",
      justifyContent: "right",
      position: "relative",
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
      fontSize: "14px",
    },
    topButtons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30%",
      },
      topCourse: {
        display: "flex !important",
        flexDirection: "row",
        color: "white",
        textDecoration: "none",
      },
      courseText: {
        fontWeight: "400",
        cursor: "pointer",
      },
      courseLogo: {
        marginLeft: "10px",
        cursor: "pointer",
      },
      topProfile: {
        cursor: "pointer",
        textAlign: "center",
        fontWeight: "500",
      },
      hr: {
        height: "3px",
        width: "100%",
        backgroundColor: "white",
        margin: "0px auto",
      },
  });

function Appbar(props) {
    const classes=useStyle();
  return (
    <AppBar  className={classes.root} >
    <Toolbar>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6} className={classes.topLeft}>
          <p className={classes.logo}>Online ClassRoom</p>
  {props.name?       <Link to='/teacherhome' style={{textDecoration:'none',color:'white'}}> <h4 >Online ClassRoom</h4></Link>:       <Link to='/studentdashboard' style={{textDecoration:'none',color:'white'}}> <h4 >Online ClassRoom</h4></Link>}
          
        </Grid>
        <Grid item xs={12} md={6} className={classes.topRight}>
          <div className={classes.topButtons}>
        {props.name?<Link to="/tcourses" className={classes.topCourse}>
              <div className={classes.topCourse}>
                <h3 className={classes.courseText}>Course</h3>
                <Assignment className={classes.courseLogo} />
              </div>
            </Link>: <Link to="/courses" className={classes.topCourse}>
              <div className={classes.topCourse}>
                <h3 className={classes.courseText}>Course</h3>
                <Assignment className={classes.courseLogo} />
              </div>
            </Link>}
            <div className={classes.topProfile}>
              Profile
              <ArrowDropDown />
            </div>
          </div>
        </Grid>
      </Grid>
    </Toolbar>
    <hr className={classes.hr} />
  </AppBar>
  )
}

export default Appbar