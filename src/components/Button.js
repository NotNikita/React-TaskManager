const Button = ({color, text, onClick}) => {

    return (
        <div>
            <button onClick={onClick} className='btn' 
            style={{backgroundColor:color}}>
            {text}</button>
        </div>
    )
}

Button.defaultProps ={
    color:'steelblue',
    text: 'Button',
}

export default Button