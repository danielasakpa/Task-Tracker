import propTypes from "prop-types"

const Button = ({color,text,onClick}) => {
  
  return (
    <button 
      onClick={onClick}
      className="btn" 
      style={{background:color}}
      >
      {text}
    </button>
    )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  color: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
}

export default Button;