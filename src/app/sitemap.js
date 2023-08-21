
import { getPostData } from '../lib/getData';
export default async function sitemap(){
    const baseUrl = "https://jsonplaceholder.typicode.com"

    const posts = await getPostData();

    const postUrl = posts.map(post => ({
        url: `${baseUrl}/posts/${post.id}`,
        lastModified: new Date()
    }))

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        ...postUrl
    ]
} 