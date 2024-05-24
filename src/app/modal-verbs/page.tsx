"use client"
import type { Metadata } from "next";
import API from "../../config/API";
import {LessonAPI} from "@/interfaces/lesson.interface";
import { useState, useEffect } from "react";
import { redirect } from 'next/navigation'

export default function Page() {

	const [topic, setTopic] = useState("Friends TV Show");
	const [createLesson, setCreateLesson] = useState<{ stage: string, id: string | undefined }>({ stage: "prepared", id: undefined });

	useEffect(() => {
		if(createLesson.stage === 'ready'){
			redirect('/modal-verbs/'+createLesson.id);
		}
	}, [createLesson.stage]);

	const readyToSubmit = (): boolean => topic.length > 3;

	const createLessonInServer = async () => {

		setCreateLesson({...createLesson, stage:"loading"});

		const rest = await API.createLessonModals(topic);

		if(rest?.status && rest.id){
			setCreateLesson({...createLesson, stage:"ready", id:rest.id});
		}else{
			setCreateLesson({...createLesson, stage:"error"});
		}

	}

	return (
		<div className="bg-slate-100">
		  <div className="mx-auto max-w-3xl pt-5 pb-5">
			  <h2 className="text-2xl font-bold">Modal Verbs</h2>

			  <p className="mt-3">{'Modal verbs are auxiliary verbs in English that express necessity, possibility, permission, or ability. The main ones are "can," "could," "may," "might," "must," "shall," "should," "will," and "would." They do not change form based on the subject and are used with the base form of a main verb. For example, "can" shows ability or permission, while "must" indicates necessity.'}</p>

			  <div className="mt-8">
				  <h2 className="text-lg font-bold">Write about the topic that interests you:</h2>
				  <input type="text" id="topic" defaultValue={topic} onChange={(e)=>{setTopic(e.target.value)}} className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2" />
			  </div>
  
			  <div className="mt-8">
				  {createLesson.stage === "prepared" && 
				  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					  onClick={createLessonInServer}
					  disabled={!readyToSubmit()}>
					  Create lesson!
				  </button>}
				  {createLesson.stage === "loading" &&
				  <div>
					  <div className="mt-5 border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
						  <div className="animate-pulse flex space-x-4">
							  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
							  <div className="flex-1 space-y-6 py-1">
							  <div className="h-2 bg-slate-200 rounded"></div>
							  <div className="space-y-3">
								  <div className="grid grid-cols-3 gap-4">
								  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
								  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
								  </div>
								  <div className="h-2 bg-slate-200 rounded"></div>
							  </div>
							  </div>
						  </div>
						  <div className="font-bold mt-4 text-gray-600 text-justify">Creating the lesson may take up to 90 seconds, please do not close or refresh the page.</div>
					  </div>
				  </div>}
  
				  {createLesson.stage === "error" &&
					  <div className="mx-auto max-w-3xl pt-5 pb-5">
						  <div role="alert">
							  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
								  Error:
							  </div>
							  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
							  An error occurred while creating the class, please try again in a few hours.
							  </div>
						  </div>
					  </div>
				  }
				  
			  </div>
  
			  <br />
			  <hr></hr>
			  <br />
  
		  </div>
		</div>
	  );

  }