
import Appbar from './Appbar'
import {Grid} from '@mui/material';
import {VideoCameraFront} from '@mui/icons-material';


import Sidebar from './Sidebar'

const Grade = () => {
 

  return (
    <>
<div className='courseDetail'>
<Appbar/>
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    

    </div>
    <hr className='courseHr'/>
    {/* //////////// Grade */}
    <div className='courseContent'>
    <div className='gradeSection'>
    <p className='gradeActivity'>Assignment No <span>1</span></p>
    <p className='marksTaken'>4/5</p>
    </div>
  </div>
<hr  className='gradeHr'/>
    <div className='courseContent'>
    <div className='gradeSection'>
    <p className='gradeActivity'>Quiz No <span>1</span></p>
    <p className='marksTaken'>9/10</p>
    </div>
  </div>
<hr  className='gradeHr'/>
    <div className='courseContent'>
    <div className='gradeSection'>
    <p className='gradeActivity'>Presentation <span>1</span></p>
    <p className='marksTaken'>7/10</p>
    </div>
  </div>
<hr  className='gradeHr'/>
    <div className='courseContent'>
    <div className='gradeSection'>
    <p className='gradeActivity'>Mid <span></span></p>
    <p className='marksTaken'>21/25</p>
    </div>
  </div>
<hr  className='gradeHr'/>
    <div className='courseContent'>
    <div className='gradeSection'>
    <p className='gradeActivity'>Final <span></span></p>
    <p className='marksTaken'>42/50</p>
    </div>
  </div>
<hr  className='gradeHr'/>
    {/* //////////// Grade end */}

</Grid>

</Grid>

</div>

    </>
  )
}

export default Grade