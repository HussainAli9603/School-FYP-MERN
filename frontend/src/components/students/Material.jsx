import {Link }from 'react-router-dom'
import Appbar from './Appbar'
import {Grid} from '@mui/material';
import {VideoCameraFront,Feed} from '@mui/icons-material';


import Sidebar from './Sidebar'
import { useState } from 'react';
import { useEffect } from 'react';

const Material = () => {
 const [showAccess,setShowAccess]=useState(false);
 const [showAccessbox,setShowAccessBox]=useState(true);
const connectCall=()=>{
    
    if(!showAccess){
        setShowAccess(true)
    }else{
        setShowAccess(false) 
    }
}


    const hideAccess=()=>{
        if(showAccessbox){
            setShowAccessBox(false)
        }else{
            setShowAccessBox(true)
        } 
    }
    useEffect(()=>{
        {
            if(!showAccessbox){
                setShowAccessBox(true)
            }
        }
    },[showAccess])
    

  return (
    <>
<div className='courseDetail'>
<Appbar/>
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    <VideoCameraFront className='callIcon' onClick={connectCall} />

    </div>
    {/* /////////////// Video Calling start  */}
    <div className={showAccess?'videoSectionshow':"videoSection"}>
        <div className="callSection">
           <div className={showAccessbox?'videoAccessCodeshow':'videoAccessCode'}>
           <label htmlFor="">Access Code:</label>
           <input type="text" className='accessInput'/>
           <button style={{backgroundColor:'green',color:'white',cursor:'pointer'}} onClick={hideAccess} >Access</button>

           </div>
        </div>
        {/* /// Hide Access end */}
        <div className="callingSection">
        <div className="callCard">
<img src="/assets/images/pic1.png" alt="" />
        </div>
        <div className="callCard">
<img src="/assets/images/pic3.jpg" alt="" />
        </div>
        <div className="callCard">
<img src="/assets/images/pic4.jpg" alt="" />
        </div>
        <div className="callCard">
<img src="/assets/images/pic1.png" alt="" />
        </div>
        <div className="callCard">
<img src="/assets/images/pic4.jpg" alt="" />
        </div>
        </div>
        {/* ////// video profile */}
    </div>
    {/* /////////////// Video Calling End */}
    <hr className='courseHr'/>
    {/* //////////// materials */}
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

export default Material