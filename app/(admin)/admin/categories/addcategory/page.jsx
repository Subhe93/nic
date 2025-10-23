"use client";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function AddBlogCategoryPage() {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const sanitizedCategoryName = categoryName.trim();

    if (!sanitizedCategoryName) {
      setMessage("❌ Category name cannot be empty");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.nicgroup.co/api/blogcategories`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category_name: sanitizedCategoryName }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Category added successfully!");
        setCategoryName("");
      } else {
        const errorMessage = data?.message || "Something went wrong";
        setMessage(`❌ ${errorMessage}`);
      }
    } catch (error) {
      setMessage("❌ Failed to connect to server");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen    ">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 w-full max-w-md text-white">
        <h1 className="text-2xl font-semibold text-center mb-5">
          Add Blog Category
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none placeholder-white/60"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full p-3 rounded-lg font-semibold transition-all flex items-center justify-center
              ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Add Category"
            )}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
