import { BsDot } from "react-icons/bs";

export default function ScrollDot() {
  const scrollToReviews = () => {
    const section = document.getElementById("reviews");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToReviews}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        title="Go to Reviews"
      >
        <BsDot size={32} />
      </button>
    </div>
  );
}