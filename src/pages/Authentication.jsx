import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function AuthenticationAction({ request }) {
  // finding mode
  const searchParams = new URL(request.url).searchParams;

  let mode = searchParams.get("mode") || "login";

  console.log("mode: " + mode);

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "can't process this url" }, { status: 422 });
  }

  const data = await request.formData();

  const AuthData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(AuthData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "user can't authenticated" }, { status: 500 });
  }

  return redirect("/");
}
