import { MetadataRoute } from 'next'
import API from '@/config/API'

const domain = "https://english.ovh";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

	const lessons = await API.getSitemap();
	const lessonsModals = await API.getSitemapModals();

	const lessonsSitemap : MetadataRoute.Sitemap = [
		{ url: domain, lastModified: new Date(), changeFrequency: 'monthly', priority: 1},
		{ url: domain+"/about", lastModified: new Date(), changeFrequency: 'monthly', priority: 1},
		{ url: domain+"/modal-verbs", lastModified: new Date(), changeFrequency: 'monthly', priority: 1},
		{ url: domain+"/popular-lessons", lastModified: new Date(), changeFrequency: 'monthly', priority: 1}
	];

	const lessonsSitemapData : MetadataRoute.Sitemap = lessons.data.map((l)=>{
		return {
			url: domain+`/lesson/${l.id}-${l.uri}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		}
	});


	const lessonsModalsSitemapData : MetadataRoute.Sitemap = lessonsModals.data.map((l)=>{
		return {
			url: domain+`/modal-verbs/${l.id}-${l.uri}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		}
	});

	lessonsSitemap.push(...lessonsSitemapData, ...lessonsModalsSitemapData);


  return lessonsSitemap;
}