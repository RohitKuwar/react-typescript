//passing props

type DemoProps = {
  name: string
  score?: number     //optional prop
}

const Demo = (props: DemoProps) => {
  const { score = 0 } = props    //set default value of prop
  return (
    <div>
      <h1>Hi {props.name}, your score is {score}</h1>
    </div>
  )
}

export default Demo