import React from "react";
import toast from "react-hot-toast";
import { logout } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    try {
      dispatch(logout());

      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
