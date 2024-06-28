import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

function UserProfilePage() {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();

  if (isGetLoading) return <span>Loading...</span>;

  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  return <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />;
}
export default UserProfilePage;
