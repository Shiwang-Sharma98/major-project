import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-10/12 flex flex-col">
          <h1 className="mb-14  text-4xl font-bold text-cyan-500">
            Add Course
          </h1>
          <div>
            <RenderSteps />
          </div>
        </div>
      </div>
    </>
  )
}