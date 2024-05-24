"use client";
import { useEffect, useState } from "react";
import Sentence from "./sentence";
import {LessonAPI, Lesson} from "@/interfaces/lesson.interface";
import Link from "next/link";

export default function LessonPage(params: {lesson:Lesson}) {

	const [state, setState] = useState<{status:string,message?:string, info?: Lesson}>({
		status: "loaded",
		message: "",
		info: params.lesson
	});


	if(state.status === "error"){
		return (
			<div className="mx-auto max-w-3xl pt-5 pb-5">
				<div role="alert">
					<div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
						Error:
					</div>
					<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
						{state.message}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-slate-100">
			<div className="mx-auto max-w-3xl pt-5 pb-5">
				
				{/* INFO */}
				<h2 className="text-2xl font-bold">Modal Verbs</h2>

				<p className="mt-3">{'Modal verbs are auxiliary verbs in English that express necessity, possibility, permission, or ability. The main ones are "can," "could," "may," "might," "must," "shall," "should," "will," and "would." They do not change form based on the subject and are used with the base form of a main verb. For example, "can" shows ability or permission, while "must" indicates necessity.'}</p>

				<h2 className="text-2xl font-bold mt-4">Topic</h2>
					{state.info && state.info.topic &&
						<div>{state.info.topic}</div>}

					<hr className="mt-5" />

				{/* LESSON */}
				<h2 className="text-2xl font-bold mt-4">Exercises:</h2>
					{state.info && state.info.lesson &&
						<div>{state.info.lesson.map((l, index)=> <Sentence key={index} sentence={l.sentence} solution={l.solution} />)}</div>}


				<div className="flex justify-center mb-10">
					<Link href="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Create a new lesson</button></Link>
				</div>

			</div>
		</div>

	);
  }