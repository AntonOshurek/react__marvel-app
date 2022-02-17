import { useParams, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// import useMarvelService from '../../services/MarvelService';
// import Spinner from '../spiner/spiner';
// import ErrorMessage from '../errorMessage/ErrorMessage';
// import AppBanner from '../appBanner/AppBanner';

import './singleComicPage.scss';

const SingleComicPage = ({data}) => {
  // const {error, loading, getComic, clearError} = useMarvelService();
  // const { comicId } = useParams();

  // const [comic, setComic] = useState(null);

  // useEffect(() => {
  //   updateComic()
  // }, [comicId]);

  // const updateComic = () => {
  //   clearError();
  //   getComic(comicId)
  //     .then(onComicLoaded)
  // }

  // const onComicLoaded = (comic) => {
  //   setComic(comic)
  // }

  // const errorMessage = error ? <ErrorMessage/> : null;
  // const spiner = loading ? <Spinner/> : null;
  // const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

  // return (
  //   <article className='single-comic'>
  //     <h2 className='visually-hidden'>comic - {comic ? comic.title : null}</h2>
  //     <AppBanner/>
  //     {errorMessage}
  //     {spiner}
  //     {content}
  //   </article>
  // )

  const {title, description, pageCount, thumbnail, language, price} = data;

  return(
    <div className="single-comic__wrap">
      <img className="single-comic__img"
        width={'250'} height={'250'}
        src={thumbnail} alt={title} />
      <div className="single-comic__info">
        <h3 className="single-comic__name">{title}</h3>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">{language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link className="single-comic__back" to="/comics">Back to all</Link>
    </div>
  );
}

// const View = ({comic}) => {
//   const {title, description, pageCount, thumbnail, language, price} = comic;

//   return(
//     <div className="single-comic__wrap">
//       <img className="single-comic__img"
//         width={'250'} height={'250'}
//         src={thumbnail} alt={title} />
//       <div className="single-comic__info">
//         <h3 className="single-comic__name">{title}</h3>
//         <p className="single-comic__descr">{description}</p>
//         <p className="single-comic__descr">{pageCount}</p>
//         <p className="single-comic__descr">{language}</p>
//         <div className="single-comic__price">{price}</div>
//       </div>
//       <Link className="single-comic__back" to="/comics">Back to all</Link>
//     </div>
//   );
// }

export default SingleComicPage;
