//type union - a variable which can store multiple type of values

type UnionProps = {
  status: 'active' | 'pending' | 200
}

function Union(props: UnionProps) {
  return (
    <h3>Status: {props.status}</h3>
  )
}

export default Union