import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ambiel.Art</a>
   <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://legendary-disco-pjqqgxw49qq3j6g-3000.app.github.dev/">Home</a>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="https://ko-fi.com/ambiel">ko-fi</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Social Media
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://bsky.app/profile/hopeless-lynx.bsky.social">BlueSky</a></li>
            <li><a class="dropdown-item" href="https://cara.app/hopelesslynx">cara</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


export default Navbar