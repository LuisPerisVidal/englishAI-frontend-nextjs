
export default function TenseOptions(props: any) {
	return <label className="flex items-center">
	<input type="checkbox" name="tenses" value={props.tense} defaultChecked={props.checked} className="form-checkbox h-5 w-5 text-indigo-600" onChange={props.handleTensesChange} />
	<span className="ml-2 text-gray-700">{props.tense.charAt(0).toUpperCase() + props.tense.slice(1)}</span>
</label>;
};
