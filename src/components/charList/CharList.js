import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';

const CharList = () => {
  return (
    <section className="characters">
      <h2 className="visually-hidden">Characters list!</h2>
      <ul className="characters__list">
        <li className="characters__item">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
        <li className="characters__item characters__item--selected">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
        <li className="characters__item">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
        <li className="characters__item">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
        <li className="characters__item">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
        <li className="characters__item">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
        <li className="characters__item">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
        <li className="characters__item">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
        <li className="characters__item">
          <img className="characters__image" width="200" height="200" src={abyss} alt="abyss"/>
          <h3 className="characters__name">Abyss</h3>
        </li>
      </ul>
      <button className="characters__load-button button button__main" type="button">
        <div className="inner">load more</div>
      </button>
    </section>
  )
}

export default CharList;
