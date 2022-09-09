import { useState ,useRef ,useEffect} from 'react';
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
import Appbar from './Appbar'
// import {Grid} from '@mui/material';
import {VideoCameraFront,Feed,UploadFile} from '@mui/icons-material';
import {Grid,Button,Card,TextareaAutosize} from '@mui/material';


import Sidebar from './Sidebar'

const Quiz = () => {

  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  // const [subject, setSubject] = useState({topic:""});
  const [attendance, setAttendance] = useState([]);
  const navigate=useNavigate();

  const [attendanceDeatail, setAttendanceDetail] = useState({
    present:"",
    absent:"",
    leave:"",
  });

  const SubmitQuiz = async (e) => {
    e.preventDefault();
    console.log("attendance 1 ::", attendance)
   
       try {
        const res = await axios.post("/quiz/attend", attendance);
        alert("Attendance Submitted Successfully")
        navigate("/quiz");
      } catch (e) {
      alert(e);
      }

    }

    const handleChange = (e, value) => { 
          console.log(e.target.value)
      if(value){
        if(value === "opts1"){
          setAttendanceDetail((prev) => ({
            opts1:e.target.value,
            name:user,
            opts2:"",
            opts3: ""
          }))
        } else if(value === "opts2"){
          setAttendanceDetail((prev) => ({
            opts1:"",
            opts2:e.target.value,
            name:user,
            opts3: ""
          }))
        }
        else if(value === "opts3"){
          setAttendanceDetail((prev) => ({
            opts1:"",
            opts2:"",
            opts3: e.target.value,
            name:user,
          }))
        }
       
      }
    
  }

  if(attendanceDeatail){
    if(attendanceDeatail.present !=="" || attendanceDeatail.absent !=="" || attendanceDeatail.leave !==""){
    attendance.push(attendanceDeatail)
    } 
  }
  console.log("attendance", attendance);

  useEffect(() => {
    axios.get('/quiz')
    .then(response =>{
      console.log(response)
      const json = localStorage.getItem("user");
      const savedNotes = JSON.parse(json);
      console.log(savedNotes.username)
      if (savedNotes) {
        setUser(savedNotes.username);
      }
      setData(response.data)
    
    })
    }, []);
 

  return (
    <>
<div className='courseDetail'>
<Appbar/>
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    <VideoCameraFront className='callIcon'/>

    </div>
    
    <hr className='courseHr'/>
    <form onSubmit={SubmitQuiz} action="">
    {data?.map((quiz,index)=>{
      return<div>
      {/* //////////// assignment */}
          <div className='courseContent'>
          <div className="questions">
          <p className='quizQuestion'><span className='questionCount'>{index + 1}</span> {quiz.question}</p>
          <ol className='questionOptionsList'>
          <li className='optionItem'>  <input type="radio" onChange={(e)=> handleChange(e, "opts1")} name={quiz.question} id="html" value={quiz.opts1}/> <span style={{marginLeft:'5px'}}>{quiz.opts1}</span></li>
          <li className='optionItem'>  <input type="radio" onChange={(e)=> handleChange(e, "opts2")} name={quiz.question} id="html" value={quiz.opts2}/> <span style={{marginLeft:'5px'}}>{quiz.opts2}</span></li>
          <li className='optionItem'>  <input type="radio" onChange={(e)=> handleChange(e, "opts3")} name={quiz.question} id="html" value={quiz.opts3}/> <span style={{marginLeft:'5px'}}>{quiz.opts3}</span></li>
        </ol>
        </div>
      </div>
      <hr style={{width:'95%',margin:'0 auto'}}/>
      </div>
    })}
   

<hr style={{width:'95%',margin:'0 auto'}}/>

  <Button type='submit' className='submitQuiz'>Submit</Button>
    {/* //////////// assignment end */}
    </form>
</Grid>

</Grid>

</div>

    </>
  )
}

export default Quiz