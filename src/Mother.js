import Son from './Son';

const Mother=(props)=>{
    return(
        <>
        <span>Mother's age is... {props.age[3]}</span><br/>
        <Son age={props.age}/>
        </>
    )

}
export default Mother;