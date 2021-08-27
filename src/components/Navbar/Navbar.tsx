import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">PRPodcast</h1>
        <nav>
          <ul>
            <li><a href="https://prpodcast.ir">Home</a></li>
            {/*<li><a href="https://prpodcast.ir/">Blog</a></li>
            <li><a href="#">Hosts</a></li>*/}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
