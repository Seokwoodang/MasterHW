import Mother from './Mother';

const Father=(props)=>{
    return(
        <>
            <span>Father's age is... {props.age[2]}</span><br/>
            <Mother age={props.age}/>
        </>
    )
}
export default Father;