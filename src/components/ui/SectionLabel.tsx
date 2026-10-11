import './SectionLabel.css'

type SectionLabelProps = {
  index: string
  children: string
}

function SectionLabel({
  index,
  children,
}: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span>/</span>
      <span>{children}</span>
    </div>
  )
}

export default SectionLabel