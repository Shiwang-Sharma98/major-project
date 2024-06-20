import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];


const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col  gap-12" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%] bg-teal-400 flex flex-row text-white uppercase gap-0 py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-cente px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className=" text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center px-14 ">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-sm w-[75px]">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
