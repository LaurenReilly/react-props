// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    return (
        <span>
            {nameTags.map((name, i) => {
                return <NameTag key={i} name={name} />
            })}
        </span>
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = ({name}) => {
    return  <div style={{border:"2px solid blue", borderRadius:"5px", margin:"2em", width:"300px"}}>
                <div style={{backgroundColor: "blue"}}>
                    <h3 style={{color:"white", textAlign:"center"}}>Hello My Name Is...</h3>
                </div>
                <div>
                    <h1 style={{textAlign: "center"}}>{name}</h1>
                </div>
            </div>
};  