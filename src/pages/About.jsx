import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"

import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"


const About = () => {
  return (
    <div>
      <section >
        <div className="relative mx-auto flex w-9/12 max-w-max flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold w-[70%]">
            Driving Innovation in Online Education for a {" "}
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-blue-100 w-[95%]">
              S.S tutorials is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-white">
        <div className="mx-auto flex w-11/12 max-w-Content flex-col justify-between gap-10">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-9/12 max-w-max flex-col justify-between gap-10 text-emerald-500">
          <div className="flex items-center gap-10 flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="text-4xl text-white font-bold">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
              />
            </div>
          </div>

        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-9/12 flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>
    </div>
  )
}

export default About