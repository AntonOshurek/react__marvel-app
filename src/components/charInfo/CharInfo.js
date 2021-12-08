import './charInfo.scss';
import thor from '../../resources/img/thor.jpeg';

const CharInfo = () => {
  return (
    <article className="character-info">
      <div className="character-info__basics">
        <img className="character-info__image" width="150" height="150" src={thor} alt="abyss"/>
        <div className="character-info__main">
          <h2 className="character-info__name">thor</h2>
          <a className="button button__main" href="#">
            <div className="inner">homepage</div>
          </a>
          <a className="button button__secondary" href="#">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
      <p className="character-info__description">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
      </p>
      <p className="character-info__comics">Comics:</p>
      <ul className="character-info__comics-list">
        <li className="character-info__comics-item">
          <p>All-Winners Squad: Band of Heroes (2011) #3</p>
        </li>
        <li className="character-info__comics-item">
          <p>Alpha Flight (1983) #50</p>
        </li>
        <li className="character-info__comics-item">
          <p>Amazing Spider-Man (1999) #503</p>
        </li>
        <li className="character-info__comics-item">
          <p>Amazing Spider-Man (1999) #504</p>
        </li>
        <li className="character-info__comics-item">
          <p>AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</p>
        </li>
        <li className="character-info__comics-item">
          <p>Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</p>
        </li>
        <li className="character-info__comics-item">
          <p>Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</p>
        </li>
        <li className="character-info__comics-item">
          <p>Vengeance (2011) #4</p>
        </li>
        <li className="character-info__comics-item">
          <p>Avengers (1963) #1</p>
        </li>
        <li className="character-info__comics-item">
          <p>Avengers (1996) #1</p>
        </li>
      </ul>
    </article>
  )
}

export default CharInfo;
