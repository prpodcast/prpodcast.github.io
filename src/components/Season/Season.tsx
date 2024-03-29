import './season.css'
import Episode from '../Episode/Episode'
import {EpisodeInterface} from '../Episode/episode.interface'


const Season = () => {
  const episodes: EpisodeInterface[] = [
    {
      'no': 7,
      'thumbnail': 'https://opengraph.githubassets.com/246010f3fffaedcac0b383eb7b6479cdfa3e5569c9cbedb4f78a1905792719b3/theatre-js/theatre',
      'releaseDate': 'May 14, 2022',
      'duration': '50:00',
      'title': 'Theatre.js',
      'description': 'An animation library for high-fidelity motion graphics.',
      'audioFile': '',
      'githubAddress': 'https://github.com/theatre-js/theatre'
    },
    {
      'no': 6,
      'thumbnail': 'https://opengraph.githubassets.com/c6e742e270def163a1a0daa3ddbc8bb80f12c903de0eac7f05b9ef810bc66efb/saeedalipoor/icono',
      'releaseDate': 'Aug 14, 2021',
      'duration': '25:27',
      'title': 'Icono',
      'description': 'One tag One icon, no font or svg, Pure CSS.',
      'audioFile': 'https://archive.org/download/saeed_episode_6/saeed_episode_6.mp3',
      'githubAddress': 'https://github.com/saeedalipoor/icono'
    },
    {
      'no': 5,
      'thumbnail': 'https://repository-images.githubusercontent.com/105757332/fc758200-add9-11eb-802d-668e04e31ce3',
      'releaseDate': 'Jul 11, 2021',
      'duration': '29:51',
      'title': 'Art',
      'description': '🎨 ASCII art library for Python.',
      'audioFile': 'https://archive.org/download/episode5_sepand_final/episode5_sepand_final.mp3',
      'githubAddress': 'https://github.com/sepandhaghighi/art'
    },
    {
      'no': 4,
      'thumbnail': 'https://repository-images.githubusercontent.com/121380371/1cb62100-865d-11ea-8f7d-911fef0cc5d5',
      'releaseDate': 'Jun 26, 2021',
      'duration': '27:31',
      'title': 'Kutt',
      'description': 'Free Modern URL Shortener.',
      'audioFile': 'https://archive.org/download/episode4_pouria_final/episode4_pouria_final.mp3',
      'githubAddress': 'https://github.com/thedevs-network/kutt'
    },
    {
      'no': 3,
      'thumbnail': 'https://opengraph.githubassets.com/dea9dabc4bccc278e43747ed963fd4d7d564aec36a4303fd2f1331d083815458/kiamazi/kateb',
      'releaseDate': 'Jun 6, 2021',
      'duration': '25:05',
      'title': 'Kateb',
      'description': 'Install and update free Farsi fonts',
      'audioFile': 'https://archive.org/download/final-kiavash-intro/Final_Kiavash_Intro.mp3',
      'githubAddress': 'https://github.com/kiamazi/kateb'
    },
    {
      'no': 2,
      'thumbnail': 'https://repository-images.githubusercontent.com/246570646/11b19d00-7a70-11ea-890d-17e94e81bca2',
      'releaseDate': 'Oct 25, 2020',
      'duration': '25:02',
      'title': 'AWESOME-CORANAVIRUS',
      'description': 'Huge collection of useful projects and resources for COVID-19',
      'audioFile': 'https://archive.org/download/episode2-sorosh-final/episode2-sorosh-final.mp3',
      'githubAddress': 'https://github.com/soroushchehresa/awesome-coronavirus'
    },
    {
      'no': 1,
      'thumbnail': 'https://repository-images.githubusercontent.com/186255460/aa46f600-86c4-11e9-8734-bfa4dbf820bd',
      'releaseDate': 'Aug 23, 2020',
      'duration': '35:08',
      'title': 'FL_CHART',
      'description': 'A library to draw fantastic charts in Flutter',
      'audioFile': 'https://archive.org/download/prpodcast-iman-final/prpodcast-iman-final.mp3',
      'githubAddress': 'https://github.com/imaNNeoFighT/fl_chart'
    },
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
