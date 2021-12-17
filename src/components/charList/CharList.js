import { Component } from 'react/cjs/react.production.min';

import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {

  startCharactersItemsOffset = 210;

  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: this.startCharactersItemsOffset,
    charEnded: false,
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService.getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError)
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true
    })
  }

  nextCharactersOffset = 9;

  onCharListLoaded = (newCharList) => {

    let ended = false;
    if(newCharList.length < 9) {
      ended = true;
    }

    this.setState(({offset, charList}) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + this.nextCharactersOffset,
      charEnded: ended,
    }))
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  renderItems(arr) {
    const items =  arr.map((item) => {
      let imgStyle = {'objectFit' : 'cover'};
      if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'unset'};
      }

      return (
        <li className="characters__item" key={item.id}
        onClick={() => this.props.onCharacterSelected(item.id)}>
          <img className="characters__image" width="200" height="200" src={item.thumbnails} alt={item.name} style={imgStyle}/>
          <h3 className="characters__name">{item.name}</h3>
        </li>
      )
    });
    return (
      <ul className="characters__list">
        {items}
      </ul>
    )
  }

  render() {

    const {charList, loading, error, newItemLoading, offset, charEnded} = this.state;

    const items = this.renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null;

    return (
      <section className="characters">
        <h2 className="visually-hidden">Characters list!</h2>
        {errorMessage}
        {spinner}
        {content}
        <button className="characters__load-button button button__main" type="button"
          disabled={newItemLoading}
          style={{'display': charEnded ? 'none' : 'block'}}
          onClick={() => this.onRequest(offset)}>
          <div className="inner">load more</div>
        </button>
      </section>
    )
  }
}

export default CharList;
