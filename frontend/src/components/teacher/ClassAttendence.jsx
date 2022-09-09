import { useState ,useRef ,useEffect} from 'react';
import {Link }from 'react-router-dom'
import Appbar from '../students/Appbar'
import {Button, Grid} from '@mui/material';
import {Close} from '@mui/icons-material'
import Sidebar from '../students/Sidebar'
import axios from "axios";
import { useNavigate} from "react-router-dom";


const ClassAttendence = () => {
    const topic = useRef();
    const name = useRef();
    const present = useRef();
    const absent = useRef();
    const leave = useRef();
// let attendance= [];
    const [subject, setSubject] = useState({topic:""});
    const [data, setData] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [attend, setAttend] = useState([]);


    const [showAttendece,setshowAttendece]=useState(false)
    const [taken,setTaken]=useState('Not Taken');
    const [time,setTime]=useState()
    const navigate=useNavigate();
    const [attendanceDeatail, setAttendanceDetail] = useState({
      present:"",
      absent:"",
      leave:"",
    });

    const Attendance = async (e) => {
      e.preventDefault();

      if(subject !==""){
        attendance.push(subject);
      }
      console.log("attendance 1 ::", attendance)
     
         try {
          const res = await axios.post("/attendance", attendance);
          alert("Attendance Submitted Successfully")
          navigate("/tattendence");
        } catch (e) {
        alert(e);
        }
  
      }

 const takeAttendence=()=>{
     if(!showAttendece){
         setshowAttendece(true)
         setTaken('Taken');
         let today=new Date()
         let date=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +'/'+today.getDate() +'/'+(today.getMonth()+1)+'/'+today.getFullYear()
         setTime(date)
         localStorage.getItem('user',)
     }
     else
     {
         setshowAttendece(false)
     }
 }

 useEffect(() => {
    axios.get('/auth/all-users')
    .then(response =>{
      setData(response.data)
    
    })
    }, []);

    useEffect(() => {
      axios.get('/attendance')
      .then(response =>{
        console.log("sssssssssss",response.data)
        console.log("attend 1 ::", attend)
        setAttend(response.data)
      
      })
      }, []);


    const handleChange = (e, value) => { 
      

        if(e.target.name == "topic"){
          setSubject((prev) => ({
            topic : e.target.value
          }))
        }


            
        if(value){
          if(value === "present"){
            setAttendanceDetail((prev) => ({
              present:value,
              absent:"",
              leave: ""
            }))
          } else if(value === "absent"){
            setAttendanceDetail((prev) => ({
              present:"",
              absent:value,
              leave: ""
            }))
          }
          else if(value === "leave"){
            setAttendanceDetail((prev) => ({
              present:"",
              absent:"",
              leave: value
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

  return (
    <>
<div className='courseDetail'>
<Appbar name='teacher' />
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar name='teacher'/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>Attendence</h2>
   

    </div>
    <hr className='courseHr'/>
    {/* //////////// attndence */}
    <div className='courseContent'>
    {/* hiddent attendece sheet start */}
    <form onSubmit={Attendance} action="">

        <div className={showAttendece?'QuizResultShow':'QuizResultHide'}>
        <div className="attendenceSheetHeader">

        <input type="text" name='topic' placeholder='Topic Name' onChange={(e) => handleChange(e, "")} value={subject.topic} className='attendeceTopicInput'  />

        <Close className='quizResultIcon' onClick={takeAttendence}/>
        <hr /></div>
        <div className="attendenceSheetBody">
        <div className="attendece">

        <table id="customers">
  <tr>
    <th>Studen Name</th>
    <th>Present</th>
    <th>Absent</th>
    <th>Leave</th>
  </tr>
  {data?.map((attend,index)=>{
    return <div style={{width:'120%'}}>
        <tr style={{width:'1000%'}}>
            <td style={{width:'1100%'}}>{attend.username}</td>
            <td><input type="hidden" onChange={handleChange} value={attend.username} /></td>
            <td style={{padding:'0% 4%'}}><input type="radio" onChange={(e)=> handleChange(e, "present")} name={attend.username} value="Present" /></td>
            <td style={{padding:'0% 40%'}}><input type="radio" onChange={(e)=> handleChange(e, "absent")} name={attend.username} value="Absent" /></td>
            <td style={{padding:'0% 70%'}}><input type="radio" onChange={(e)=> handleChange(e, "leave")} name={attend.username} value="Leave" /></td>
        </tr>
        
  </div>
  })}
</table>
        </div>
        <Button type='submit' style={{float:'right',margin:'200px'}}  className='joinBtn'>Submit</Button>
        </div>

        </div>
        

</form>
{/* hiddent attendence sheet End */}

    {/* main activity */}
  <div className='activitySection'>
  <Button className='attendeceBtn' onClick={takeAttendence}>Attendence</Button>
  {attend?.map((all,index)=>{
    return <div>
  <div className='attendenceActivity'>
    <p className='schedule'>Scheduled on: <spane className='activitySpan'>{all.createdAt}</spane></p>
    <p className='schedule'>Topic: <spane className='activitySpan'>{all.attendances[3].topic}</spane></p>
    <p className='schedule'>Attendence: <spane className='activitySpan' >{all.attendances[0].attendance}</spane></p>
    </div>
    </div>
  })}
  
  </div>
  
   
    {/* activity end */}
   
</div>

  
    {/* //////////// assignment end */}

</Grid>

</Grid>

</div>

    </>
  )
}

export default ClassAttendence