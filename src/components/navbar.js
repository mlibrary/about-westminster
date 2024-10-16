import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <div className="header-nav-container navbar-dark">    
      <header>
        <div className="container py-2">
          <div className="row">
            <div className="col-md-8">
              <a href="/" className="navbar-brand lora">
                <h1 id="logo" className="sr-only">University of Westminster Press</h1>
                <img aria-labelledby="logo" src="/assets/uwp-logo-c-grey.svg" height="60px" width="auto" className="navbar-brand-logo"/>
              </a>              
            </div>
          </div>
        </div>       
      </header>
      <div className="nav-scroller py-1">
        <div className="container">
          <nav className="nav d-flex justify-content-between collapse">
            <div className="dropdown show">
              <a className="nav-link text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/about">About Us</a>                
                <a className="dropdown-item" href="/governance">UWP Governance</a>
                <a className="dropdown-item" href="/our-supporters">Our Supporters</a>
                <a className="dropdown-item" href="/contact">Contact Us</a> 
                <a className="dropdown-item" href="https://issuu.com/uniwestminsterpress/docs/uwp_booklet_a5_awref_final">Press Brochure</a>
              </div>
            </div>
            <a className="nav-link text-dark" href="https://fulcrum.org/westminster">Books</a>
            <a className="nav-link text-dark" href="/journals/">Journals</a>
            <div className="dropdown show">
              <a className="nav-link text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Publish With Us
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="/publish-with-us">Publishing With UWP</a>
                <a className="dropdown-item" href="/book-proposals">Book Proposals</a>                
                <a className="dropdown-item" href="/journal-proposals">Journal Proposals</a>
                <a className="dropdown-item" href="/research-integrity">Research Integrity</a>
              </div>
            </div>
            <a className="nav-link text-dark" href="/news/">News and Events</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
