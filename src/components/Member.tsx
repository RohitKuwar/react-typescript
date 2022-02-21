import { MemberProp } from './Member.type'

function Member(props: MemberProp) {
  return (
    <h2>My name is {props.data.fname} {props.data.lname}. I am {props.data.age} years old. My role is {props.data.role}.</h2>
  )
}

export default Member