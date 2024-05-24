import Link from "next/link";

export default function InputData() {

	return (
	  <div className="bg-slate-200">
		<div className="mx-auto max-w-4xl pt-5 pb-5 text-center">


			<div className="mr-4 mb-3">
				<h1 className="text-3xl"><Link href="/">English with AI</Link></h1>
			</div>

			<ul className="flex space-x-4 justify-center">
				<li>
					<Link href="/" className="text-gray-600 hover:text-gray-900">Tenses</Link>
				</li>
				<li>
					<Link href="/modal-verbs" className="text-gray-600 hover:text-gray-900">Modal Verbs</Link>
				</li>
				<li>
					<Link href="/popular-lessons" className="text-gray-600 hover:text-gray-900">Popular lessons</Link>
				</li>
				<li>
					<Link href="/about" className="text-gray-600 hover:text-gray-900">About this project</Link>
				</li>
			</ul>

		</div>
	  </div>
	);
  }
  