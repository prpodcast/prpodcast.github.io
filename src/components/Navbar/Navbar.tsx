import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">PRPodcast</h1>
        <nav>
          <ul>
            <li><a href="https://prpodcast.ir">Home</a></li>
            <li><a href="https://github.com/prpodcast/prpodcast.github.io" target="_blank">Github</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
