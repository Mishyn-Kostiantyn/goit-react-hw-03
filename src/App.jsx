import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification';
function App() {
  const STORAGE_KEY = 'feedbackData';
  const initialFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  

 const [guestOpinion,setguestOpinion]=useState(initialFeedbackData);
  const updateFeedback = (feedbackType) => {
    setguestOpinion({ ...guestOpinion, [feedbackType]: guestOpinion[feedbackType] + 1 });
  };
  const totalFeedback = guestOpinion.good + guestOpinion.bad + guestOpinion.neutral;
  const percentOfPositiveFeedback = Math.round(((guestOpinion.good + guestOpinion.neutral) / totalFeedback) * 100);
  const handleResetButtonClick = () => {
    setguestOpinion({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  };
  useEffect(() => {localStorage.setItem(STORAGE_KEY, JSON.stringify(guestOpinion)) });
  return (
    <>
     
      <h1>Vite + React</h1>
     
      <h2> Модуль2. Віджет відгуків</h2> 
       <div className='cafePlace'>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedbackNumber={totalFeedback} onResetButtonClick={handleResetButtonClick} />
      {totalFeedback === 0 ? <Notification /> : <Feedback guestOpinion={guestOpinion} total={totalFeedback} positive={percentOfPositiveFeedback} />}
      </div>
    </>
  )
}

export default App
