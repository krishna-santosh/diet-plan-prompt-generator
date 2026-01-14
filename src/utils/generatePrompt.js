export function generatePrompt(state) {
  const {
    profile,
    goal,
    foodPreferences,
    habits,
  } = state

  const preferred = []
  const acceptable = []
  const avoid = []

  Object.entries(foodPreferences || {}).forEach(
    ([food, value]) => {
      if (value === "preferred") preferred.push(food)
      if (value === "acceptable") acceptable.push(food)
      if (value === "avoid") avoid.push(food)
    }
  )

  return `
You are an experienced diet planner familiar with Indian foods, eating habits, and practical lifestyle constraints.

Create a practical, sustainable ONE-DAY sample diet plan based on the details below.
This is NOT medical advice. Avoid extreme or unsafe recommendations.

USER PROFILE:
- Age: ${profile.age}
- Gender: ${profile.gender}
- Height: ${profile.height} cm
- Activity level: ${profile.activityLevel}
- Preferred meals per day: ${profile.mealsPerDay} (flexible if needed)
- Daily food budget: ${profile.budget}

BODY GOAL:
- ${goal}
Explain briefly why this dietary approach fits the selected goal.
Mention realistic expectations (especially if recomposition is selected).

FOOD PREFERENCES:
- Preferred foods: ${preferred.join(", ") || "None specified"}
- Acceptable foods: ${acceptable.join(", ") || "None specified"}
- Foods to avoid completely: ${avoid.join(", ") || "None specified"}

LIFESTYLE & HABITS:
- Smoking: ${habits.smoking}
- Alcohol: ${habits.alcohol}
- Sleep: ${habits.sleep}
- Stress level: ${habits.stress}
- Cooking time tolerance: ${habits.cookingTime}
- Spice tolerance: ${habits.spiceTolerance}

CONSTRAINTS & INSTRUCTIONS:
- Use commonly available Indian foods
- Keep meals simple, repeatable, and affordable
- Mention approximate protein content per meal
- Avoid supplements unless food-based
- No extreme calorie deficits or surpluses
- No medical or clinical claims

OUTPUT FORMAT:
- Mention the recommended calorie intake and break down the macros.
- Provide a one-day sample diet plan
- Clearly label meals (breakfast, lunch, etc.)
- Add a short reminder that this is only a sample plan and individual needs vary

Generate the diet plan PDF after providing the information mentioned above. The PDF should also include the disclaimer and also tips for better progress in the end.
`.trim()
}
