// Render the circles using React!
const App = (props) => {
    let { circles } = props;
    return (
        <span>
            {circles.map((circle, i) => {
                return <Circle key={i} color={circle.color} radius={circle.radius}/>
            })}
        </span>
    )
}

const Circle = ({radius, color}) => {
    let style = {
        width: (radius * 2),
        height: (radius * 2),
        borderRadius: radius,
        backgroundColor: color,
    }
   return<div style={style}></div>
};  // CHALLENGE: Write a separate Circle component for use in the App component