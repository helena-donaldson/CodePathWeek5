import './Banned.css';

const Banned = (props) => {

    return (
        <div id="cardBanned">
            <div class="container">
            <p>The following are banned attributes:</p>
            {props.banned.map((item) => (
            <div key={item}><button onClick={props.funct} value={item}>{item}</button><br></br></div>
                ))}
            <p>Select an attribute on the left card to ban it.</p>
            </div>
        </div>
    )
}

export default Banned