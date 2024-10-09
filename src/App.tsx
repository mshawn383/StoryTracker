import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <h1 className="text-center text-4xl font-bold mb-16 text-blue-500 bg-white p-4 rounded-md shadow-md ">
        StoryTracker
      </h1>
      <div className="border-solid border-2 p-8 bg-white rounded-md w-1/2 h-80">
        <h1 className="text-5xl font-bold mb-16">
          Boost your productivity.
          <br />
          Start using our app today.
        </h1>
        <div className="flex items-center">
          <button
            onClick={() => navigate("/profile")}
            className="shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Get Started
          </button>
          <h1 className="mx-2">OR Already have Account</h1>
          <h1 className="text-blue-500 cursor-pointer">Sign In</h1>
        </div>
      </div>
    </div>
  );
}
