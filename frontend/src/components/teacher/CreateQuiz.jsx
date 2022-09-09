import {Link }from 'react-router-dom'
import Appbar from '../students/Appbar'
import {Grid,Card,Button,TextareaAutosize} from '@mui/material';
import {VideoCameraFront,Close} from '@mui/icons-material';
import { useState ,useRef ,useEffect} from 'react';
import axios from "axios";
import { useNavigate} from "react-router-dom";

import Sidebar from '../students/Sidebar'

const CreateQuiz = () => {
    const [addMaterial,setAddmaterial]=useState(false)
    const question = useRef();
    const opts1 = useRef();
    const opts2 = useRef();
    const opts3 = useRef();
    const answer = useRef();

    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);
    
    const navigate=useNavigate();

    const SubmitQuiz = async (e) => {
      e.preventDefault();
      const quiz = {
        question: question.current.value,
        opts1: opts1.current.value,
        opts2: opts2.current.value,
        opts3: opts3.current.value,
        answer: answer.current.value
      };
      console.log("quiz",quiz)
      try {
        const res = await axios.post("/quiz", quiz);
        alert("Quiz Successfuly");
          navigate("/createquiz");
      } catch (e) {
        alert(e);
      }

    }

    useEffect(() => {
      axios.get('/quiz')
      .then(response =>{
        console.log("sssssssssss",response.data[0].name)
        setData(response.data)
      
      })
      }, []);

      useEffect(() => {
        axios.get('/quiz/result')
        .then(response =>{
          console.log("aa",response.data[0])
          setResult(response.data)
        
        })
        }, []);
  

   

    const addMateriaShow=()=>{
   if(!addMaterial){
       setAddmaterial(true)
   }else{
       setAddmaterial(false)}
    }
 
    /////////////// create question function
   
   ////////////////// Show Result function
   const [showResult,setshowResult]=useState(false)
   const ResultShow=()=>{
  if(!showResult){
    setshowResult(true)
  }else{
    setshowResult(false)}
   }
  return (
    <>
<div className='courseDetail'>
<Appbar name='teacher' />
<Grid className="courseInnerSection" itme xs={12} md={12}>
<Sidebar name='teacher'/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    <VideoCameraFront className='callIcon'/>

    </div>
    <hr className='courseHr'/>
    {/* //////////// assignment */}
    <div className='courseContent'>
<Button className='addMaterialBtn' onClick={addMateriaShow}>Create Quiz</Button>
<Button className='addMaterialBtn' onClick={ResultShow} >Check Result</Button>

    </div>



    {/* ///////////////////   create quiz hidden Section */}
<div className= {addMaterial?'addMaterialSectionHeroShow':'addMaterialSectionHero'}>
<div className='addMaterialSection'>
          <Card className='joinCourseCard'>
            <div className='topBar'>
              <p> Create Quiz</p>
              <Close className='courseClose' onClick={addMateriaShow} />
            </div>
            <form onSubmit={SubmitQuiz} action="">
            <div className='courseBody'>
              <p className='accessP'>Question:</p>
              <input type="text"  ref={question} name="question" className='courseInput' />
            </div>
            <div className='courseBody'>
            <ol className='CreateQuestion'>
   <li className='optionItem'> <input type="text"  ref={opts1} id="html" name="opts1" /> <span style={{marginLeft:'5px'}}></span></li>
   <li className='optionItem'>  <input type="text"  ref={opts2} id="html" name="opts1" /> <span style={{marginLeft:'5px'}}></span></li>
   <li className='optionItem'>  <input type="text"  ref={opts3} id="html" name="opts2" /> <span style={{marginLeft:'5px'}}></span></li>
   <li className='optionItem'> Answer  <input type="text"  ref={answer} id="html" name="answer" /> <span style={{marginLeft:'5px'}}></span></li>

   </ol>
            </div>
           

            <div className='buttons'>
            
                <Button type='submit' className='joinBtn' >Create</Button>
              
              <Button className='cancelBtn' onClick={addMateriaShow}>Cancel</Button>
            </div>
            </form>
          </Card>
          </div>
          </div>
{/* ///////////////////    create quiz hidden Section  End*/}
{/* hiddent quiz result assignment start */}
<div className={showResult?'QuizResultShow':'QuizResultHide'}>
<div className="QuizReslutTopHeader">

 <h3>Assignment No: <span>1</span> </h3>

<Close className='quizResultIcon' onClick={ResultShow}/>
<hr /></div>
<div className="QuizResultBody">
  <div className="resultLeft">
   <h3>Title : <span id='quizTitle'>Quiz</span></h3>
   <p>

   </p>
  </div>
<hr />
  <div className="resultRight">
    <div className="resultRightTop">
      <h3>Submitted By:</h3>
    </div>
    <hr />
    {result?.map((quiz1,index)=>{
      return<div>
      <ul className='quizResultList'>
        <li className='quizResultItem'>{quiz1[index]}<span> 4/5</span></li>
      
      </ul>
      </div>
    })}
  </div>
</div>

</div>
{/* hiddent submitted assignment End */}
{data?.map((quiz,index)=>{
  return<div>
    <hr style={{width:'95%',margin:'0 auto'}}/>
        <div className='courseContent'>
      <div className="questions">
      <p className='quizQuestion'><span className='questionCount'>2</span>{quiz.question}?
    </p>
      <ol className='questionOptionsList'>
      <li className='optionItem'>  <input type="radio" id="html" name="question2" value="1"/> <span style={{marginLeft:'5px'}}>{quiz.opts1}</span></li>
      <li className='optionItem'>  <input type="radio" id="html" name="question2" value="2"/> <span style={{marginLeft:'5px'}}>{quiz.opts2}</span></li>
      <li className='optionItem'>  <input type="radio" id="html" name="question2" value="3"/> <span style={{marginLeft:'5px'}}>{quiz.opts3}</span></li>
      </ol>
      </div>
    </div>
    </div>
  })}
<hr style={{width:'95%',margin:'0 auto'}}/>
  <button className='submitQuiz'>Submit</button>
    {/* //////////// assignment end */}
   

</Grid>

</Grid>

</div>

    </>
  )
}

export default CreateQuiz