import {Link }from 'react-router-dom'
import Appbar from './Appbar'
import {Button, Grid} from '@mui/material';
import {VideoCameraFront,Feed,UploadFile} from '@mui/icons-material';
import { useState ,useRef ,useEffect} from 'react';
import axios from "axios";



import Sidebar from './Sidebar'

const CourseDetail = () => {
 
    const [data, setData] = useState([]);
    const [uploadFile, setUploadFile] = useState();

    useEffect(() => {
        axios.get('/assignment')
        .then(response =>{
          console.log("sssssssssss",response.data[0].name)
          setData(response.data)
        
        })
        }, []);
    
        const submitHandler = async (e) => {
            e.preventDefault();
            //  console.log("ccccccccccc",uploadFile)
            const dataArray = new FormData();
            dataArray.append("images", uploadFile);
            console.log("ccccccccccc",dataArray)
        
            axios.post("/student/assigment", dataArray, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              })
              .then((response) => {
               alert("Assigment SuccessFully")
              })
              .catch((error) => {
                console.log(error)
              });
        }

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
    
    {data.map((post,index)=>{
         return <div>
    {/* //////////// assignment */}
    <div className='courseContent'>
    <Feed className='courseIcon'/>
    <h4 className='courseText'>
    {post.name} <span>{index+1}</span>
    </h4>
    <form onSubmit={submitHandler} action="">
        <div className='uploadAssignment'>
        <input type="text" id='upload' accept=".jpg,.png,.pdf"  className='chooseAssignmentInput' />
        <label for="upload" className='uploadIcon'title='upload file' ><span >Choose File
            <input type="file" onChange={(e) => setUploadFile(e.target.files)} style={{width:'50px',color:'gray'}} >
            </input></span><UploadFile  style={{fontSize:'30px',color:'blue'}}/></label>
            <Button type='submit' className='joinBtn'>Submit</Button>
        </div>
    </form>
        </div>
    <hr style={{width:'95%',margin:'0 auto'}}/>
        
        {/* //////////// assignment end */}
    </div>
   
})}

</Grid>

</Grid>

</div>

    </>
  )
}

export default CourseDetail