import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import React from 'react'

function MainPages() {
  return (
    <main
      className="homePage bg-neutral-300 h-screen 
                  mx-auto text-center
                "
    >
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  )
}

export default MainPages
