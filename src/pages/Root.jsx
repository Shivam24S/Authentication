import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";

function RootLayout() {
  const token = useLoaderData();

  const submit = useSubmit();

  // useEffect(() => {
  // if (!token) {
  //   return undefined;
  // }
  //   if (token === "EXPIRED") {
  //     submit(null, { action: "/logout", method: "POST" });
  //   }
  //   const tokenDuration = getTokenDuration;
  // setTimeout(() => {
  //   submit(null, { action: "/logout", method: "POST" });
  // }, tokenDuration);
  // }, [token, submit]);

  useEffect(() => {
    if (!token) {
      return undefined;
    }
    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
