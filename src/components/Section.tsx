//passing component as prop

type SectionProps = {
  children: React.ReactNode
}

function Section(props: SectionProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Section