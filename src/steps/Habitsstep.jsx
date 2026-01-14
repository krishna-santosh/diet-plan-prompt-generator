export default function HabitsStep({ appState, setAppState }) {
  const habits = appState.habits

  function updateHabit(key, value) {
    setAppState({
      ...appState,
      habits: {
        ...habits,
        [key]: value,
      },
    })
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10 transition"

  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <h2 className="text-xl font-semibold">
        Habits & Constraints
      </h2>

      <div className="mt-6 space-y-5">

        {/* Smoking */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Smoking
          </label>
          <select
            value={habits.smoking}
            onChange={e => updateHabit("smoking", e.target.value)}
            className={inputClass}
          >
            <option value="">Select smoking habit</option>
            <option value="Never">Never</option>
            <option value="Quit recently">Quit recently</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Daily">Daily</option>
          </select>
        </div>

        {/* Alcohol */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Alcohol consumption
          </label>
          <select
            value={habits.alcohol}
            onChange={e => updateHabit("alcohol", e.target.value)}
            className={inputClass}
          >
            <option value="">Select alcohol habit</option>
            <option value="None">None</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Weekly">Weekly</option>
            <option value="Frequent">Frequent</option>
          </select>
        </div>

        {/* Sleep */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Sleep duration
          </label>
          <select
            value={habits.sleep}
            onChange={e => updateHabit("sleep", e.target.value)}
            className={inputClass}
          >
            <option value="">Select sleep duration</option>
            <option value="<6 hours">&lt;6 hours</option>
            <option value="6–7 hours">6–7 hours</option>
            <option value="7–8 hours">7–8 hours</option>
            <option value="8+ hours">8+ hours</option>
          </select>
        </div>

        {/* Stress */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Stress level
          </label>
          <select
            value={habits.stress}
            onChange={e => updateHabit("stress", e.target.value)}
            className={inputClass}
          >
            <option value="">Select stress level</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Cooking Time */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Cooking time per meal
          </label>
          <select
            value={habits.cookingTime}
            onChange={e =>
              updateHabit("cookingTime", e.target.value)
            }
            className={inputClass}
          >
            <option value="">Select cooking time</option>
            <option value="Quick">
              Quick (10–15 minutes)
            </option>
            <option value="Moderate">
              Moderate (20–30 minutes)
            </option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        {/* Spice Tolerance */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Spice tolerance
          </label>
          <select
            value={habits.spiceTolerance}
            onChange={e =>
              updateHabit("spiceTolerance", e.target.value)
            }
            className={inputClass}
          >
            <option value="">Select spice tolerance</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

      </div>
    </div>
  )
}
