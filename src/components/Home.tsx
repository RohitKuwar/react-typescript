import Demo from './Demo'
import Member from './Member'
import Person from './Person'
import PersonList from './PersonList'
import Union from './Union'
import Section from './Section'
import Heading from './Heading'
import Button from './Button'
import Input from './Input'
import Container from './Container'
import State from './State'
import ClassCompo from './ClassCompo'
import Compo from './Compo'

function Home() {
  const MemberInfo = {
    fname: "Rohit",
    lname: "Kuwar",
    role: "Web Developer",
    age: 24,
  }
  const fullName = {
    fname: "Virat",
    lname: "Kohli",
  }
  const nameList = [
    {
      first: "Rohit",
      last: "Sharma",
    },
    {
      first: "Suresh",
      last: "Raina",
    },
    {
      first: "Ravindra",
      last: "Jadeja",
    }
  ]

  return (
    <div>
      <h1>Home</h1>
      <Demo name={"rohit"} score={10}/>
      <Member data={MemberInfo} />
      <Person name={fullName} />
      <PersonList list={nameList} />
      <Union status={"active"} />
      <Section>
        <Heading>Hello, Good Morning!</Heading>
      </Section>
      <Button handleClick={() => alert('Button clicked')} /> <br />
      <Input value='' handleChange={(event) => console.log(event)} /> <br />
      <Container styles={{border: '1px solid black', padding: '0.5em', width: '20%', color: 'red'}} /> <br />
      <State />
      <ClassCompo message={'Count is: '} />
      <Compo isCompo={true} Component={Demo} />
    </div>
  )
}

export default Home