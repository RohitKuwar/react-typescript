//passing object as an array

type PersonListProps = {
  list: {
    first: string,
    last: string,
  }[]
}

function PersonList(props: PersonListProps) {
  return (
    <ul>
      {
        props.list.map((person, i) => <li key={i}>{person.first} {person.last}</li>)
      }
    </ul>
  )
}

export default PersonList