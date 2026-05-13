import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaLaptop } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { MdMobileOff, MdOutlineTipsAndUpdates, MdTipsAndUpdates } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const learningTips = [
    {
    id: 1,
    title: "Set Daily Learning Goals",
    description:
      "Break your study sessions into small achievable goals to stay focused and motivated.",
    icon: <TbTargetArrow className="text-red-500" />,
  },
  {
    id: 2,
    title: "Use the Pomodoro Technique",
    description:
      "Study for 25 minutes, then take a 5-minute break to improve concentration.",
    icon: <FcAlarmClock />,
  },
  {
    id: 3,
    title: "Take Smart Notes",
    description:
      "Write down key concepts and summarize lessons in your own words.",
    icon: <CgNotes  className="text-green-500"/>,
  },
  {
    id: 4,
    title: "Practice Consistently",
    description:
      "Apply what you learn through coding exercises and real projects.",
    icon: <FaLaptop className="text-blue-400" />,
  },
  {
    id: 5,
    title: "Avoid Distractions",
    description:
      "Turn off notifications and create a dedicated study environment.",
    icon: <MdMobileOff className="text-red-500" />,
  },
  {
    id: 6,
    title: "Review Regularly",
    description:
      "Revisit previous lessons to strengthen long-term memory.",
    icon: <FaRepeat className="text-violet-500" />,
  },
];

const LearningTips = () => {
  return (
    <div className="mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
          <MdTipsAndUpdates className="text-violet-500" />
           Learning Tips
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Improve your study habits with practical techniques for better focus,
          time management, and consistent progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white border border-gray-100 rounded-3xl p-6 "
          >
            <div className="text-4xl mb-4">{tip.icon}</div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {tip.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningTips;