import { useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm.jsx";
import { createItem } from "../api/itemApi.js";

function AddItemPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createItem(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create item", error);
      const message = error.response?.data?.message || "Failed to create item";
      alert(message);
    }
  };

  return <ItemForm submitText="Add Item" onSubmit={handleCreate} />;
}

export default AddItemPage;