import Moviecard from '../components/Moviecard'
import ShowingInfo from '../components/ShowingInfo'

const Boking = () => {
  return (
    <div>
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