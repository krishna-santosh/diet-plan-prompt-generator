const goals = [
  {
    id: "cut",
    title: "Fat Loss (Cutting)",
    description:
      "Focuses on reducing body fat while trying to preserve muscle. Progress depends on consistency and calorie control.",
  },
  {
    id: "bulk",
    title: "Muscle Gain (Bulking)",
    description:
      "Focuses on gaining muscle with controlled weight gain. Some fat gain is expected.",
  },
  {
    id: "recomp",
    title: "Recomposition",
    description:
      "Simultaneous fat loss and muscle gain. Progress is slow and best suited for beginners or people returning after a break.",
  },
  {
    id: "maintain",
    title: "Maintenance",
    description:
      "Maintains current body composition while improving performance and consistency.",
  },
]

export default function GoalStep({ appState, setAppState }) {
  function selectGoal(goalId) {
    setAppState({
      ...appState,
      goal: goalId,
    })
  }

  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <h2 className="text-xl font-semibold">Body Goal</h2>
      <p className="mt-2 text-gray-600">
        Select one goal that best matches your current focus.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {goals.map(goal => {
          const isSelected = appState.goal === goal.id

          return (
            <button
              key={goal.id}
              onClick={() => selectGoal(goal.id)}
              className={`text-left rounded-xl border p-5 transition-all duration-200 ${
  isSelected
    ? "border-black bg-gray-50"
    : "border-gray-200 hover:border-gray-400"
}`}

            >
              <h3 className="font-medium">{goal.title}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {goal.description}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}



