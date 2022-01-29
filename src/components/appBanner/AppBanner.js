import './appBanner.scss';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

const AppBanner = () => {
  return (
    <div className="banner">
      <img className='banner__img'
        width={'100px'} height={'120px'}
        src={avengers} alt="Avengers"/>
      <div className="banner__text">
          New comics every week!<br/>
          Stay tuned!
      </div>
      <img className='banner__img'
        width={'100px'} height={'120px'}
        src={avengersLogo} alt="Avengers logo"/>
    </div>
  )
}

export default AppBanner;
