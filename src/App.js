
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from './Pages/Home';
import AllPost from './Pages/AllPost';
import ReviewReport from './Pages/ReviewReport';
import Chat from'./Pages/Chat';
import LogOut from './Pages/LogOut';
import IndividualBlog from './Pages/individualBlog';
function App() {
  return (
  <>
  <BrowserRouter>
        <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/dashboard"element={<Home/>} />
        <Route path="/all-post"element={<AllPost/>} />
        <Route path="/reviews-report"element={<ReviewReport/>} />
        <Route path="/chat"element={<Chat/>} />
        <Route path="/logout"element={<LogOut/>} />
        <Route path="/eachpost"element={<IndividualBlog/>} />

        </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
