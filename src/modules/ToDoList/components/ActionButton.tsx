type Props = {
  label: string
  icon?: React.ReactNode
}

const ActionButton = ({ label, icon }: Props) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  )
}

export default ActionButton
