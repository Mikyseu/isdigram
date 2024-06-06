import RoundButton from "./RoundButton";

// import "./SubmitButton.sass";

function SubmitButton(props) {
  return <RoundButton className="bg-[#F7C566] shadow	0 4px 6px -1px rgb(0 0 0 / 0.1)  inline-block min-w-auto mt-[16px]" >{props.children || 'Submit'}</RoundButton>
}

export default SubmitButton
