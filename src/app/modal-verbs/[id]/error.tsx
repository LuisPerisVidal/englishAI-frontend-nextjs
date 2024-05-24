"use client";

export default function LessonPageError(params: {message:string | undefined, }) {
	return (
		<div className="mx-auto max-w-3xl pt-5 pb-5">
			<div role="alert">
				<div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
					Error:
				</div>
				<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
					{params.message || "Invalid ID lesson"}
				</div>
			</div>
		</div>
	);
  }