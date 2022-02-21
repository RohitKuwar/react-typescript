//passing children as prop

type HeadingProps = {
  children: string
}

function Heading(props: HeadingProps) {
  return (
    <h3>{props.children}</h3>
  )
}

export default Heading