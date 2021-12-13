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

  const {name, description, thumbnails, homepage, wiki, comics} = character;

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
        {
          comics.map((item, id) => {
            return(
              <li key={id} className="character-info__comics-item">
                <p>{item.name}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default CharInfo;
