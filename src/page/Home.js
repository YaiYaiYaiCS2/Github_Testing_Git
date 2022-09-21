import React from 'react'
import Menubar from './components/Menubar.js'
import Footerpage from './components/Footerpage.js'

function Home() {
  return (
    <div>
      <Menubar />
        <div>
            <h1>
                Welcome to website
            </h1>
        </div>
        <Footerpage />
    </div>

  )
}

export default Home