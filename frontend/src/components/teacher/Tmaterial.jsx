import { Link } from 'react-router-dom';
import Appbar from '../students/Appbar';
import {Grid,Button,Card, TextareaAutosize} from '@mui/material';
import {VideoCameraFront,Close,Feed} from '@mui/icons-material';
import { useState } from 'react';

import Sidebar from '../students/Sidebar'

const Tmaterial = () => {
    const [addMaterial,setAddmaterial]=useState(false)
 const addMateriaShow=()=>{
if(!addMaterial){
    setAddmaterial(true)
}else{
    setAddmaterial(false)}
 }

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
    {/* //////////// materials */}
    <div className='courseContent'>
<Button className='addMaterialBtn' onClick={addMateriaShow}>Add Material</Button>
    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
{/* ///////////////////   Add Material hidden Section */}
<div className= {addMaterial?'addMaterialSectionHeroShow':'addMaterialSectionHero'}>
<div className='addMaterialSection'>
          <Card className='joinCourseCard'>
            <div className='topBar'>
              <p> Join course</p>
              <Close className='courseClose' onClick={addMateriaShow} />
            </div>
            <div className='courseBody'>
              <p className='accessP'>Access Code:</p>
              <input type="text" className='courseInput' />
            </div>
            <div className='courseBody'>
              <p className='accessP'>Description: </p>
              <TextareaAutosize type="text" className='courseDescription' />
            </div>
            <div className='buttons'>
              <Link to="/courses">
                <Button className='joinBtn'>Join</Button>
              </Link>
              <Button className='cancelBtn' onClick={addMateriaShow}>Cancel</Button>
            </div>
          </Card>
          </div>
          </div>
{/* ///////////////////   Add Material hidden Section  End*/}


    <div className='courseContent'>
<Feed className='courseIcon'/>
<h4 className='courseText'>
Course Of contents
</h4>
    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
    <div className='courseContent'>
<Feed className='courseIcon'/>
<h4 className='courseText'>
Course Of contents
</h4>
    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
    {/* //////////// materials end */}

</Grid>

</Grid>

</div>

    </>
  )
}

export default Tmaterial