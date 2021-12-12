import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from "./pages/AboutPage";
import {FeedbackProvider} from "./context/FeedbackContext";
import Post from "./components/Post"
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <FeedbackProvider>
        <Router>
      <Header />
      <div className="container">
          <Routes>
          <Route exact path="/" element={
              <>
              <FeedbackForm/>
              <FeedbackStats/>
              <FeedbackList/>
              </>
          }>
         
        </Route>

        <Route path="/about" element={<AboutPage />} />  
        <Route path="/post/*" element={<Post />} />  
              </Routes> 
              
       <AboutIconLink /> 
      </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
///??? xem lai ci uuidv4
// version mays em có bị hư hay không ma thỉnh thoảng khi cài thư viện mới thì nó lại hiện "npm audit fix"
{/* <FeedbackForm handleAdd={addFeedback} />
<FeedbackStats feedback={feedback} />
<FeedbackList feedback={feedback} handleDelete={deleteFeedback} /> */}
{/*----------Đây là cách viết của rote version 6*/}
//<Router>
//       <Header />
//       <div className="container">
//           <Routes>
//           <Route exact path="/" element={
//               <>
//               <FeedbackForm/>
//               <FeedbackStats/>
//               <FeedbackList/>
//               </>
//           }>
         
//         </Route>

//         <Route path="/about" element={<AboutPage />} />  
//               </Routes> 
        
//       </div>
//     </Router>
{/*
cách viết Router V5
<Router>
      <Header />
      <div className="container">
          
          <Route exact path="/" >
          <FeedbackForm handleAdd={addFeedback} />
<FeedbackStats feedback={feedback} />
<FeedbackList feedback={feedback} handleDelete={deleteFeedback} /> 
        </Route>

        <Route path="/about" component={AboutPage } />  
              
        <AboutIconLink/>
      </div>
    </Router>

*/}