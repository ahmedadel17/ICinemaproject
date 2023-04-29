import Moviecard from '../components/Moviecard'
import ShowingInfo from '../components/ShowingInfo'
import Controltop from '../components/Controltop'

const Boking = () => {
  return (
    <div>
      <Controltop entry='movies_about' left='Movies' right='History'/>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 justify-center xl:flex-row">
          <Moviecard 
            releaseDate={'28/12/2022'}
            starring={'mohamed tharwat'}
            title={'Nabil elgameel Dr tagmeel'}
            img={'https://assets.voxcinemas.com/posters/P_HO00009956.jpg'}
            features={['Comedy', '105min', 'Egyptian', 'Arabic']}
          />

          <ShowingInfo />
        </div>

        <div className="flex flex-col gap-4 justify-center xl:flex-row">
          <Moviecard 
            releaseDate={'28/12/2022'}
            starring={'mohamed tharwat'}
            title={'Nabil elgameel Dr tagmeel'}
            img={'https://assets.voxcinemas.com/posters/P_HO00009956.jpg'}
            features={['Comedy', '105min', 'Egyptian', 'Arabic']}
          />

          <ShowingInfo />
        </div>

        <div className="flex flex-col gap-4 justify-center xl:flex-row">
          <Moviecard 
            releaseDate={'28/12/2022'}
            starring={'mohamed tharwat'}
            title={'Nabil elgameel Dr tagmeel'}
            img={'https://assets.voxcinemas.com/posters/P_HO00009956.jpg'}
            features={['Comedy', '105min', 'Egyptian', 'Arabic']}
          />

          <ShowingInfo />
        </div>
      </div>
    </div>
  )
}

export default Boking