import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAbutton from '../components/core/HomePage/CTAButton'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import ExploreMore from '../components/core/HomePage/ExploreMore'

const Home = () => {
  return (
    <div>
        {/* section1 */}
        <div className='relative mx-auto flex  flex-col w-11/12 items-center text-white justify-between 
           max-w-max'>

            <Link to={"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-blue-500  font-bold   text-blue-100
                 transition-all  duration-200 hover:scale-95 '>
                    <div className='flex flex-row items-center gap-1 rounded-full px-10 py-[5px]
                    transition-all  duration-200 group-hover:bg-blue-600'>
                        <p>Become a Instructor</p>
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl  font-semibold mt-6'>
              Get the <HighlightText text={"Tech Career"}></HighlightText> you deserve. Faster.
            </div>

            <div className='mt-4 w-[70%] text-center text-lg font-bold text-blue-100  opacity-70'>
            S.S tutorials is your one-stop-shop for upscaling. Get maximum value for time
and resources you invest, with job-ready courses & high-technology,
available at the lowest cost.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAbutton active={true} linkto={"/signup"}>
                    Learn More
                </CTAbutton>

                <CTAbutton active={false} linkto={"/login"}>
                    Book a Demo 
                    </CTAbutton>

            </div>

            <div className="mx-3 my-14 shadow-[10px_-5px_50px_-5px] shadow-blue-200 w-[60%] h-80">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
            </div>


            {/* code section 1 */}
            
            <div className='mt-40 w-[80%] '>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your {" "}
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-teal-300"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            
          />
        </div>


            {/* code section 2 */}


          <div className='mt-30 w-[90%] '>
          <CodeBlocks
            position={"lg:flex-row-reverse "}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start {" "}
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
                btnText: "Continue Lesson",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-white"}
              codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          />
        </div>

              <ExploreMore></ExploreMore>

      </div>

      {/* section 2 */}

      <div className="bg-rose-50	 text-blue-700 ">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-10/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAbutton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAbutton>
              <CTAbutton active={false} linkto={"/login"}>
                Learn More
              </CTAbutton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-10/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[18px]">
                The modern S.S tutorials is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAbutton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAbutton>
            </div>
          </div>
          <TimelineSection></TimelineSection>
          <LearningLanguageSection></LearningLanguageSection>

        </div>




      </div>

    
</div>
  )
}

export default Home
