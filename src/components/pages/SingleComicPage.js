import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';

import './singleComicPage.scss';

const SingleComicPage = () => {
  const {error, loading, getComic, clearError} = useMarvelService();
  const { comicId } = useParams();

  const [comic, setComic] = useState(null);

  useEffect(() => {
    updateComic()
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId)
      .then(onComicLoaded)
  }

  const onComicLoaded = (comic) => {
    setComic(comic)
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spiner = loading ? <Spinner/> : null;
  const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

  return (
    <>
      <AppBanner/>
      {errorMessage}
      {spiner}
      {content}
    </>
  )
}



const View = ({comic}) => {
  const {title, description, pageCount, thumbnail, language, price} = comic;

  return(
    <div className="single-comic">
    <img src={thumbnail} alt={title} className="single-comic__img"/>
    <div className="single-comic__info">
      <h2 className="single-comic__name">{title}</h2>
      <p className="single-comic__descr">{description}</p>
      <p className="single-comic__descr">{pageCount}</p>
      <p className="single-comic__descr">{language}</p>
      <div className="single-comic__price">{price}</div>
    </div>
    <Link className="single-comic__back" to="/comics">Back to all</Link>
  </div>
  );
}

export default SingleComicPage;
