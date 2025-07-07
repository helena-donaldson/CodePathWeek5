import './Card.css';

const Card = (props) => {
    return (
        <div class="card">
            <img src={props.img} ></img>
            <div class="container">
            <br></br>
            <button id="breedBtn" value={props.breed} onClick={props.funct}>Breed: {props.breed}</button>
            <br></br>
            <br></br>
            <button id="originBtn" value={props.origin} onClick={props.funct}>Origin: {props.origin}</button>
            <br></br>
            <br></br>
            <button id="lifespanBtn" value={props.lifespan} onClick={props.funct}>Lifespan: {props.lifespan} years</button>
            </div>
        </div>
    )
}

export default Card