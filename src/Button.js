function Button(props){

    const {text, type, operation} = props
    
    return (
        <button className={`btn ${type==='add'?'btn-add':'btn-delete'}`} onClick={()=>operation()}>
            {text}
        </button>
    )
}

export default Button;

// 1. Text
// 2. type - add, delete