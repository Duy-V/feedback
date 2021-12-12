import { BrowserRouter as Router, Route,   } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from "./pages/AboutPage";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
  
  
  
  return (
    <FeedbackProvider>
       <Router>
      <Header />
      <div className="container">
          
          <Route exact path="/" >
          <FeedbackForm />
<FeedbackStats  />
<FeedbackList   /> 
        </Route>

        <Route path="/about" component={AboutPage } />  
              
        <AboutIconLink/>
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