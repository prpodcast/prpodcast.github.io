import './episode.css'
import {EpisodeInterface} from './episode.interface'

const Episode = (props: { fields: EpisodeInterface }) => {
  return (
      <div className="episode">
        <h2>{props.fields.title}</h2>
        <div>
          <i className="fa fa-calendar"/>
          <span>{props.fields.releaseDate}</span>
          <i className="fas fa-stopwatch"/>
          <span>{props.fields.duration}</span>
          <a href={props.fields.githubAddress} target="_blank" rel="noreferrer"><i className="fab fa-github"/>Repository</a>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + props.fields.thumbnail} alt=""/>
        </div>
        <p className="description">{props.fields.description}</p>
      </div>
  )
}

export default Episode
