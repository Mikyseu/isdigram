// import './RoundButton.sass'

function RoundButton(props) {
  return <button className={`rounded-[5px] border-[1px] p-1.5 ${props.className}`} type={props.type} onClick={props.onClick}>{props.children || 'Button'}</button>
}

export default RoundButton