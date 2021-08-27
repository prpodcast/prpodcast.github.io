import './season.css'
import Episode from '../Episode/Episode'
import {EpisodeInterface} from '../Episode/episode.interface'

const Season = () => {
  const episodes: EpisodeInterface[] = [
    {
      'thumbnail': 'https://i.ibb.co/nPw6nHr/prpodcast-logo-512.png',
      'releaseDate': 'August 23, 2020',
      'duration': '35:08',
      'title': 'FL_CHART',
      'description': 'A library to draw fantastic charts in Flutter',
      'audioFile': 'https://t.me/prpodcast/8',
      'githubAddress': 'https://github.com/imaNNeoFighT/fl_chart'
    },
    {
      'thumbnail': 'https://i.ibb.co/nPw6nHr/prpodcast-logo-512.png',
      'releaseDate': 'October 25, 2020',
      'duration': '25:02',
      'title': 'AWESOME-CORANAVIRUS',
      'description': 'Huge collection of useful projects and resources for COVID-19',
      'audioFile': 'https://t.me/prpodcast/11',
      'githubAddress': 'https://github.com/soroushchehresa/awesome-coronavirus'
    }
  ]

  return (
    <section className="season">
      {
        episodes.map(episode => {
          return (<Episode fields={episode}/>)
        })
      }
    </section>
  )
}

export default Season
