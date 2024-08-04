import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/manageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
};
export default ManageRestaurantPage;
