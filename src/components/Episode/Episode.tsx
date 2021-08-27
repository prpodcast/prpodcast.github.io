import './episode.css'
import {EpisodeInterface} from './episode.interface'

const Episode = (props: {fields: EpisodeInterface}) => {
  return (
    <div className="container grid">
      <img src={props.fields.thumbnail} alt=""/>
      <div className="ep-detail">
        <i className="fa fa-calendar"/>{props.fields.releaseDate}
        <i className="fas fa-stopwatch"/>{props.fields.duration}
        <a href={props.fields.githubAddress} target="_blank" ><i className="fab fa-github" />Repository</a>
        <h2 className="ep-title">{props.fields.title}</h2>
        <p className="ep-desc">{props.fields.description}</p>
        <div className="container-player">
          <div className="podcast__meta">
            <audio controls style={{width: '100%'}}>
              <source src={props.fields.audioFile}/>
            </audio>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode
