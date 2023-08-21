import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CMO() {
    return (
        <div className='mt-20 bg-white grid grid-cols-3 gap-x-4 shadow rounded-sm'>
            <div>
                <Image
                    alt=''
                    src="/images/home/about/Cmo.webp"
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{
                        width: '100%',
                        height: 'auto',
                }} />
            </div>
            <div className='col-span-2 px-5 py-14 flex flex-col justify-between'>
                <h2 className='text-base font-semibold'>HubSpot’s CMO on How AI Will Revolutionize Business</h2>
                <p className='text-base font-light'>HubSpot CMO Kipp Bodnar discusses his predictions for how AI will revolutionize the future of every industry.</p>
                <div className='mt-8'>
                    <Link
                        href="#"
                        className="text-center text-base font-medium bg-indigo-600 text-white border border-indigo-600 py-2.5 px-8 rounded-sm hover:opacity-60"
                    >
                        Read the article
                    </Link>
                </div>
            </div>
        </div>
    )
}
