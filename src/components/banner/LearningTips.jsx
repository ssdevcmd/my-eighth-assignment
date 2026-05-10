const learningTips = [
    {
    id: 1,
    title: "Set Daily Learning Goals",
    description:
      "Break your study sessions into small achievable goals to stay focused and motivated.",
    icon: "🎯",
  },
  {
    id: 2,
    title: "Use the Pomodoro Technique",
    description:
      "Study for 25 minutes, then take a 5-minute break to improve concentration.",
    icon: "⏱️",
  },
  {
    id: 3,
    title: "Take Smart Notes",
    description:
      "Write down key concepts and summarize lessons in your own words.",
    icon: "📝",
  },
  {
    id: 4,
    title: "Practice Consistently",
    description:
      "Apply what you learn through coding exercises and real projects.",
    icon: "💻",
  },
  {
    id: 5,
    title: "Avoid Distractions",
    description:
      "Turn off notifications and create a dedicated study environment.",
    icon: "📵",
  },
  {
    id: 6,
    title: "Review Regularly",
    description:
      "Revisit previous lessons to strengthen long-term memory.",
    icon: "🔁",
  },
];

export default function LearningTips() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          📌 Learning Tips
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
    </section>
  );
}