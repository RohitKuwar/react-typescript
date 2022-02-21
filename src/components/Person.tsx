//passing object as prop

type PersonProp = {
  name: {
    fname: string,
    lname: string,
  }
}

function Person(props: PersonProp) {
  return (
    <h2>Person: {props.name.fname} {props.name.lname}</h2>
  )
}

export default Person