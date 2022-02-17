import './SingleCharacterPage.scss';

const SingleCharacterPage = ({data}) => {

  const {name, description, thumbnails} = data;

  console.log(data);

  return (
    <div className="single-comic">
      <img src={thumbnails} alt={name} className="single-comic__char-img"/>
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
      </div>
    </div>
  )
}

export default SingleCharacterPage;
