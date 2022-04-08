import {animated, useSpring} from 'react-spring'

const Transit = () =>{

    const styles = useSpring({to: {opacity: 1}, from: {opacity: 0}, delay: 500})

    return <animated.div style={styles}>Hello</animated.div>
}

export default Transit