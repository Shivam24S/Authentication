import { redirect } from "react-router-dom";

// export function getTokenDuration() {
//   const storedExpirationData = localStorage.getItem("expiration");
//   const expirationData = new Date(storedExpirationData);
//   const now = new Date();
//   const duration = expirationData.getTime() - now.getTime();
//   console.log("duration", duration);
//   return duration;
// }

export function getAuthToken() {
  const token = localStorage.getItem("token");

  // if (!token) {
  //   return null;
  // }

  // const tokenDuration = getTokenDuration();
  // if (tokenDuration < 0) {
  //   return "EXPIRED";
  // }
  return token;
}

export function sendTokenData() {
  return getAuthToken();
}

export function checkAuthToken() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
