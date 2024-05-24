import Axios from "axios";
import { LessonAPI, LessonSitemap, Lesson } from '@/interfaces/lesson.interface';

class API{

	baseURL: string;

	constructor(){
		this.baseURL = "https://production-api-jvi7fljibq-ew.a.run.app";
	}

	wrapResponse(preRequest: any){
		
		if(preRequest?.status === 200){
			return preRequest.json();
		}else{
			return {status:false, message: "status code: " + preRequest?.status};
		}
	}

	async getLesson(id: string): Promise<LessonAPI>{

		const parsedId = id.split("-")[0];

		return new Promise(async (resolve, reject) => {

			fetch(this.baseURL+`/lessons/${parsedId}`).then((preRequest) => {
				resolve(this.wrapResponse(preRequest));
			}).catch((error) => {
				resolve(this.wrapResponse(error));
			});
		});
	}

	async getLessonModals(id: string): Promise<LessonAPI>{

		const parsedId = id.split("-")[0];

		return new Promise(async (resolve, reject) => {

			fetch(this.baseURL+`/modals/${parsedId}`).then((preRequest) => {
				resolve(this.wrapResponse(preRequest));
			}).catch((error) => {
				resolve(this.wrapResponse(error));
			});
		});
	}

	async createLesson(topic : string, tenses: string[]): Promise<{status:boolean, id: string}>{
		return new Promise(async (resolve, reject) => {

			fetch(this.baseURL+'/lessons', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ topic, tenses })
			  }).then((preRequest) => {
				resolve(this.wrapResponse(preRequest));
			}).catch((error) => {
				resolve(this.wrapResponse(error));
			});
		});
	}

	async createLessonModals(topic : string): Promise<{status:boolean, id: string}>{
		return new Promise(async (resolve, reject) => {

			fetch(this.baseURL+'/modals', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ topic })
			  }).then((preRequest) => {
				resolve(this.wrapResponse(preRequest));
			}).catch((error) => {
				resolve(this.wrapResponse(error));
			});
		});
	}

	async getSitemap(): Promise<{status:boolean, data: LessonSitemap[]}>{

		return new Promise(async (resolve, reject) => {

				fetch(this.baseURL+`/sitemap/`).then((preRequest) => {
					resolve(this.wrapResponse(preRequest));
				}).catch((error) => {
					resolve(this.wrapResponse(error));
				});
		});
	}

	async getSitemapModals(): Promise<{status:boolean, data: LessonSitemap[]}>{

		return new Promise(async (resolve, reject) => {

				fetch(this.baseURL+`/sitemap/modals`).then((preRequest) => {
					resolve(this.wrapResponse(preRequest));
				}).catch((error) => {
					resolve(this.wrapResponse(error));
				});
		});
	}

}

export default new API();