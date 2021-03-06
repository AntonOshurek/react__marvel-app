import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {

  const startCharactersItemsOffset = 210;

  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(startCharactersItemsOffset);
  const [charEnded, setCharEnded] = useState(false);

  const {loading, error, getAllCharacters} = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true)
    getAllCharacters(offset)
      .then(onCharListLoaded)
  }

  const nextCharactersOffset = 9;

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if(newCharList.length < 9) {
      ended = true;
    }

    setCharList(charList => [...charList, ...newCharList]);
    setNewItemLoading(newItemLoading => false);
    setOffset(offset => offset + nextCharactersOffset);
    setCharEnded(charEnded => ended);
  }

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
    itemRefs.current[id].classList.add('char__item_selected');
    itemRefs.current[id].focus();
  }

  function renderItems(arr) {
    const items =  arr.map((item, i) => {
      let imgStyle = {'objectFit' : 'cover'};
      if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'unset'};
      }

      return (
        <CSSTransition key={item.id} timeout={500} classNames="characters__item">
          <li className="characters__item"
            key={item.id}
            onClick={() => {
              props.onCharacterSelected(item.id)
              focusOnItem(i);
            }}
            onKeyPress={(e) => {
              if (e.key === ' ' || e.key === "Enter") {
                props.onCharacterSelected(item.id);
                focusOnItem(i);
              }
            }}
            tabIndex={0}
            ref={el => itemRefs.current[i] = el}>
          <img className="characters__image" width="200" height="200" src={item.thumbnails} alt={item.name} style={imgStyle}/>
          <h3 className="characters__name">{item.name}</h3>
        </li>
        </CSSTransition>
      )
    });
    return (
      <ul className="characters__list">
        <TransitionGroup component={null}>
          {items}
        </TransitionGroup>
      </ul>
    )
  }

  const items = renderItems(charList);

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading && !newItemLoading ? <Spinner/> : null;

  return (
    <section className="characters">
      <h2 className="visually-hidden">Characters list!</h2>
      {errorMessage}
      {spinner}
      {items}
      <button className="characters__load-button button button__main" type="button"
        disabled={newItemLoading}
        style={{'display': charEnded ? 'none' : 'block'}}
        onClick={() => onRequest(offset)}>
        <div className="inner">load more</div>
      </button>
    </section>
  )

}

CharList.propTypes = {
  onCharacterSelected: PropTypes.func.isRequired,
}

export default CharList;
