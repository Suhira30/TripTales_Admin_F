import React from 'react'
import Footer from '../Component/footer';
import Sidebar from '../Component/Sidebar';
import Topbar from "../Component/Topbar";

function Chat () {
  return (
  <>
  <div>
    <Sidebar>
    <div>
        <Topbar/>
      </div>
    <div>
    < Footer/>
    </div>
    </Sidebar>
  </div>
    

  </>
  )
}
export default Chat;
