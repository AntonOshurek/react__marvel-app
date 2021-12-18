import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

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
      .catch(this.onError);

    // this.foo.bar = 0; // special error
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

  let imgStyle = {'objectFit' : 'cover'};
  if (thumbnails === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
    imgStyle = {'objectFit' : 'contain'};
  }

  return(
    <>
      <div className="character-info__basics">
        <img className="character-info__image"
          width="150" height="150"
          src={thumbnails} alt={name}
          style={imgStyle}/>
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
        {comics.length > 0 ? null : 'There is no comics with this character'}
        {
          comics.map((item, id) => {
            // eslint-disable-next-line array-callback-return
            if (id > 9) return;
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

CharInfo.propTypes = {
  charId: PropTypes.number,
}

export default CharInfo;
