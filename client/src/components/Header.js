import propTypes from "prop-types"
import Button from "./Button"

const Header = ({title, onToggle, showAddTask}) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add" } 
        onClick={() => onToggle( !showAddTask)} 
        />
    </header>
  )
}


Header.defaultProps = {
  title: "Task Tracker"
}

Header.propTypes = {
  title: propTypes.string.isRequired
}

export default Header;