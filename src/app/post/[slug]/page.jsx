import { getPostDataById } from '../../../lib/getData';
import React from 'react'

export async function generateMetadata({params}){
  const postDetail = await getPostDataById(params.slug)
  if(!postDetail) return {
    title: "Not Found",
    descriptiton: "The page is not found"
  }
  return {
    title: postDetail.title,
    description: postDetail.description,
    alternates: {
      canonical: `/posts/${postDetail.id}`,
      languages: {
        "en-CA" : `en-CA/posts/${postDetail.id}`
      }
    }
  }
}

const PostDetail = async ({params}) => {
  const detail = await getPostDataById(params.slug)
  return (
    <div>
      <h1>Post Detail</h1>
      <h3>ID: {detail.id}</h3>
      <h5>Title: {detail.title}</h5>
      
    </div>
  )
}
export default PostDetail;