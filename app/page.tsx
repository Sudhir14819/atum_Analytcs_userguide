"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import data from "@/data/atum-analytics.json"

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>("login")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            AT
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900">{data.app.name}</h1>
            <p className="text-xs text-slate-500">v{data.app.version}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Sections */}
        {data.sections.map((section) => (
          <div
            key={section.id}
            className="mb-3 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setExpanded(expanded === section.id ? null : section.id)}
              className="w-full px-4 py-3 flex items-start justify-between hover:bg-slate-50 transition-colors text-left"
            >
              <div className="flex-1">
                <h2 className="font-bold text-sm sm:text-base text-slate-900">{section.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{section.description}</p>
              </div>
              <ChevronDown
                className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform"
                style={{ transform: expanded === section.id ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {expanded === section.id && (
              <div className="px-4 py-4 bg-slate-50 border-t border-slate-200 space-y-4">
                {section.screenshot && (
                  <img
                    src={section.screenshot || "/placeholder.svg"}
                    alt={section.title}
                    className="w-full h-auto max-h-80 object-cover rounded-lg border border-slate-200"
                  />
                )}

                <div className="space-y-3">
                  {section.fields.map((field, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        →
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
                          {field.title} {field.required && <span className="text-red-500">*</span>}
                        </h4>
                        <p className="text-xs text-slate-600">{field.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {section.alert && (
                  <div
                    className={`rounded-lg p-3 text-sm ${
                      section.alert.type === "info"
                        ? "bg-blue-50 border border-blue-200 text-blue-900"
                        : section.alert.type === "success"
                          ? "bg-green-50 border border-green-200 text-green-900"
                          : "bg-orange-50 border border-orange-200 text-orange-900"
                    }`}
                  >
                    <h5 className="font-semibold text-xs">{section.alert.title}</h5>
                    <p className="text-xs mt-1 opacity-90">{section.alert.message}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Workflow Section */}
        <div className="mb-3 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow">
          <button
            onClick={() => setExpanded(expanded === "workflows" ? null : "workflows")}
            className="w-full px-4 py-3 flex items-start justify-between hover:bg-slate-50 transition-colors text-left"
          >
            <div className="flex-1">
              <h2 className="font-bold text-sm sm:text-base text-slate-900">Workflow Diagrams</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Lead and enquiry lifecycle</p>
            </div>
            <ChevronDown
              className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform"
              style={{ transform: expanded === "workflows" ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {expanded === "workflows" && (
            <div className="px-4 py-4 bg-slate-50 border-t border-slate-200 space-y-6">
              {data.workflows.map((workflow) => (
                <div key={workflow.id}>
                  <h3 className="font-semibold text-sm text-slate-900 mb-4">{workflow.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {workflow.stages.map((stage, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold"
                          style={{ backgroundColor: stage.color }}
                        >
                          {stage.name}
                        </div>
                        {idx < workflow.stages.length - 1 && <ArrowRight className="w-4 h-4 text-slate-400" />}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pro Tips */}
        <div className="mb-8 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow">
          <button
            onClick={() => setExpanded(expanded === "tips" ? null : "tips")}
            className="w-full px-4 py-3 flex items-start justify-between hover:bg-slate-50 transition-colors text-left"
          >
            <div className="flex-1">
              <h2 className="font-bold text-sm sm:text-base text-slate-900">Pro Tips & Best Practices</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Maximize productivity</p>
            </div>
            <ChevronDown
              className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform"
              style={{ transform: expanded === "tips" ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {expanded === "tips" && (
            <div className="px-4 py-4 bg-slate-50 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-lg p-3 hover:shadow-sm transition-shadow"
                  >
                    <h5 className="font-semibold text-xs sm:text-sm text-slate-900">{tip.title}</h5>
                    <p className="text-xs text-slate-600 mt-1">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-slate-200 text-slate-600 text-xs">
          <p>ATUM Analytics - Single Page | JSON Driven | Mobile Optimized</p>
        </footer>
      </main>
    </div>
  )
}
