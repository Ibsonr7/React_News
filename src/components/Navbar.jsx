import React from 'react'

export const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggles navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory('technology')}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory('business')}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory('health')}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory('sports')}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory('entertainment')}>Entertainment</div>
        </li>
      </ul>
    </div>
  </nav>
  )
}
