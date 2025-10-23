"use client";

import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react"; // Import TinyMCE

export default function AddBlogPage() {
  const [blogCategories, setBlogCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    async function getBlogCategories() {
      const res = await fetch(`https://api.nicgroup.co/api/blogcategories`);
      const data = await res.json();
      setBlogCategories(data);
    }
    getBlogCategories();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message on new submit

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", category);
    formData.append("author",localStorage.getItem("adminUser"));
    if (image) formData.append("image", image);
    
    try {
      const res = await fetch(`https://api.nicgroup.co/api/blogs`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setMessage("Blog added successfully!");
        setTitle("");
        setContent("");
        setCategory("");
        setImage(null);
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Add New Blog
      </h1>

      {message && (
        <p className="text-center text-lg text-green-500 mb-4">{message}</p>
      )}

      {errorMessage && (
        <p className="text-center text-lg text-red-500 mb-4">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-lg font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-lg font-medium text-gray-700">Content</label>
          {/* TinyMCE Editor */}
          <Editor
            apiKey="19ojm8vcc7h7h2mm4icoi3sg2kdc8gqv8enmoofibe1grf17"
            value={content}
            onEditorChange={(newValue) => setContent(newValue)}
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
              ],
              toolbar:
                "undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | link image",
            }}
            className="w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label className="text-lg font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            required
          >
            <option value="">Select Category</option>
            {blogCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category_name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-lg font-medium text-gray-700">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
