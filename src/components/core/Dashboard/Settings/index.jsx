import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"


export default function Settings() {
  return (
    <>
      <h1 className="mb-14 text-5xl font-bold text-cyan-500">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile /> 
      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}
