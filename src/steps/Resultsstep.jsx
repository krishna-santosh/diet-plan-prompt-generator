import { useEffect, useState } from "react"
import { generatePrompt } from "../utils/generatePrompt"

export default function Resultsstep({ appState }) {
  const [prompt, setPrompt] = useState("")
  const [acknowledged, setAcknowledged] = useState(false)

  useEffect(() => {
    setPrompt(generatePrompt(appState))
  }, [appState])

  function copyToClipboard() {
    navigator.clipboard.writeText(prompt)
    alert("Prompt copied to clipboard")
  }

  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <h2 className="text-xl font-semibold">
        Generated Prompt
      </h2>

      <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-red-700">
        ⚠️ <strong>Disclaimer:</strong>  
        This generates a sample diet prompt only.  
        This is NOT medical advice. Do not blindly follow outputs.
      </div>

      <textarea
        className="mt-6 w-full h-96 rounded-xl border border-gray-300 bg-gray-50 p-4 text-sm leading-relaxed font-mono focus:outline-none focus:ring-2 focus:ring-black/10 transition"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />

      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={acknowledged}
          onChange={e => setAcknowledged(e.target.checked)}
        />
        <span className="text-sm">
          I understand this is only a sample and not medical advice
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={copyToClipboard}
          disabled={!acknowledged}
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
        >
          Copy Prompt
        </button>
      </div>
    </div>
  )
}
