import { makeStyles } from "@mui/styles";
import "../style.css";
import {
  AppBar,
  Typography,
  Grid,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { Link ,useNavigate} from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const useStyle = makeStyles({
  root: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    width: "80% !important",
    margin: "0px auto",
  },
  hr: {
    height: "3px",
    backgroundColor: "white",
    marginTop: "20px",
  },
  topHeader: {
    padding: "20px",
  },
  form: {
    width: "30%",
    margin: "50px auto",
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "64.7vh",
    borderRadius: "20px",
    padding: "30px 30px",
    textAlign: "center",
    color: "white",
  },
  formHeading: {
    padding: "10px",
    fontWeight: "500",
  },
  box: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "@media (max-width: 935px)": {
    box: {
      flexDirection: "column",
    },
  },
  labelName: {
    fontWeight: "500",
    letterSpacing: "1px",
    flex: "4",
    paddingLeft: "10px",
    textAlign: "start",
  },
  RgBtn: {
    width: "100%",
    backgroundColor: "#097ff2 !important",
    margin: "10px 25px !important",
    color: "white !important",
    padding: "5px 10px",
    outline: "none",
    border: "none",

    "&:hover": {
      cursor: "pointer",
    },
  },
});
function TeacherRegister(props) {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const cpassword = useRef();
    const category=useRef()
  const navigate=useNavigate();
  
  const classes = useStyle();
  const submitEvent = async (e) => {
    e.preventDefault();
    if (password.current.value !== cpassword.current.value) {
      password.current.setCustomValidity("not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        category:category.current.value
      };
      try {
        const res = await axios.post("/auth/register", user);
        // const data=await axios.get('/users/62a1b595f0b0d2c8fd4991d3')
        //    console.log(data)
        alert("You Successfuly Register");
        localStorage.setItem("teacher", JSON.stringify(res));
        if (props.name == "teacher") {
          navigate("/tlogin");
        } else {
          navigate("slogin");
        }
      } catch (e) {
        alert(e);
      }
    }
  };

  return (
    <>
      <div className="main">
        <AppBar position="static" className={classes.root} name="teacher">
          <Typography
            variant="h4"
            textAlign="center"
            className={classes.topHeader}
          >
            ONLINE CLASS ROOM
            <hr className={classes.hr} />
          </Typography>
        </AppBar>

        <Grid container>
          <Grid item xs={12} md={12}>
            <form onSubmit={submitEvent} className={classes.form}>
              <h3 className={classes.formHeading}>SignUp</h3>
              <hr />

              <Box className={classes.box}>
                <label className={classes.labelName}> Username</label>
                <input
                  type="text"
                  ref={username}
                  className={classes.inputfieldsn}
                  className="inputfields"
                />
              </Box>
              <Box className={classes.box}>
                <label className={classes.labelName}> Email</label>
                <input
                ref={email}
                  type="text"
                  required
                  className={classes.inputfields}
                  className="inputfields"
                />
              </Box>
              <Box className={classes.box}>
                <label className={classes.labelName}> Password</label>
                <input
                  type="password"
                  ref={password}
                  required
                  className={classes.inputfields}
                  className="inputfields"
                />
              </Box>
              <Box className={classes.box}>
                <label className={classes.labelName}> Confirm Password</label>
                <input
                  type="password"
                  required
                  ref={cpassword}
                  className={classes.inputfields}
                  className="inputfields"
                />
              </Box>
              <Box className={classes.box}>
                <label className={classes.labelName}> Category </label>
                <input
                  type="text"
                  required
                  ref={category}
                  className={classes.inputfields}
                  className="inputfields"
                />
              </Box>

              <Box className={classes.box}>
                <Button className={classes.RgBtn} type ='submit'>
                  {/* <Link
                    to="/teacherhome"
                    style={{ textDecoration: "none", color: "white" }}
                  > */}
                    Register
                  {/* </Link> */}
                </Button>
                <Button className={classes.RgBtn}>
                  <Link
                    to="/tlogin"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    LogIn
                  </Link>
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default TeacherRegister;
