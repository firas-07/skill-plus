// This Page includes all the pages to route the necessary pages
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importing the necessary files
import StartPage from './pages/StartPage'
import SignUp from './pages/registration/SignUp'
import Login from './pages/registration/Login'
import SignUpMobile from './pages/registration/SignUpMobile'
import YourDetails from './pages/registration/YourDetails'
import Certifications from './pages/registration/Certifications'
import SocialConnect from './pages/registration/SocialConnect'
import ProgrammingLanguage from './pages/registration/ProgrammingLanguage'
import JavaHome from './pages/Java/JavaHome'
import NETHome from './pages/.NET/NETHome'
import DataHome from './pages/Data Engineering/DataHome'
import JavaCourses from './pages/Java/JavaCourses'
import NETCourses from './pages/.NET/NETCourses'
import DataCourses from './pages/Data Engineering/DataCourses'
import JavaArticles from './pages/Java/JavaArticles'
import NETArticles from './pages/.NET/NETArticles'
import DataArticles from './pages/Data Engineering/DataArticles'
import JavaBatchView from './pages/Batch/JavaBatchView'
import NETBatchView from './pages/Batch/NETBatchView'
import DataBatchView from './pages/Batch/DataBatchView'
import JavaBatch from './pages/Java/JavaBatch'
import NETBatch from './pages/.NET/NETBatch'
import DataEngineeringBatch from './pages/Data Engineering/DataEngineeringBatch'
import Intro from './pages/videos/Java/Intro'
import Java from './pages/videos/Java/Java'
import JavaFullStackCourse from './pages/videos/Java/JavaFullStactCourse'
import Frontend from './pages/videos/Java/Frontend'
import Backend from './pages/videos/Java/Backend'
import Layout1 from './pages/Videos Play/Java/Layout1'
import Layout2 from './pages/Videos Play/Java/Layout2'
import Layout3 from './pages/Videos Play/Java/Layout3'
import Layout4 from './pages/Videos Play/Java/Layout4'
import Layout5 from './pages/Videos Play/Java/Layout5'
import NET1 from './pages/videos/NET/NET1'
import NET2 from './pages/videos/NET/NET2'
import NET3 from './pages/videos/NET/NET3'
import NET4 from './pages/videos/NET/NET4'
import NET5 from './pages/videos/NET/NET5'
import NETLayout1 from './pages/Videos Play/NET/NETLayout1'
import NETLayout2 from './pages/Videos Play/NET/NETLayout2'
import NETLayout3 from './pages/Videos Play/NET/NETLayout3'
import NETLayout4 from './pages/Videos Play/NET/NETLayout4'
import NETLayout5 from './pages/Videos Play/NET/NETLayout5'
import DE1 from './pages/videos/Data Engineering/DE1'
import DE2 from './pages/videos/Data Engineering/DE2'
import DE3 from './pages/videos/Data Engineering/DE3'
import DE4 from './pages/videos/Data Engineering/DE4'
import DE5 from './pages/videos/Data Engineering/DE5'
import DELayout1 from './pages/Videos Play/Data Engineering/DELayout1'
import DELayout2 from './pages/Videos Play/Data Engineering/DELayout2'
import DELayout3 from './pages/Videos Play/Data Engineering/DELayout3'
import DELayout4 from './pages/Videos Play/Data Engineering/DELayout4'
import DELayout5 from './pages/Videos Play/Data Engineering/DELayout5'
import ProctorExam from './pages/Assessment/Java/ProctorExam'
import NEProctorExam from './pages/Assessment/NET/NEProctorExam'
import DEProctorExam from './pages/Assessment/DE/DEProctorExam'
import QuizPreview from './pages/Quiz/Java/QuizPreview'
import QuizInstructions from './pages/Quiz/Java/QuizInstructions'
import QuizSteps from './pages/Quiz/Java/QuizSteps'
import QuizCapture from './pages/Quiz/Java/QuizCapture'
import QuizStart from './pages/Quiz/Java/QuizStart'
import DEQuizPreview from './pages/Quiz/DE/DEQuizPreview'
import DEQuizInstructions from './pages/Quiz/DE/DEQuizInstructions'
import DEQuizSteps from './pages/Quiz/DE/DEQuizSteps'
import DEQuizCapture from './pages/Quiz/DE/DEQuizCapture'
import DEQuizStart from './pages/Quiz/DE/DEQuizStart'
import NETQuizPreview from './pages/Quiz/NET/NETQuizPreview'
import NETQuizInstructions from './pages/Quiz/NET/NETQuizInstructions'
import NETQuizSteps from './pages/Quiz/NET/NETQuizSteps'
import NETQuizCapture from './pages/Quiz/NET/NETQuizCapture'
import NETQuizStart from './pages/Quiz/NET/NETQuizStart'
import FeedBack from './pages/Feedback/FeedBack'
import JavaReport from './pages/Report/JavaReport'
import NETReport from './pages/Report/NETReport'
import DEReport from './pages/Report/DEReport'
import JavaAnalysis from './pages/Analysis/JavaAnalysis'
import PerformanceTrends from './pages/Analysis/PerformanceTrends'
import FeedbackAnalysis from './pages/Analysis/FeedbackAnalysis'
import ComparisonMetrics from './pages/Analysis/ComparisonMetrics'
import SuccessMetrics from './pages/Analysis/SuccessMetrics'
import NETAnalysis from './pages/Analysis/NETAnalysis'
import DEAnalysis from './pages/Analysis/DEAnalysis'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Start Page Route */}
          <Route path='/' element={<StartPage/>}/>

          {/* Registration and Login Routes */}
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signupmobile' element={<SignUpMobile/>}/>
          <Route path='/yourdetails' element={<YourDetails/>}/>
          <Route path='/certifications' element={<Certifications/>}/>
          <Route path='/socialconnect' element={<SocialConnect/>}/>
          <Route path='/programminglanguage' element={<ProgrammingLanguage/>}/>

          {/* Home Page Route */}
          <Route path='/java/home' element={<JavaHome/>} />
          <Route path='/net/home' element={<NETHome/>}/>
          <Route path='/dataengineering/home' element={<DataHome/>}/>

          {/* Courses Page Route */}
          <Route path='/java/courses' element={<JavaCourses/>} />
          <Route path='/net/courses' element={<NETCourses/>}/>
          <Route path='/dataengineering/courses' element={<DataCourses/>}/>

          {/* Articles Page Route */}
          <Route path='/java/resources' element={<JavaArticles/>} />
          <Route path='/net/resources' element={<NETArticles/>}/>
          <Route path='/dataengineering/resources' element={<DataArticles/>}/>

          {/* Batch Page Routes */}
          {/* Java Batch */}
          <Route path='/java/batch' element={<JavaBatchView/>}/>
          <Route path='/java' element={<JavaBatch/>}/>

          {/* .NET Batch */}
          <Route path='/net/batch' element={<NETBatchView/>}/>
          <Route path='/net' element={<NETBatch/>}/>

          {/* Data Engineering Batch */}
          <Route path='/dataengineering/batch' element={<DataBatchView/>}/>
          <Route path='/dataengineering' element={<DataEngineeringBatch/>}/>

          {/* Videos Page Route */}
          {/* Java Videos */}
          <Route path='/java/videos1' element={<Intro/>}/>
          <Route path='/java/videos2' element={<Java/>}/>
          <Route path='/java/videos3' element={<JavaFullStackCourse/>}/>
          <Route path='/java/videos4' element={<Frontend/>}/>
          <Route path='/java/videos5' element={<Backend/>}/>
          <Route path='/java/videosplay1' element={<Layout1/>}/>
          <Route path='/java/videosplay2' element={<Layout2/>}/>
          <Route path='/java/videosplay3' element={<Layout3/>}/>
          <Route path='/java/videosplay4' element={<Layout4/>}/>
          <Route path='/java/videosplay5' element={<Layout5/>}/>

          {/* .NET Videos */}
          <Route path='/net/videos1' element={<NET1/>}/>
          <Route path='/net/videos2' element={<NET2/>}/>
          <Route path='/net/videos3' element={<NET3/>}/>
          <Route path='/net/videos4' element={<NET4/>}/>
          <Route path='/net/videos5' element={<NET5/>}/>
          <Route path='/net/videosplay1' element={<NETLayout1/>}/>
          <Route path='/net/videosplay2' element={<NETLayout2/>}/>
          <Route path='/net/videosplay3' element={<NETLayout3/>}/>
          <Route path='/net/videosplay4' element={<NETLayout4/>}/>
          <Route path='/net/videosplay5' element={<NETLayout5/>}/>

          {/* Data Engineering Videos */}
          <Route path='/dataengineering/videos1' element={<DE1/>}/>
          <Route path='/dataengineering/videos2' element={<DE2/>}/>
          <Route path='/dataengineering/videos3' element={<DE3/>}/>
          <Route path='/dataengineering/videos4' element={<DE4/>}/>
          <Route path='/dataengineering/videos5' element={<DE5/>}/>
          <Route path='/dataengineering/videosplay1' element={<DELayout1/>}/>
          <Route path='/dataengineering/videosplay2' element={<DELayout2/>}/>
          <Route path='/dataengineering/videosplay3' element={<DELayout3/>}/>
          <Route path='/dataengineering/videosplay4' element={<DELayout4/>}/>
          <Route path='/dataengineering/videosplay5' element={<DELayout5/>}/>

          {/* Assessment Page Routes */}
          <Route path='/java/assessment' element={<ProctorExam/>}/>
          <Route path='/net/assessment' element={<NEProctorExam/>}/>
          <Route path='/dataengineering/assessment' element={<DEProctorExam/>}/>

          {/* Quiz Attending Router */}
          {/* Java Quiz */}
          <Route path='java/test' element={<QuizPreview/>}/>
          <Route path='java/test/instruction' element={<QuizInstructions/>}/>
          <Route path='java/test/steps' element={<QuizSteps/>}/>
          <Route path='java/test/capture' element={<QuizCapture/>}/>
          <Route path='java/test/start' element={<QuizStart/>}/>

          {/* .NET Quiz */}
          <Route path='net/test' element={<NETQuizPreview/>}/>
          <Route path='net/test/instruction' element={<NETQuizInstructions/>}/>
          <Route path='net/test/steps' element={<NETQuizSteps/>}/>
          <Route path='net/test/capture' element={<NETQuizCapture/>}/>
          <Route path='net/test/start' element={<NETQuizStart/>}/>

          {/* Data Engineering Quiz */}
          <Route path='dataengineering/test' element={<DEQuizPreview/>}/>
          <Route path='dataengineering/test/instruction' element={<DEQuizInstructions/>}/>
          <Route path='dataengineering/test/steps' element={<DEQuizSteps/>}/>
          <Route path='dataengineering/test/capture' element={<DEQuizCapture/>}/>
          <Route path='dataengineering/test/start' element={<DEQuizStart/>}/>

          {/* Feedback Route */}
          <Route path='/feedback' element={<FeedBack/>}/>

          {/* Report Page Route */}
          <Route path='/java/report' element={<JavaReport/>}/>
          <Route path='/net/report' element={<NETReport/>}/>
          <Route path='/dataengineering/report' element={<DEReport/>}/>

          {/* Analysis Route */}
          <Route path='/java/analysis' element={<JavaAnalysis/>}/>
          <Route path='/net/analysis' element={<NETAnalysis/>}/>
          <Route path='/dataengineering/analysis' element={<DEAnalysis/>}/>
          <Route path='/performancetrends' element={<PerformanceTrends/>}/>
          <Route path='/feedbackanalysis' element={<FeedbackAnalysis/>}/>
          <Route path='/comparisonmetrics' element={<ComparisonMetrics/>}/>
          <Route path='/successmetrics' element={<SuccessMetrics/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App