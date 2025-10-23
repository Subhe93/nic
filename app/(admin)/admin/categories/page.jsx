"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // Fetch all categories
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(`https://api.nicgroup.co/api/blogcategories`);
      const data = await res.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  // Handle editing category
  const handleEdit = (category) => {
    setEditingCategory(category.id);
    setCategoryName(category.category_name);
  };

  // Handle delete category
  const handleDelete = async (id) => {
    const response = await fetch(`https://api.nicgroup.co/api/blogcategories/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setCategories(categories.filter((cat) => cat.id !== id));
      setMessage("Category deleted successfully.");
    } else {
      setMessage("Something went wrong. Please try again.");
    }
  };

  // Handle category update
  const handleUpdate = async (e) => {
    e.preventDefault();


    const response = await fetch(`https://api.nicgroup.co/api/blogcategories/${editingCategory}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category_name: categoryName }),
    }
    
    );  
    
    console.log(response);

    if (response.ok) {
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory ? { ...cat, category_name: categoryName } : cat
        )
      );
      setMessage("Category updated successfully.");
      setEditingCategory(null);
      setCategoryName("");
    } else {
      setMessage("Failed to update category.");
    }
  };

  return (

 
    <div className="p-8 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Categories Management</h1>

      {message && (
        <p className="text-center text-lg text-green-600 mb-6">{message}</p>
      )}

      <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-sm">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-6 text-left text-sm font-medium">Category Name</th>
              <th className="py-3 px-6 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-4 px-6 text-sm text-gray-700">{category.category_name}</td>
                <td className="py-4 px-6 text-sm">
                  <div className="flex space-x-4 justify-center">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleEdit(category)}
                    >
                      <FaEdit className="text-lg" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(category.id)}
                    >
                      <FaTrash className="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingCategory && (
        <div className="mt-8 p-6 bg-white shadow-xl rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Edit Category</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-5"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Category
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

