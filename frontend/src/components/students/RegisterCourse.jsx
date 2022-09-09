import { useState } from "react";
import { Link } from "react-router-dom";
import {  Grid, Card, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../style.css";

import {Close } from "@mui/icons-material";
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
    width: "80% !important",
    padding: "2% 0%",
    margin: "0px auto",
    display: "flex",
    justifyContent: "space-between",
    
  },
  main:{
    marginTop:'7%',
    width:'100%'
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
    padding: "10px 15px",
    flexWrap: "wrap",
  },
  courseCard: {
    width: "31% !important",
    cursor: "pointer",
    marginTop: "5%",
  },
  addCourse: {
    fontSize: "300px !important",
    marginLeft: "10%",
    cursor: "pointer",
  },
  courseTitle: {
    fontSize: "20px !important",
    fontWeight: "500",
    color: "white",
  },
  joinCourseCard: {
    width: "40%",
    margin: "0 auto",
  },
  topBar: {
    backgroundColor: "#393939",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    padding: "5px 10px",
  },
  courseClose: {
    cursor: "pointer",
  },
  courseBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
  },
  courseInput: {
    flex: "8",
    margin: "20px 4%",
    height: "25px",
    "&:focus": {
      outline: "none",
    },
  },
  
  accessP: {
    fontWeight: "500",
  },
});
function RegisterCourse() {
  const classes = useStyle();
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      <div className="main" style={{ height: "63vh" }}>
     <Appbar/>
      
        <Grid container className={classes.hero}>
          <div className={classes.main}>
          <Card className={classes.joinCourseCard}>
            <div className={classes.topBar}>
              <p> Join course</p>
              <Close className={classes.courseClose} />
            </div>
            <div className={classes.courseBody}>
              <p className={classes.accessP}>Access Code:</p>
              <input type="text" className={classes.courseInput} />
            </div>
            <div className={classes.buttons}>
              <Link to="/courses">
                <Button>Join</Button>
              </Link>
              <Button>Cancel</Button>
            </div>
          </Card>
          </div>
        </Grid>
      </div>
    </>
  );
}

export default RegisterCourse;
