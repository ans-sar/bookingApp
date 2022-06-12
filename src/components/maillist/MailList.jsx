import "./maillist.css";

const  MailList = () => {
    return(
        <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sing up and we will send you the best deals to you </span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email"/>
            <button type="submit">Subscribe</button>
        </div>
        </div>
    )
}
export default MailList;
