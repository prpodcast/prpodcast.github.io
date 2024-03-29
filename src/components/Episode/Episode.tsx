import './episode.css'
import {EpisodeInterface} from './episode.interface'

const Episode = (props: { fields: EpisodeInterface }) => {
  return (
    <div className="episode">
      <div className="no">
        {props.fields.no}
      </div>
      <div className="detail">
        <h2>{props.fields.title}</h2>
        <div>
          <i className="fa fa-calendar"/>
          <span>{props.fields.releaseDate}</span>
          <i className="fas fa-stopwatch"/>
          <span>{props.fields.duration}</span>
          <a href={props.fields.githubAddress} target="_blank" rel="noreferrer"><i className="fab fa-github"/>Github</a>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + props.fields.thumbnail} alt=""/>
        </div>
        <p className="description">{props.fields.description}</p>
      </div>
    </div>
  )
}

export default Episode
