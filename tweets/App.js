// Render the tweets using React!
const App = ({tweets}) => {
    return  <div>
                {tweets.map((tweet) => {
                    return <Tweet user={tweet.user} text={tweet.text} likes={tweet.likes} retweets={tweet.retweets} replies={tweet.replies}/>
                })}
            </div>
}


const Tweet = ({user, text, likes, retweets, replies}) => {
    return  <div className="border rounded m-1" style={{width:"500px"}}>
                <User handle={user.handle} username={user.username} isVerified={user.isVerified} profilePic={user.profilePic}/>
                <p className="m-5">{text}</p>
                <Metrics likes={likes} retweets={retweets} replies={replies}/>
            </div>
};  // CHALLENGE: Write a separate Tweet component for use in the App component

const User = ({handle, username, isVerified, profilePic}) => {
    let verified = () => {
        if (isVerified === true) {
            return <img src="./twitterIcons/check-circle.svg"/>
        } else {
            return null;
        }
    }
    return  <div className="d-flex between" style={{backgroundColor:"#f4f4f4"}}>
                <img style={{width:"50px", height:"50px"}} src={profilePic}/>
                {verified()}
                <h4 className="m-1">{username}</h4>
                <p className="m-1">{handle}</p>
            </div>
};  // CHALLENGE: Write a separate User component for use in the Tweet component

//{() => isVerified ? <img src="twitterIcons/check-circle.svg"/> : null}

//<img src={() => isVerified ? "twitterIcons/check-circle.svg" : "" } />

const Metrics = ({likes, retweets, replies}) => {
    return  <div className="d-flex between" style={{backgroundColor: "#f4f4f4"}}>
                <div className="m-2">
                    <img src="twitterIcons/heart.svg"/>
                    <p style={{display:"inline-block"}}>{likes}</p>
                </div>
                <div className="m-2">
                    <img src="twitterIcons/message-circle.svg"/>
                    <p style={{display:"inline-block"}}>{replies}</p>
                </div>
                <div className="m-2">
                    <img src="twitterIcons/repeat.svg"/>
                    <p style={{display:"inline-block"}}>{retweets}</p>
                </div>
            </div>
};  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly