import { NextResponse } from 'next/server'
 
export async function getPostData() {
    const res = 
  await  fetch('https://jsonplaceholder.typicode.com/photos')
   
    return res.json();
}
export async function getPostDataById(id) {
    const res =
  await  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    return res.json();
}