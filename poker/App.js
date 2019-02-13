// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    return (
        <span>
            {cards.map((card, i) => {
                return <Card value={card.value} suit={card.suit}/>
            })}
        </span>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = ({value, suit}) => {
    return <img style={{width:"200px", height:"auto"}} src={"cards/"+ value + suit +".png"}/>
};  