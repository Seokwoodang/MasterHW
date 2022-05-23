import Grandma from './Grandma';

const Grandfather=(props)=>{
    return (
    <>
    <span>Grandfather is.. {props.age[0]}</span><br/>
    <Grandma age={props.age}/>
    </>
    )
}

export default Grandfather;