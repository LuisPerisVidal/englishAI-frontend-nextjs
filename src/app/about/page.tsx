import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Learning English with artificial intelligence",
	description: "About how this project was created and the technologies used.",
  };
  
export default function Page({ params }: { params: { id: string }}) {

	return (
		<div className="bg-slate-100">
			<div className="mx-auto max-w-3xl pt-5 pb-5">

				<h2 className="text-2xl font-bold">About this project</h2>

				<p className="mt-5">This is a free and open-source project primarily created for practicing deployment technologies as well as NextJS.</p>
				<p className="mt-5">On the infrastructure side: CloudFlare Pages, GCP Cloud Run (API), Firestore (Database).</p>
				<p className="mt-5">On the software side: The API (express with hexagonal architecture and TypeScript), front-end with NextJS and TypeScript.</p>
				<p className="mt-5">CI/CD: GitLab with YAML files.</p>
				<p className="mt-5">About me: <Link className="" href="https://luisperis.com">luisperis.com</Link> - <Link href="https://www.linkedin.com/in/luisperisvidal/">Linkedin</Link></p>

			</div>
		</div>

	);
  }
  