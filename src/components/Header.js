import React, { Component } from 'react'
class Header extends Component {
  render() {
    return (
      <div>
        <div class='sticky-top'>
          <header class='d-flex jc-between'>
            <div class='logo d-flex jc-center ai-center ml-5'>
              <img
                src='https://www.elsevier.com/__data/assets/file/0003/278661/ELS_NS_Logo_2C_RGB.svg'
                class='ns-tree hide-for-small'
                alt='elsevier non solus tree'
              />
            </div>
            <div class='menubaricons d-flex jc-center ai-center mr-5'>
              <a class='searchicon' href='#'>
                <span class='search-icon'>
                  <img
                    src='//cdn.elsevier.io/verona/includes/svg/icon-magnify-glass-sized.svg'
                    alt='Search'
                  />
                </span>
                <span class='search'>Search</span>
              </a>
              <a class='carticon'>
                <img src="https://cdn.elsevier.io/verona/includes/svg/icon-shopping-cart-sized.svg" />
                <span class='cart'>Cart</span>
              </a>
              <a class='menuicon'>
                <span class='menuicon'>
                  <img
                    src='https://cdn.elsevier.io/verona/includes/svg/icon-menu-hamburger-sized.svg'
                    alt='Menu'
                  />
                </span>
                <span class='menu'>Menu</span>
              </a>
            </div>
          </header>
          <div class='topmenu'>
            <div class='container'>
              <ul id='topmenu' class='topmenu d-flex'>
                <li class="home">
                  <a href='#'>Home</a>
                </li>
                <li class="events">
                  <a href='#'>&nbsp;&nbsp;>&nbsp;&nbsp;Events</a>
                </li>
                <li class="conferences">
                  <a href='#'>&nbsp;&nbsp;>&nbsp;&nbsp;Conferences</a>
                </li>
                <li class="international">
                  <a href='#'>&nbsp;&nbsp;>&nbsp;&nbsp;International Brain Stimulation Conference </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='banner'>
          <div class='container'>
            <img
              src='https://www.elsevier.com/__data/assets/image/0013/502132/Brain-Stimulation-Masthead-1000x130-ver1.jpg'
              alt='3rd International Brain Stimulation Conference '
            />
          </div>
        </div>
        <div class='bottommenuheading'>
          <ul class='bottommenu d-flex'>
            <div class="container">
              <div class="row">
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#'>Programme</a>
                </li>
                <li>
                  <a href='#'>Exhibitors &<br /> sponsors</a>
                </li>
                <li>
                  <a href='#'>Location</a>
                </li>
                <li>
                  <a href='#' class="register">Register&nbsp;&nbsp;></a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}
export default Header
