import './card.css';

const CardComponent = (props) => {
  return (
    <div className='card-container'>
      <div>
        <props.Icon className='icon' />
      </div>

      <div className='card-content'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
