// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    return (
        <span>tweets</span>
    )
}

const Tweet = null;  // CHALLENGE: Write a separate Tweet component for use in the App component

const User = (props) => {
    return 
};  // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = (props) => {
    return  <div>
                <div>
                    <img src="twitterIcons/heart.svg"/>
                    <p>{props.likes}</p>
                </div>
                <div>
                    <img src="twitterIcons/message-circle.svg"/>
                    <p>{props.comments}</p>
                </div>
                <div>
                    <img src="twitterIcons/repeat.svg"/>
                    <p>{props.retweets}</p>
                </div>
            </div>
};  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly