export interface AwesomeTextProps {
  color: string
}

function AwesomeText({ color }: AwesomeTextProps) {
  return <h1 style={{ color }}>Howdy</h1>
}

export { AwesomeText }
