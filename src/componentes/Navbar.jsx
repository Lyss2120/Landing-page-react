import React from 'react'

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-3 fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{props.navbrand}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent">
          <ul class="navbar-nav me-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">{props.navitem1}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{props.navitem2}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">{props.navitem3}</a>
            </li>
            <li class="nav-item">
            <a class="nav-link">{props.navitem4}</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar