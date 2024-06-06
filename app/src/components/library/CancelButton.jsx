import RoundButton from './RoundButton'

// import './CancelButton.sass'

function CancelButton(props) {
    return <RoundButton className="bg-[#DDE6ED] p-1.5 mt-2 " type="submit" onClick={props.onClick}>{props.children || 'Cancel'}</RoundButton>
}

export default CancelButton