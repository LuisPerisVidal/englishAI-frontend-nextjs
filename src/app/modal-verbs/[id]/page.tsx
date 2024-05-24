import type { Metadata } from "next";
import API from "../../../config/API";
import {LessonAPI} from "@/interfaces/lesson.interface";
import { cache } from "react";
import Lesson from "./lesson";
import LessonError from "./error";

	interface Props {
		params: {
		id: string;
		};
	}

	const getLessonBy = cache(async (id: string): Promise<LessonAPI> => {
		return await API.getLessonModals(id);
	});

	export async function generateMetadata( {params} : Props ){

		const data = await getLessonBy(params.id);

		if(data.status && data?.lesson?.topic){

			return {
			  title: "Learn english with: "+data.lesson.topic,
			  description: "Practice modal verbs english with: "+data.lesson.topic
			}

		}

		return {
		  title: "Learn english"
		}
	  }


export default async function Page({ params }: { params: { id: string }}) {

	const lesson = await getLessonBy(params.id);

	if(lesson.status === false){
		return <LessonError message={lesson.message}></LessonError>
	}
	
	return <Lesson lesson={lesson.lesson}></Lesson>;
  }