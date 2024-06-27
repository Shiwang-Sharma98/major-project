import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="mb-14 text-5xl font-medium text-cyan-500">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-white bg-blue-700 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-xl font-semibold text-cyan-200">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-lg text-cyan-200">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-white bg-blue-700 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-xl font-semibold text-cyan-200">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={" text-lg font-medium text-cyan-200"}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-white bg-blue-700 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-xl font-semibold text-cyan-200">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-lg text-cyan-200">First Name</p>
              <p className="text-sm font-medium text-cyan-200">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg text-cyan-200">Email</p>
              <p className="text-sm font-medium text-cyan-200">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg text-cyan-200">Gender</p>
              <p className="text-sm font-medium text-cyan-200">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-lg text-cyan-200">Last Name</p>
              <p className="text-sm font-medium text-cyan-200">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg text-cyan-200">Phone Number</p>
              <p className="text-sm font-medium text-cyan-200">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg text-cyan-200">Date Of Birth</p>
              <p className="text-sm font-medium text-cyan-200">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}