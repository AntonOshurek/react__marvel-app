import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';

class RandomChar extends Component {

  state = {
    character: {},
    loading: true,
    error: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
    //this.timerId = setInterval(this.updateChar, 3000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }

  onCharacterLoaded = (character) => {
    this.setState({character, loading: false});
  }

  onCharLoading = () => {
    this.setState({
        loading: true
    })
}

  onError = () => {
    this.setState({loading: false, error: true});
  }

  updateChar = () => {
    const minValue = 1011000;
    const maxValue = 1011400;

    const id = Math.floor(Math.random() * (maxValue - minValue) + minValue);
    this.onCharLoading();
    this.marvelService
      .getCharacter(id)
        .then(this.onCharacterLoaded)
        .catch(this.onError)
  }

  render() {
    const {character, loading, error} = this.state;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spiner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View character={character}/> : null;

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
          <button onClick={this.updateChar} className="randomchar__try-button button button__main" type="button">
            <div className="inner">try it</div>
          </button>
        </article>
      </section>
    )
  }

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
