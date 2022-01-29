import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
  const [character, setCharacter] = useState(null);
  const {error, loading, getCharacter, clearError} = useMarvelService();

  useEffect(() => {
    updateCharacter()
  }, [props.charId]);

  const updateCharacter = () => {
    const {charId} = props;
    if(!charId) {
      return;
    }
    clearError();
    getCharacter(charId)
      .then(onCharacterLoaded)
  }

  const onCharacterLoaded = (character) => {
    setCharacter(character);
  }

  const skeleton = character || loading || error ? null : <Skeleton/>;
  const errorMessage = error ? <ErrorMessage/> : null;
  const spiner = loading ? <Spinner/> : null;
  const content = !(loading || error || !character) ? <View character={character}/> : null;

  return (
    <article className='character-info'>
      {skeleton}
      {errorMessage}
      {spiner}
      {content}
    </article>
  )
}

const View = ({character}) => {

  const {name, description, thumbnails, homepage, wiki, comics} = character;

  let imgStyle = {'objectFit' : 'cover'};
  if (thumbnails === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
    imgStyle = {'objectFit' : 'contain'};
  }


  const [showComicsList, setShowComicsList] = useState(false);
  const showComicList = () => {
    setShowComicsList(!showComicsList);
  }

  return(
    <>
      <div className="character-info__basics">
        <img className="character-info__image"
          width="150" height="150"
          src={thumbnails} alt={name}
          style={imgStyle}/>
        <div className="character-info__main">
          <h2 className="character-info__name">{name}</h2>
          <a className="button button__main" href={homepage}>
            <div className="inner">homepage</div>
          </a>
          <a className="button button__secondary" href={wiki}>
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
      <p className="character-info__description">
       {description}
      </p>
      <p className='character-info__comics'>Comics:</p>
      <ul className={showComicsList ? 'character-info__comics-list character-info__comics-list--show-comics' : 'character-info__comics-list'}>
        {comics.length > 0 ? null : 'There is no comics with this character'}
        {
          comics.map((item, id) => {
            // eslint-disable-next-line array-callback-return
            if (id > 9) return;
            return(
              <li key={id} className="character-info__comics-item">
                <p>{item.name}</p>
              </li>
            )
          })
        }
      </ul>
      <button className='character-info__show-comics-btn button button__secondary' onClick={showComicList}>
        <div className="inner">show more</div>
      </button>
    </>
  )
}

CharInfo.propTypes = {
  charId: PropTypes.number,
}

export default CharInfo;
