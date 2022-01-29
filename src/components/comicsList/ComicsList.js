import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const ComicsList = () => {

  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setnewItemLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [comicsEnded, setComicsEnded] = useState(false);

  const {loading, error, getAllComics} = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, [])

  const onRequest = (offset, initial) => {
    initial ? setnewItemLoading(false) : setnewItemLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
  }

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 8) {
      ended = true;
    }
    setComicsList([...comicsList, ...newComicsList]);
    setnewItemLoading(false);
    setOffset(offset + 8);
    setComicsEnded(ended);
  }

  function renderItems (arr) {
    const items = arr.map((item, i) => {
      return (
        <li className="comics__item" key={i}>
          <Link className='comics__link' to={`/comics/${item.id}`}>
            <img className='comics__img'
              width={'250'} height={'400'}
              src={item.thumbnail} alt={item.title}/>
            <div className="comics__title">{item.title}</div>
            <div className="comics__price">{item.price}</div>
          </Link>
        </li>
      )
    })

    return (
      <ul className="comics__list">
        {items}
      </ul>
    )
  }

  const items = renderItems(comicsList);

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading && !newItemLoading ? <Spinner/> : null;

  return (
    <div className="comics">
        {errorMessage}
        {spinner}
        {items}
        <button
          disabled={newItemLoading}
          style={{'display' : comicsEnded ? 'none' : 'block'}}
          className="comics__button button button__main button__long"
          onClick={() => onRequest(offset)}>
          <div className="inner">load more</div>
        </button>
    </div>
  )
}

export default ComicsList;
