import { getPostDataById } from "../../../lib/getData"
import { ImageResponse } from "next/server"


export const size = {
    width: 900, height: 450
}

export const contentType = "image/png"

export default async function og({params}){
    const detail = await getPostDataById(params.slug)

    return new ImageResponse((
<div tw="relative flex items-center justify-center">
    <img src={detail?.url} alt={detail.title} />
    <div tw="absolute flex bg-black opacity-50 inset-0" />
    <div tw="absolute flex items-center top-2 w-full">
        <p tw="text-white text-4xl flex font-bold m-5">{detail?.title}</p>
        <p tw="text-indigo-200 text-xl flex font-bold m-5">{detail?.albumId}</p>
        <p tw="text-purple-200 text-xl flex font-bold m-5">{detail?.id}</p>
    </div>
</div>
    ));
}