import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';

const RandomChar = () => {

  const [character, setCharacter] = useState(null);
  const {loading, error, getCharacter, clearError} = useMarvelService();

  useEffect(() => {
    updateChar();
    const timerId = setInterval(updateChar, 60000);

    return () => {
      clearInterval(timerId)
    }
  }, []);

  const onCharacterLoaded = (character) => {
    setCharacter(character);
  }

  const updateChar = () => {
    const minValue = 1011000;
    const maxValue = 1011400;
    clearError();
    const id = Math.floor(Math.random() * (maxValue - minValue) + minValue);
      getCharacter(id)
        .then(onCharacterLoaded)
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spiner = loading ? <Spinner/> : null;
  const content = !(loading || error || !character) ? <View character={character}/> : null;

  return (
    <section className="randomchar">
      <h2 className="visually-hidden">random character for you!</h2>

      {errorMessage}
      {spiner}
      {content}

      <article className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!<br/>
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">
          Or choose another one
        </p>
        <button onClick={updateChar} className="randomchar__try-button button button__main" type="button">
          <div className="inner">try it</div>
        </button>
      </article>
    </section>
  )

}

const View = ({character}) => {
  const {name, description, thumbnails, homepage, wiki} = character;
  let imgStyle = {'objectFit' : 'cover'};
  if (thumbnails === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
    imgStyle = {'objectFit' : 'contain'};
  }

  return (
    <article className="randomchar__block">
      <img className="randomchar__img" width="180" height="180" src={thumbnails} alt={'Random character - ' + name} style={imgStyle}/>
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">
          {description ? description : 'sory! We dont have description for this character'}
        </p>
        <div className="randomchar__links">
          <a className="button button__main" href={homepage}>
            <div className="inner">homepage</div>
          </a>
          <a className="button button__secondary" href={wiki}>
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </article>
  )
}

export default RandomChar;
