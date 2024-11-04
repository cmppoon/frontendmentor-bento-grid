import Image from "next/image";
import fiveStars from "@/app/images/illustration-five-stars.webp";
import platforms from "@/app/images/illustration-multiple-platforms.webp";
import calender from "@/app/images/illustration-consistent-schedule.webp";
import analytics from "@/app/images/illustration-schedule-posts.webp";
import growth from "@/app/images/illustration-grow-followers.webp";
import audience from "@/app/images/illustration-audience-growth.webp";
import createPosts from "@/app/images/illustration-create-post.webp";
import aiContent from "@/app/images/illustration-ai-content.webp";

export default function Home() {
  return (
    <div className="space-y-7 bg-gray-100 p-3 tracking-tighter lg:grid lg:max-h-full lg:grid-cols-4 lg:grid-rows-[repeat(6,minmax(0px,120px))] lg:gap-8 lg:space-y-0 lg:px-24 lg:py-16">
      <div className="rounded-lg bg-purple500 p-8 text-center lg:order-2 lg:col-span-2 lg:row-span-2 lg:px-4 lg:py-12">
        <h2 className="text-5xl font-medium text-white">
          Social Media <span className="text-yellow500">10x</span>
          <span className="italic">
            <br className="hidden lg:inline" /> Faster
          </span>
          with AI
        </h2>
        <Image
          className="mx-auto mb-2 mt-4"
          src={fiveStars}
          width="170"
          alt="five stars image"
        />
        <h3 className="text-yellow100">Over 4,000 5-star reviews</h3>
      </div>

      <div className="rounded-lg bg-white p-4 lg:order-5 lg:row-span-2">
        <Image className="bg-white" src={platforms} alt="platform followers" />
        <h2 className="mt-2 text-2xl font-semibold lg:mt-6 lg:text-3xl">
          Manage multiple accounts and platforms.
        </h2>
      </div>

      <div className="overflow-hidden rounded-lg bg-yellow500 p-4 pb-0 pr-24 lg:order-6 lg:row-span-2 lg:pr-4">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          Maintain a consistent posting <br className="hidden lg:inline" />
          schedule.
        </h2>
        <Image
          className="-mt-2 translate-y-6 lg:translate-y-4"
          src={calender}
          alt="calendar"
        />
      </div>

      <div className="space-y-4 rounded-lg bg-purple100 p-4 py-6 lg:order-3 lg:row-span-4 lg:overflow-hidden lg:p-8 lg:pl-8 lg:pr-0">
        <h2 className="text-center text-2xl font-semibold lg:text-left">
          Schedule to social media.
        </h2>
        <div className="lg:w-[26rem]">
          <Image className="lg:h-[20rem]" src={analytics} alt="analytics graph" />
        </div>
        <h3 className="px-4 text-center text-base xl:text-lg font-medium lg:pl-0 lg:pr-8 lg:text-left">
          Optimize post timings to publish content at the perfect time for
          <br /> your audience.
        </h3>
      </div>

      <div className="rounded-lg bg-purple500 p-8 px-10 lg:order-8 lg:col-span-2 lg:row-span-2">
        <div className="lg:flex">
          <Image
            className="mx-auto pr-8 lg:m-0 lg:p-0"
            src={growth}
            alt="grow follower"
          />
          <h2 className="mt-8 px-2 text-center text-3xl font-medium text-white lg:my-auto lg:text-left xl:text-4xl">
            Grow followers with non-stop content.
          </h2>
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 py-6 lg:order-7 lg:row-span-2">
        <h2 className="text-5xl font-semibold">&gt;56%</h2>
        <h3 className="mt-4 text-lg font-medium">faster audience growth</h3>
        <Image
          className="mt-4 pr-40 lg:mt-10 lg:pr-24"
          src={audience}
          alt="audience"
        />
      </div>

      <div className="bg-yellow100 p-8 lg:order-1 lg:row-span-3 lg:py-14">
        <h2 className="text-3xl font-semibold">
          Create and schedule content
          <span className="italic text-purple500"> quicker.</span>
        </h2>
        <Image
          className="mt-4 pr-24 lg:pr-0"
          src={createPosts}
          alt="create posts button"
        />
      </div>

      <div className="rounded-lg bg-yellow500 p-6 lg:order-4 lg:row-span-3 lg:row-start-4">
        <h2 className="text-3xl font-semibold">
          Write your content <br className="hidden lg:inline" /> using AI.
        </h2>
        <Image
          className="mt-4 pr-20 lg:mt-8 lg:p-0"
          src={aiContent}
          alt="ai context"
        />
      </div>
    </div>
  );
}
