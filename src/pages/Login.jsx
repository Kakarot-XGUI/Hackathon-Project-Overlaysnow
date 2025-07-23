import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="login-container mt-[20vh] flex justify-center mb-[5vh]">
      <SignIn />
    </div>
  );
};

export default Login;