import { Component } from 'react/cjs/react.production.min';

import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {

  state = {
    charList: [],
    loading: true,
    error: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService.getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.onError)
  }

  onCharListLoaded = (charList) => {
    this.setState({
      charList,
      loading: false
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  renderItems(arr) {
    console.log(arr)
    const items =  arr.map((item) => {
      let imgStyle = {'objectFit' : 'cover'};
      if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'unset'};
      }

      return (
        <li className="characters__item" key={item.id}>
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

    const {charList, loading, error} = this.state;

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
        <button className="characters__load-button button button__main" type="button">
          <div className="inner">load more</div>
        </button>
      </section>
    )
  }
}

export default CharList;
