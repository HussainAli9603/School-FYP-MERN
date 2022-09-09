import { Link } from 'react-router-dom'
import { Grid } from '@mui/material';
import { LibraryBooks, Assignment, Quiz, NoteAlt, Grading } from '@mui/icons-material';

const Sidebar = (props) => {
  return (
    <>
      <Grid className="sideBar" xs={12} md={2}>
        <ul className='sideList'>
          <li className='sideItem'>
            {props.name ? <Link to='/tmaterial' className='sideLink'> <LibraryBooks />
              <span className='itemText'>Material</span></Link> : <Link to='/material' className='sideLink'> <LibraryBooks />
              <span className='itemText'>Material</span></Link>}
          </li>

          <li className='sideItem'>
            {props.name ? <Link to='/uploadassignment' className='sideLink' >
              <Assignment />
              <span className='itemText'>Assignment</span>
            </Link> : <Link to='/assignment' className='sideLink' >
              <Assignment />
              <span className='itemText'>Assignment</span>
            </Link>}

          </li>
          <li className='sideItem'>
            {props.name ? <Link to='/createquiz' className='sideLink'>

              <Quiz />
              <span className='itemText'>Quiz</span>
            </Link> : <Link to='/quiz' className='sideLink'>

              <Quiz />
              <span className='itemText'>Quiz</span>
            </Link>}

          </li>
          <li className='sideItem'>
          {props.name?  <Link to='/tattendence' className='sideLink'>
              <NoteAlt />
              <span className='itemText'>Attendence</span>
            </Link>:  <Link to='/attendence' className='sideLink'>
              <NoteAlt />
              <span className='itemText'>Attendence</span>
            </Link>}
          
          </li>
          <li className='sideItem'>
            {props.name?<Link to='/gradding' className='sideLink'>
              <Grading />
              <span className='itemText'>Grade</span>
            </Link>:<Link to='/grade' className='sideLink'>
              <Grading />
              <span className='itemText'>Grade</span>
            </Link>}
          </li>
        </ul>
      </Grid>
    </>

  )
}

export default Sidebar