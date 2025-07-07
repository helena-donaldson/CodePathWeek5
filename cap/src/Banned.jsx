import './Banned.css';

const Banned = (props) => {
    return (
        <div id="cardBanned">
            <div class="container">
            <p>The following are banned attributes:</p>
            <p>{props.banned}</p>
            <p>Select an attribute on the above card to ban it.</p>
            </div>
        </div>
    )
}

export default Banned