export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-black transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
