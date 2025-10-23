import Link from "next/link";
import { useRouter } from "next/navigation";

export default function adminNavbar() {
  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleLogout = async () => {
    const response = await fetch(`https://api.nicgroup.co/api/logout`, {
      method: "get",
    });

    if (response.ok) {
      localStorage.removeItem("adminToken");
      router.push("/login");
      window.location.reload();
    } else {
      // Handle logout failure (e.g., show an error message)
      console.error("Logout failed");
    }
  };

  return (
    <div className="flex flex-row px-3 pt-3 md:px-7 md:pt-7 items-center  mb-16  justify-between bg-whitee pb-7">
      <Link href="/admin">
        <img
          src="/Assets/Images/Logo.png"
          alt="NIC LOGO"
          className="w-[150px]"
        />
      </Link>
      <ul className="md:flex hidden flex-row md:gap-5 font-Secondary mx-auto items-center ">
        <Link href="/admin/categories">
          <li className="border-0 transition-all opacity-50 hover:opacity-100 hover:border-black hover:border-b-2">
            Categories
          </li>
        </Link>
        <Link href="/admin/categories/addcategory">
          <li className="border-0 transition-all opacity-50 hover:opacity-100 hover:border-black hover:border-b-2">
            Add Category
          </li>
        </Link>
        <Link href="/admin/blogs">
          <li className="border-0 transition-all opacity-50 hover:opacity-100 hover:border-black hover:border-b-2">
            blogs
          </li>
        </Link>

        <Link href="/admin/blogs/addblog">
          <li className="border-0 transition-all opacity-50 hover:opacity-100 hover:border-black hover:border-b-2">
            Add Blog
          </li>
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded cursor-pointer transition-all hover:bg-red-600"
        >
          logout
        </button>
      </ul>
    </div>
  );
}
