import { AppBar, Toolbar, Grid, InputBase } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import StudentDashboard from "./components/students/StudentDashboard";
import Course from "./components/students/Course";
import RegisterCourse from "./components/students/RegisterCourse";
import Assignment from "./components/students/Assignment";
import Material from "./components/students/Material";
import Quiz from "./components/students/Quiz";
import Attendence from "./components/students/Attendence";
import Grade from "./components/students/Grade";
import StudentRegistration from "./components/students/StudentRegistration";
import TeacherRegister from "./components/teacher/TeacherRegister";
import TeacherHome from "./components/teacher/TeacherHome";

import Tmaterial from './components/teacher/Tmaterial'
import UploadAssignment from "./components/teacher/UploadAssignment";
import CreateQuiz from "./components/teacher/CreateQuiz";
import ClassAttendence from "./components/teacher/ClassAttendence";
import Gradding from "./components/teacher/Gradding";
import Protected from "./Protected";


function App() {
  // const data=localStorage.getItem('user');
  // let ele=JSON.parse(data)
  // ele=ele.data;
  // if(ele){console.log(ele.username)}

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* {!localStorage.getItem('user')?<> */}
        <Routes>
       
          <Route 
          path="/teacherregister"
          element={
         <Protected Cmp={TeacherRegister} name='teacher'/>
                   }
/>
        </Routes>
         
       <Routes>
          <Route path="/studentregister"  element={<StudentRegistration category='student'/>} />

        </Routes> 
       <Routes>
          <Route path="/slogin" element={<Login name='Student'/>} />
        </Routes>
       <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/tlogin" element={<Login name='Teacher' />} />
        </Routes>
        {/* </>:<> */}

        <Routes>
          <Route path="/studentdashboard" element={<StudentDashboard />} />
        </Routes>
        <Routes>
          <Route path="/courses" element={<Course/>} />
        </Routes>
        <Routes>
          <Route path="/registercourse" element={<RegisterCourse/>} />
        </Routes>
        <Routes>
          <Route path="/assignment" element={<Assignment/>} />
        </Routes>
        <Routes>
          <Route path="/material" element={<Material/>} />
        </Routes>
        <Routes>
          <Route path="/quiz" element={<Quiz/>} />
        </Routes>
        <Routes>
          <Route path="/attendence" element={<Attendence/>} />
        </Routes>
        <Routes>
          <Route path="/grade" element={<Grade/>} />
        </Routes>
        {/* ////////////////////////////////////////////  Teacher Routes */}
        <Routes>
          <Route path="/teacherhome" element={<TeacherHome name='Teacher' />} />
        </Routes>
        <Routes>
          <Route path="/tcourses" element={<Course name='Teacher'/>} />
        </Routes>
        <Routes>
          <Route path="/tmaterial" element={<Tmaterial/>} />
        </Routes>
        <Routes>
          <Route path="/uploadassignment" element={<UploadAssignment/>} />
        </Routes>
        <Routes>
          <Route path="/createquiz" element={<CreateQuiz/>} />
        </Routes>
        <Routes>
          <Route path="/tattendence" element={<ClassAttendence/>} />
        </Routes>
        <Routes>
          <Route path="/gradding" element={<Gradding/>} />
        </Routes>
        
        
        {/* </>} */}
       

      
       
      </BrowserRouter>
    </div>
  );
}

export default App;
