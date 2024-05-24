import { useState } from "react";

export default function Sentence({ sentence, solution }: { sentence: string, solution: string }) {

	const [value, setValue] = useState({value:"", color:""});
	const [showTense, setShowTense] = useState(false);

	// fix for chatGPT fail with the number of underscores
		const count_ = sentence.split('_').length - 1;

	// replace the underscores with the input fields
		const sentence_split = sentence.split(" "+"_".repeat(count_)+" ");
	
	const validateInput = (e: any) => {
		const v = e.target.value
		if( v === ""){ setValue({value:"", color:""}); return; }

		if( v === solution){ setValue({value:v, color:"bg-green-200"}); return; }
		setValue({value:v, color:"bg-red-100"});

	}

	return (
		<div className="bg-white shadow-sm rounded p-4 mt-4">
			<div className="font-bold">
				{sentence_split[0]}
				<input
					type="text"
					className={"border-b-2 border-gray-300 w-16 text-center " + value.color}
					onChange={validateInput} />
				{sentence_split[1]}
			</div>
			{showTense && <div className="text-gray-600">{solution}</div>}
			{!showTense && <button onClick={() => setShowTense(true)} className="text-gray-600">Show solution</button>}

		</div>
	);
}