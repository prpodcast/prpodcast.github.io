import './showcase.css'

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Open Source Stories</h1>
          <p>Everyone has their own story.
            Every episode tells a story and shares an experience to inspire you to join the open-source community.
          </p>
          <div className="showcase-badge">
            <a href="https://open.spotify.com/show/1WePHfSeRfC3hO1AKR6dQZ">
              <img alt="Listen on Spotify" src={process.env.PUBLIC_URL + "badges/spotify-badge.svg"} />
            </a>
            <a href="https://podcasts.apple.com/us/podcast/pr-podcast/id1624505714">
              <img alt="Listen on Apple" src={process.env.PUBLIC_URL + "badges/apple-badge.svg"} />
            </a>
            <a href="https://castbox.fm/channel/id4948220?country=us">
              <img alt="Listen on Castbox" src={process.env.PUBLIC_URL + "badges/castbox-badge.svg"} />
            </a>
          </div>
        </div>
        <div className="showcase-form card">
          <h2>Participate</h2>
          <form>
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required/>
            </div>
            <div className="form-control">
              <input type="text" name="repo" placeholder="Repo Name" required/>
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="Email" required/>
            </div>
            <input type="submit" className="btn btn-primary" value="Send"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Showcase
