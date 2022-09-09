import { makeStyles } from "@mui/styles";
import "./style.css";
import { AppBar, Typography ,Grid,TextField,Box, Button} from "@mui/material";
import { Link, useNavigate ,useParams} from "react-router-dom";
import axios from 'axios';
import { useRef } from "react";
const useStyle = makeStyles({
    root:{
        backgroundColor:'transparent !important',
        boxShadow: "none !important",
        width: "80% !important",
        margin: "0px auto",
    },
    hr:{
        height:'3px',
        backgroundColor:'white',
        marginTop:'20px'
    }
    ,
    topHeader:{
        padding:'20px'
    },
    form:{
        width:'30%',
        margin:'50px auto',
        backgroundColor:'rgba(0,0,0,0.3)',
        height:'64.7vh',
        borderRadius:'20px',
        padding:'30px 30px',
        textAlign:'center',
        color:'white'
    },
    formHeading:{
        padding:'10px',
        fontWeight:'500'
    },
    box:{
        marginTop:'20px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
      
    },
    '@media (max-width: 935px)': {
        box: {
         flexDirection:'column'
        }
      },
    labelName:{
        fontWeight:'500',
        letterSpacing:'1px',
        flex:'12',
        paddingLeft:'10px',
        textAlign:'start'

    },
    RgBtn:{
        width:'100%',
        backgroundColor:'#097ff2 !important',
        margin:'10px 25px !important',
        color:'white !important',
        padding:'5px 10px',
        outline:'none',
        border:'none',
        '&:hover':{
            cursor: 'pointer'
        }
    },
  
    inputfields:{
        width:'100%',
        height:'35px',
        borderRadius:'20px',
        outline:'none !important',
        border:'none',
        padding:'5px 5px',
        fontSize:'18px',
        fontWeight:'300'
    },
    createP:{
        color:'white',
        cursor:'pointer',
        textDecoration:'none',

    }
});
function Login(props) {
   
    const email=useRef();
    const password=useRef()
  const classes = useStyle();
  const navigate=useNavigate();
  const SignIn=async(e)=>{
      e.preventDefault()
      const userC={
          email:email.current.value,
          password:password.current.value,
      }
    
 try{
    
     const res= await axios.post('/auth/login',userC)
    //  const userFind=await axios.get('/auth?email=',{userC.email})
  
    const userFind=await axios.get( `/auth/?email=${userC.email}`)
   
    //  if(userFind) {console.log(userFind.data.category)}
     
     localStorage.setItem('user',JSON.stringify(res.data));
     
    //  if(props.name=='student'){
    // navigate('/studentdashboard')}else{
    //     navigate('/teacherhome')
    // }
    const userId=userFind.data._id;
    const category=userFind.data.category;
    {category? localStorage.setItem("teacher", JSON.stringify(userFind)): localStorage.setItem("studentEmail", JSON.stringify(userC));}
    {props.name==='Student'? navigate('/studentdashboard',):navigate(`/teacherhome/`) || category? navigate(`/teacherhome/`):navigate('/studentdashboard')}
       

 }
 catch(err){
     err=err.response.status;
     if(err===404){
    console.log('authentication is not valid')
    
    password.current.setCustomValidity("authentication is not valid");}
    
 }
  }

  return (
    <>
      <div className="main">
      <AppBar position="static" className={classes.root}>
          <Typography variant='h4' textAlign='center' className={classes.topHeader}>
          ONLINE CLASS ROOM
<hr className={classes.hr} />
          </Typography>
      </AppBar>

      <Grid container>
      <Grid item xs={12} md={12}>
          <form action="" className={classes.form} onSubmit={SignIn}>
             <h3 className={classes.formHeading}>{props.name} LogIn</h3>
             <hr />

          <Box className={classes.box}>
          <label className={classes.labelName}> Email</label>
              <input type="text" required ref={email}  className={classes.inputfields} />
          </Box>
          <Box className={classes.box}>
          <label className={classes.labelName}> Password</label>
              <input type="password" required ref={password} className={classes.inputfields} />
          </Box>
         
          <Box className={classes.box}>
              <Button className={classes.RgBtn} type='submit'>
              Login
              {/* {props.name=="Teacher"?<Link to='/teacherhome'  style={{textDecoration:'none',color:'white'}}>LogIn</Link>: <Link to='/studentdashboard' style={{textDecoration:'none',color:'white'}}>LogIn</Link>} */}
              </Button>
            
            <Link to='/teacherregister' className={classes.createP}>Create Account</Link>
          </Box>
          </form>
      </Grid>

      </Grid>
      </div>
    </>
  );
}

export default Login;
