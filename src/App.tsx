import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-blue-500 bg-white p-2 sm:p-4 md:p-6 rounded-md shadow-md">
        StoryTracker
      </h1>
      <div className="border-solid border-2 p-4 sm:p-6 md:p-8 bg-white rounded-md w-full sm:w-3/4 md:w-1/2 h-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
          Boost your productivity.
          <br />
          Start using our app today.
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <button
            onClick={() => navigate("/profile")}
            className="shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-md mb-4 md:mb-0"
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
