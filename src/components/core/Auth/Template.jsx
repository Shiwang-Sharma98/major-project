import { useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent  justify-between gap-y-12 py-12">
          <div className="mx-auto w-11/12 max-w-[450px]">
            <h1 className=" text-4xl font-bold leading-[2.375rem] text-emerald-400 ">
              {title}
            </h1>
            <p className="mt-7 text-[1.125rem] leading-[1.625rem]">
              <span className=" text-emerald-200">{description1}</span>{" "}
              <span className="font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] ">
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template