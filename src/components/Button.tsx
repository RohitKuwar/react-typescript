type ButtonProps = {
  handleClick: () => void
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.handleClick}>Button</button>
  )
}

export default Button