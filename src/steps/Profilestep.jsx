export default function ProfileStep({ appState, setAppState }) {
  const profile = appState.profile

  function updateProfile(key, value) {
    setAppState({
      ...appState,
      profile: {
        ...profile,
        [key]: value,
      },
    })
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10 transition"

  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <h2 className="text-xl font-semibold">Basic Profile</h2>

      <div className="mt-6 space-y-5">

        {/* Age */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Age
          </label>
          <select
            value={profile.age}
            onChange={e => updateProfile("age", e.target.value)}
            className={inputClass}
          >
            <option value="">Select age</option>
            {Array.from({ length: 71 }, (_, i) => {
              const age = i + 10
              return (
                <option key={age} value={age}>
                  {age}
                </option>
              )
            })}
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Gender
          </label>
          <select
            value={profile.gender}
            onChange={e => updateProfile("gender", e.target.value)}
            className={inputClass}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        {/* Height */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Height (cm)
          </label>
          <input
            type="number"
            placeholder="e.g. 175"
            value={profile.height}
            onChange={e => updateProfile("height", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Activity Level */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Activity Level
          </label>
          <select
            value={profile.activityLevel}
            onChange={e =>
              updateProfile("activityLevel", e.target.value)
            }
            className={inputClass}
          >
            <option value="">Select activity level</option>
            <option value="Sedentary">
              Sedentary (desk job, minimal movement)
            </option>
            <option value="Light">
              Light (gym 2–3x/week)
            </option>
            <option value="Moderate">
              Moderate (gym 4–5x/week)
            </option>
            <option value="High">
              High (physically active job / athlete)
            </option>
          </select>
        </div>

        {/* Meals per day */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Meals per day
          </label>
          <input
            type="number"
            placeholder="e.g. 3"
            value={profile.mealsPerDay}
            onChange={e =>
              updateProfile("mealsPerDay", e.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Daily Food Budget
          </label>
          <select
            value={profile.budget}
            onChange={e => updateProfile("budget", e.target.value)}
            className={inputClass}
          >
            <option value="">Select budget</option>
            <option value="₹100–150">₹100–150</option>
            <option value="₹150–250">₹150–250</option>
            <option value="₹250–400">₹250–400</option>
            <option value="₹400+">₹400+</option>
          </select>
        </div>

      </div>
    </div>
  )
}
