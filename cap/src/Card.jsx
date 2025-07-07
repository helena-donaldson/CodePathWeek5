import './Card.css';

const Card = (props) => {
    return (
        <div class="card">
            <img src={props.img} ></img>
            <div class="container">
            <br></br>
            <button id="breedBtn">Breed: {props.breed}</button>
            <br></br>
            <br></br>
            <button id="originBtn">Origin: {props.origin}</button>
            <br></br>
            <br></br>
            <button id="lifespanBtn">Lifespan: {props.lifespan} years</button>
            </div>
        </div>
    )
}

export default Card