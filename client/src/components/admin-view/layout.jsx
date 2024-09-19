import React, { useState } from "react";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [openSiderbar, setOpenSiderbar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <AdminSideBar open={openSiderbar} setOpen={setOpenSiderbar} />
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpenSiderbar} />
        <main className="flex-1 flex-col bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
