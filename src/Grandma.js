import Father from './Father';


const Grandma=(props)=>{
    return(
    <>
        <span>Grandma age is ... {props.age[1]}</span><br/>
        <Father age={props.age}/>
    </>
    )
}


export default Grandma;