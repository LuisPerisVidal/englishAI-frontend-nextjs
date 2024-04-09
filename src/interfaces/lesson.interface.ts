// interface for lesson
export interface Lesson {
	tenses: string[];
	lesson: {sentence:string, solution: string, verb: string}[];
	topic: string;
	created: Date;
}

// interface for lesson
export interface LessonAPI {
	status: boolean;
	lesson : Lesson;
	message?: string;
}


export interface LessonSitemap {
	topic: string;
	tenses: string[];
	uri: string;
	id: string;
}