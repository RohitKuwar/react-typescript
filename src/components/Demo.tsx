//passing props

export type DemoProps = {
  name: string
  score?: number     //optional prop
}

const Demo = (props: DemoProps) => {
  const { score = 0 } = props    //set default value of prop
  return (
    <div>
      <h2>Hi {props.name}, your score is {score}</h2>
    </div>
  )
}

export default Demo