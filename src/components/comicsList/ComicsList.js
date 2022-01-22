import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';

const ComicsList = () => {
  return (
    <div className="comics">
      <ul className="comics__list">
        <li className="comics__item">
          <a className='comics__link' href="#">
            <img className='comics__img' src={uw} alt="ultimate war"/>
            <div className="comics__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="comics__price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img className='comics__img' src={xMen} alt="x-men"/>
            <div className="comics__title">X-Men: Days of Future Past</div>
            <div className="comics__price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img className='comics__img' src={uw} alt="ultimate war"/>
            <div className="comics__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="comics__price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img className='comics__img' src={xMen} alt="x-men"/>
            <div className="comics__title">X-Men: Days of Future Past</div>
            <div className="comics__price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img className='comics__img' src={uw} alt="ultimate war"/>
            <div className="comics__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="comics__price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img className='comics__img' src={xMen} alt="x-men"/>
            <div className="comics__title">X-Men: Days of Future Past</div>
            <div className="comics__price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img className='comics__img' src={uw} alt="ultimate war"/>
            <div className="comics__title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="comics__price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img className='comics__img' src={xMen} alt="x-men"/>
            <div className="comics__title">X-Men: Days of Future Past</div>
            <div className="comics__price">NOT AVAILABLE</div>
          </a>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  )
}

export default ComicsList;
