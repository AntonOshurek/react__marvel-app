import { Component } from 'react/cjs/react.production.min';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

class CharInfo extends Component {

  state = {
    character: null,
    loading: false,
    error: false
  }

  marvelService = new MarvelService();

  componenDidMount() {
    this.updateCharacter();
  }

  componentDidUpdate(prevProps) {
    if(this.props.charId !== prevProps.charId) {
      this.updateCharacter();
    }
  }

  updateCharacter = () => {
    const {charId} = this.props;
    if(!charId) {
      return;
    }

    this.onCharLoading();

    this.marvelService.getCharacter(charId)
      .then(this.onCharacterLoaded)
      .catch(this.onError)
  }

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

  render() {

    const {character, loading, error} = this.state;

    const skeleton = character || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spiner = loading ? <Spinner/> : null;
    const content = !(loading || error || !character) ? <View character={character}/> : null;

    return (
      <article className="character-info">
        {skeleton}
        {errorMessage}
        {spiner}
        {content}
      </article>
    )
  }
}

const View = ({character}) => {

  const {name, description, thumbnails, homepage, wiki} = character;

  return(
    <>
      <div className="character-info__basics">
        <img className="character-info__image" width="150" height="150" src={thumbnails} alt={name}/>
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
    </>
  )
}

export default CharInfo;
