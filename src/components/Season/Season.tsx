import './season.css'
import Episode from '../Episode/Episode'
import {EpisodeInterface} from '../Episode/episode.interface'
import ep01 from '../../assets/episode-avatar/ep01.jpg'
import ep02 from '../../assets/episode-avatar/ep02.jpg'
import ep03 from '../../assets/episode-avatar/ep03.jpg'
import ep04 from '../../assets/episode-avatar/ep04.jpg'
import ep05 from '../../assets/episode-avatar/ep05.jpg'
import ep06 from '../../assets/episode-avatar/ep06.jpg'

const Season = () => {
  const episodes: EpisodeInterface[] = [
    {
      'thumbnail': ep01,
      'releaseDate': 'August 23, 2020',
      'duration': '35:08',
      'title': 'FL_CHART',
      'description': 'A library to draw fantastic charts in Flutter',
      'audioFile': 'https://archive.org/download/prpodcast-iman-final/prpodcast-iman-final.mp3',
      'githubAddress': 'https://github.com/imaNNeoFighT/fl_chart'
    },
    {
      'thumbnail': ep02,
      'releaseDate': 'October 25, 2020',
      'duration': '25:02',
      'title': 'AWESOME-CORANAVIRUS',
      'description': 'Huge collection of useful projects and resources for COVID-19',
      'audioFile': 'https://archive.org/download/episode2-sorosh-final/episode2-sorosh-final.mp3',
      'githubAddress': 'https://github.com/soroushchehresa/awesome-coronavirus'
    },
    {
      'thumbnail': ep03,
      'releaseDate': 'June 6, 2021',
      'duration': '25:05',
      'title': 'Kateb',
      'description': 'Install and update free Farsi fonts',
      'audioFile': 'https://archive.org/download/final-kiavash-intro/Final_Kiavash_Intro.mp3',
      'githubAddress': 'https://github.com/kiamazi/kateb'
    },
    {
      'thumbnail': ep04,
      'releaseDate': 'June 26, 2021',
      'duration': '27:31',
      'title': 'Kutt',
      'description': 'Free Modern URL Shortener.',
      'audioFile': 'https://archive.org/download/episode4_pouria_final/episode4_pouria_final.mp3',
      'githubAddress': 'https://github.com/thedevs-network/kutt'
    },
    {
      'thumbnail': ep05,
      'releaseDate': 'July 11, 2021',
      'duration': '29:51',
      'title': 'Art',
      'description': '🎨 ASCII art library for Python.',
      'audioFile': 'https://archive.org/download/episode5_sepand_final/episode5_sepand_final.mp3',
      'githubAddress': 'https://github.com/sepandhaghighi/art'
    },
    {
      'thumbnail': ep06,
      'releaseDate': 'August 14, 2021',
      'duration': '25:27',
      'title': 'Icono',
      'description': 'One tag One icon, no font or svg, Pure CSS.',
      'audioFile': 'https://archive.org/download/saeed_episode_6/saeed_episode_6.mp3',
      'githubAddress': 'https://github.com/saeedalipoor/icono'
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
