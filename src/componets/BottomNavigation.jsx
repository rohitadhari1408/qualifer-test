import { useLocation, useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define pages in order
  const pages = ["/", "/signin", "/signup", "/account"];
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-3 flex justify-center items-center gap-4">
      <button onClick={() => navigate("/")} className="text-gray-500 hover:text-black">
        ⬆️ {/* Home icon */}
      </button>

      <button
        onClick={() => currentIndex > 0 && navigate(pages[currentIndex - 1])}
        disabled={currentIndex === 0}
        className={`text-gray-500 hover:text-black ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        ◀
      </button>

      <span className="text-gray-700 font-medium">
        {currentIndex + 1} of {pages.length}
      </span>

      <button
        onClick={() => currentIndex < pages.length - 1 && navigate(pages[currentIndex + 1])}
        disabled={currentIndex === pages.length - 1}
        className={`text-gray-500 hover:text-black ${currentIndex === pages.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        ▶
      </button>
    </div>
  );
};

export default BottomNavigation;
