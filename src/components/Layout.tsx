import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export const Layout = () => {
  return (
    <div className=" w-full min-h-screen my-0 mx-auto">
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
