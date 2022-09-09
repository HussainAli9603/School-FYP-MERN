
import Appbar from '../students/Appbar'
import {Grid} from '@mui/material';
import {Close} from '@mui/icons-material'
import Sidebar from '../students/Sidebar'
import { useState } from 'react';

const Gradding = () => {
    const[studentName,setStudentName]=useState();
    const[showGradding,setShowGrading]=useState(false);
 
const createGrade=(e)=>{
    setStudentName((e.target.innerText));
   if(!showGradding){
    setShowGrading(true)
   }else{
    setShowGrading(false)
   }
}

  return (
    <>
<div className='courseDetail'>
<Appbar name='teacher' />
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar name='teacher'/>
<Grid className="mainContent" xs={12} md={9}> 
    {/* ////////////////   hidden Create Gradding  Start*/}
    <Grid className={showGradding?"creatingGradMin":'creatingGradMinHide'} xs={12} md={9}> 
    <div className="GraddingTopHeader">
        <h2 className='courseName'>{studentName}</h2>
    <Close onClick={createGrade} style={{cursor:'pointer',marginRight:'20px'}}/>
    </div>
    <div className="GraddingBody">
        <div className="assignmentSection">
        <h5 className='gradeTopic'>Assignment</h5>
        <input type="text"  className='gradingInput'/>
        </div>
        <div className="assignmentSection">
        <h5 className='gradeTopic'>Quiz</h5>
        <input type="text"  className='gradingInput'/>
        </div>
        <div className="assignmentSection">
        <h5 className='gradeTopic'>Mid</h5>
        <input type="text"  className='gradingInput'/>
        </div>
        <div className="assignmentSection">
        <h5 className='gradeTopic'>Final</h5>
        <input type="text"  className='gradingInput'/>
        </div>
           
    
        
    </div>
</Grid>
    {/* ////////////////   hidden Create Gradding ENd  */}
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    

    </div>
    <hr className='courseHr'/>
    {/* //////////// Grade */}
    <div className='GraddingBody' onClick={createGrade}>
  <h3 id=''>Fazli azim</h3>
  </div>
    <div className='GraddingBody' onClick={createGrade}>
  <h3 id=''>Ijaz Khan</h3>
  </div>
    <div className='GraddingBody' onClick={createGrade}>
  <h3 id=''>Abid Khan</h3>
  </div>

    {/* //////////// Grade end */}

</Grid>

</Grid>

</div>

    </>
  )
}

export default Gradding