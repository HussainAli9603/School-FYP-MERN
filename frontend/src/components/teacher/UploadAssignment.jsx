import {Link }from 'react-router-dom'
import Appbar from '../students/Appbar'
import {Grid,Button,Card,TextareaAutosize} from '@mui/material';
import {VideoCameraFront,Close,Feed,} from '@mui/icons-material';
import { useState ,useRef ,useEffect} from 'react';
import axios from "axios";
import { useNavigate} from "react-router-dom";

import Sidebar from '../students/Sidebar'

const UploadAssignment = (props) => {
    const name = useRef();
    const desc = useRef();
    const dueDate = useRef();

    const [data, setData] = useState([]);
    const [assignDetails, setAssignDetails] = useState([]);
    const navigate=useNavigate();

    const SubmitAssignment = async (e) => {
      e.preventDefault();
      const assignment = {
        name: name.current.value,
        desc: desc.current.value,
        dueDate: dueDate.current.value
      };
      try {
        const res = await axios.post("/assignment", assignment);
        alert("Assigment Successfuly");
          navigate("/uploadassignment");
      } catch (e) {
        alert(e);
      }

    }

  const [addAssignment,setAddAssignment]=useState(false)
  const addAssignmentShow=()=>{
 if(!addAssignment){
     setAddAssignment(true)
 }else{
     setAddAssignment(false)}
  }
 
    const [showsubmitAssigment,setsubmitAssignment]=useState(false)
    const submittAssignmentShow=(id)=>{
      console.log(id)
      axios.get('/assignment/detail/' + id)
      .then(response =>{
        console.log("postDEtails",response.data)
        setAssignDetails(response.data)
      
      })
   if(!showsubmitAssigment){
    setsubmitAssignment(true)
   }else{
    setsubmitAssignment(false)
  }
       
}
  
    useEffect(() => {
      axios.get('/assignment')
      .then(response =>{
        console.log("sssssssssss",response.data[0].name)
        setData(response.data)
      
      })
      }, []);

   
  return (
    <>
<div className='courseDetail'>
<Appbar name='teacher' />
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar name='teacher'/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    <VideoCameraFront className='callIcon'/>

    </div>
    <hr className='courseHr'/>
    {/* //////////// assignment */}
    <div className='courseContent'>
<Button className='addMaterialBtn' onClick={addAssignmentShow}>Add Assignment</Button>
    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
{/* ///////////////////   Add Assignment hidden Section */}
<div className= {addAssignment?'addMaterialSectionHeroShow':'addMaterialSectionHero'}>
<div className='addMaterialSection'>
          <Card className='joinCourseCard'>
            <div className='topBar'>
              <p> Add Assignment</p>
              <Close className='courseClose' onClick={addAssignmentShow} />
            </div>
            <form onSubmit={SubmitAssignment} action="">
            <div className='courseBody'>
              <p className='accessP'>Name:</p>
              <input type="text" 
                className='courseInput'
                 name = "name"
                 ref={name}
                />
            </div>
            <div className='courseBody'>
              <p className='accessP'>Description: </p>
              <TextareaAutosize type="text" ref={desc} className='courseDescription' />
            </div>
            <div className='courseBody'>
              <p className='accessP'>Due Date : </p>

              <input type="date" ref={dueDate} className='courseInput' />
            </div>

            <div className='buttons'>
              
                <Button type='submit' className='joinBtn'>Join</Button>
             
              <Button className='cancelBtn' onClick={addAssignmentShow}>Cancel</Button>
            </div>
            </form>
          </Card>
          </div>
          </div>
{/* ///////////////////   Add Assignment hidden Section  End*/}
{/* hiddent submitted assignment start */}
<div className={showsubmitAssigment?'submittedAssignmentSectionShow':'submittedAssignmentSection'}>
<div className="topheader">

 <h3>Assignment No: <span>1</span> </h3>

<Close className='topIcon' onClick={submittAssignmentShow}/>
<hr /></div>
<div className="submittedBodySection">
  <div className="submittedLeft">
   <h3>Title : <span id='assignmentTitle'>{assignDetails.name}</span></h3>
   <p>
   {assignDetails.desc}
   </p>
  </div>
<hr />
  <div className="submittedRight">
    <div className="submittedRightTop">
      <h3>Submitted By:</h3>
    </div>
    <hr />
    <ul className='submittedAssignmentList'>
      <li className='submittedAssignmentItem'>Abid Khan</li>
      <li className='submittedAssignmentItem'>Abid Khan</li>
      <li className='submittedAssignmentItem'>Abid Khan</li>
    </ul>
  </div>
</div>

</div>
{data.map((post,index)=>{
    return <div>
        {/* hiddent submitted assignment End */}
        <><hr style={{ width: '95%', margin: '0 auto' }} /><div className='courseContent' onClick={()=>submittAssignmentShow(post._id)}>
          <Feed className='courseIcon' />
          <h4 className='courseText'>
            {post.name}    <span>{index +1}</span>
          </h4>

        </div><hr style={{ width: '95%', margin: '0 auto' }} /></>
        
          {/* //////////// assignment end */}
          </div>
      
    })}

</Grid>

</Grid>

</div>

    </>
  )
}

export default UploadAssignment