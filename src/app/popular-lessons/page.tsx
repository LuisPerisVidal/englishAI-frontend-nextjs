import Link from "next/link";
import { useEffect, useState } from "react";
import API from "../../config/API";
import {LessonSitemap} from "../../interfaces/lesson.interface";
import Lessons from "./mostpopulars.json";

export default function Page({ params }: { params: { id: string }}) {

	return (
		<div className="bg-slate-100">
			<div className="mx-auto max-w-3xl pt-5 pb-5">

				<h2 className="text-2xl font-bold pb-5">Most popular lessons</h2>
				{Lessons.map((lesson, index) => <div className="pb-3" key={index}>
					<div>
						<p><span className="font-bold">{lesson.topic}: </span> {lesson.tenses.join(", ")}</p>
						<p className="pl-3"><Link href={'/lesson/'+lesson.id+"-"+lesson.uri} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Go to the lesson</Link></p>
					</div>
				</div>)}


			</div>
		</div>

	);
  }
  