import Image from "next/image";
import React from "react";

const posts = [
  {
    icon: "/images/Intro/system.png",
    title: "Hệ thống hoàn thiện",
    description:
      "Hệ thống đóng gói ổn định đã triển khai với 1200+ khách hàng, mở rộng không giới hạn trên Cloud Server của Amazon",
  },
  {
    icon: "/images/Intro/settings.png",
    title: "Đa dạng tính năng",
    description:
      "Kho 100+ tính năng đa dạng, không ngừng được nâng cấp, mở rộng theo nhu cầu khách hàng.",
  },
  {
    icon: "/images/Intro/time-quick.png",
    title: "Triển khai nhanh",
    description:
      "Triển khai nhanh chỉ trong 15 ngày (giảm 10 lần thời gian) và miễn phí xây dựng App (tiết kiệm 20 lần) so với tự xây dựng.",
  },
  {
    icon: "/images/Intro/badge.png",
    title: "Đối tác uy tín",
    description:
      "Uy tín được khẳng định: Abaha là thành viên của VINASA với 5 năm kinh nghiệm, được tin tưởng rót vốn từ Quỹ đầu tư.",
  },
];

export default function Intro() {
  return (
    <div className="px-8 relative py-16 mb-20">
      <div className="absolute h-full w-8/12 -translate-x-1/2">
        <Image alt="" src={"/images/start/Artboard-1-8-1.png"} fill />
      </div>
      <div className="flex items-center gap-x-10">
        <div className="basis-2/5 relative">
          <Image
            src="/images/intro.webp"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="Image"
          />
        </div>
        <div className="basis-3/5">
          <div>
            <p className="text-indigo-600 font-bold">GOOD APP LÀ GÌ?</p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 py-2">
              Giải pháp xây dựng Mobile App TMĐT #1 Việt Nam
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              Good App là nền tảng thiết kế Mobile App thương mại điện tử chuyên
              nghiệp, dành cho Chuỗi cửa hàng bán lẻ và Hệ thống phân phối bán
              buôn.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-14 lg:mx-0 lg:max-w-none">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex max-w-xl flex-col items-start"
              >
                <div className="flex items-center gap-x-2">
                  <div className=" relative h-24 w-24 rounded-full bg-gray-50">
                    <Image src={post.icon} fill alt={post.title} />
                  </div>
                </div>
                <div className="group">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
