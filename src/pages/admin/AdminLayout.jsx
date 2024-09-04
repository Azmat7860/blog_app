import React, { useEffect } from "react";
import Header from "./components/header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../service/index/user";

const AdminLayout = () => {
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUserData({ token: userState.userInfo.token }),
    retry: false, // Optionally, prevent retries on failure
  });

  useEffect(() => {
    if (isSuccess && profileData && !profileData.admin) {
      navigate("/");
      toast.error("Sorry, you are not allowed to access the admin panel.");
    }
  }, [isSuccess, profileData, navigate]);

  useEffect(() => {
    if (isError) {
      console.error(profileError);
      navigate("/");
      toast.error("Sorry, you are not allowed to access the admin panel.");
    }
  }, [isError, profileError, navigate]);

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h3 className="text-2xl text-slate-700">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Header />
      <main className="bg-[#F9F9F9] flex-1 p-4 lg:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
