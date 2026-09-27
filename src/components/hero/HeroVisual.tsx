import React, { useState } from 'react';
import { Terminal, Code2, Cpu, Database, Check, Copy, Play, ArrowRight, Server, Shield, Layers } from 'lucide-react';

type Tab = 'architecture' | 'code' | 'terminal';
type CodeLang = 'python' | 'typescript' | 'cpp';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('architecture');
  const [codeLang, setCodeLang] = useState<CodeLang>('typescript');
  const [copied, setCopied] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'shreyas@rit-developer:~$ status',
    'Candidate: Shreyas Thorat · B.Tech CSE (AI & ML) 5th Semester',
    'Specializations: Full-Stack Web, Embedded Systems, Applied Machine Learning',
    'Type "help" for a list of interactive queries.',
  ]);

  const codeSnippets: Record<CodeLang, { title: string; filename: string; code: string; note: string }> = {
    typescript: {
      title: 'Full Stack API Gateway',
      filename: 'triageService.ts',
      note: 'Express & TypeScript Civic Dispatch Engine',
      code: `export async function routeGrievance(ticket: CivicReport): Promise<DispatchResult> {
  const geoCoordinates = await resolveGPS(ticket.location);
  const severityScore = triageEngine.calculateSeverity(ticket.category, ticket.metadata);
  
  const dispatchPayload = {
    ticketId: ticket.id,
    department: assignDepartment(ticket.category),
    priority: severityScore > 0.75 ? 'P1_CRITICAL' : 'STANDARD',
    timestamp: new Date().toISOString()
  };

  await db.tickets.create({ ...ticket, ...dispatchPayload });
  await notifyMunicipalUnit(dispatchPayload.department, ticket.id);
  return { status: 'DISPATCHED', etaHours: severityScore > 0.75 ? 12 : 48 };
}`,
    },
    python: {
      title: 'Applied Machine Learning Pipeline',
      filename: 'classifier.py',
      note: 'Scikit-Learn & Feature Engineering',
      code: `import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier

class CivicTriageEngine:
    def __init__(self, n_trees: int = 100):
        self.pipeline = Pipeline([
            ('scaler', RobustScaler()),
            ('rf', RandomForestClassifier(n_estimators=n_trees, random_state=42))
        ])

    def predict_priority(self, feature_matrix: np.ndarray) -> np.ndarray:
        """Computes priority classification for incoming reports."""
        probabilities = self.pipeline.predict_proba(feature_matrix)
        return np.argmax(probabilities, axis=1)`,
    },
    cpp: {
      title: 'IoT Microcontroller Firmware',
      filename: 'pumpController.ino',
      note: 'ESP32 Ultrasonic Telemetry & Relay Isolation',
      code: `const int TRIG_PIN = 5;
const int ECHO_PIN = 18;
const int RELAY_PIN = 23;

void loop() {
  long duration = pulseSensor(TRIG_PIN, ECHO_PIN);
  float waterDepthCm = duration * 0.034 / 2;
  float volumePercentage = calculateVolume(waterDepthCm);

  // Safety Deadband & Dry-run Protection
  if (volumePercentage < 15.0) {
    digitalWrite(RELAY_PIN, HIGH); // Engage pump
    telemetry.publish("state", "FILLING");
  } else if (volumePercentage >= 95.0) {
    digitalWrite(RELAY_PIN, LOW);  // Overflow prevention
    telemetry.publish("state", "FULL");
  }
  delay(1000);
}`,
    },
  };

  const architectureNodes = [
    {
      id: 'client',
      label: 'Client Dashboard',
      tech: 'React 19 & Tailwind',
      role: 'Responsive Citizen & Admin Portal',
      detail: 'Dynamic state management with accessible keyboard controls and zero-latency feedback.',
      icon: Layers,
    },
    {
      id: 'gateway',
      label: 'Service Gateway',
      tech: 'Node.js & Express REST',
      role: 'Ticket Ingestion & Geo-Triage',
      detail: 'Validates multi-step form schemas, parses GPS metadata, and authenticates role permissions.',
      icon: Server,
    },
    {
      id: 'ai-core',
      label: 'AI Inference Unit',
      tech: 'Python & Scikit-Learn',
      role: 'Automated Severity Ranking',
      detail: 'Classifies reports by urgency based on historical municipal turnaround benchmarks.',
      icon: Cpu,
    },
    {
      id: 'iot-edge',
      label: 'Hardware Controller',
      tech: 'ESP32 & C++ Firmware',
      role: 'Ultrasonic Sensor & Relay Actuation',
      detail: 'Hardware fail-safe isolating high-voltage pump motors with closed-loop telemetry.',
      icon: Shield,
    },
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[codeLang].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    switch (cmd) {
      case 'help':
        response = 'Available commands: projects, skills, institute, contact, clear';
        break;
      case 'projects':
        response = 'CivicConnect (Full Stack), Smart Water Tank (IoT/ESP32), BottlePoints (AI/Recycling)';
        break;
      case 'skills':
        response = 'React, TypeScript, Node.js, Express, Python, Scikit-Learn, C++, ESP32, MongoDB, PostgreSQL';
        break;
      case 'institute':
        response = 'Rajarambapu Institute of Technology (RIT), Maharashtra — 5th Semester B.Tech CSE (AI & ML)';
        break;
      case 'contact':
        response = 'Email: shreyasthorat717@gmail.com | GitHub: ShreyasThorat72 | LinkedIn: Shreyas Thorat';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        response = `Unknown command "${cmd}". Try "help", "projects", or "skills".`;
    }

    setTerminalHistory((prev) => [...prev, `shreyas@rit:~$ ${terminalInput}`, `→ ${response}`]);
    setTerminalInput('');
  };

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-white/95 dark:bg-[#181716]/95 border border-stone-200/90 dark:border-stone-800 shadow-[0_20px_50px_rgba(28,25,23,0.06)] backdrop-blur-xl overflow-hidden text-stone-800 dark:text-stone-200 transition-all">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-stone-200/80 dark:border-stone-800/80 bg-[#FAF8F5]/80 dark:bg-[#141312]/80">
        {/* macOS style buttons */}
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
          <span className="ml-2 text-xs font-mono font-medium text-stone-500 dark:text-stone-400">
            thorat.workspace.sys
          </span>
        </div>

        {/* Tab switcher buttons */}
        <div className="flex items-center space-x-1 p-0.5 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/60 text-xs">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-amber-700 dark:text-amber-400" />
              Architecture
            </span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              activeTab === 'code'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              Code
            </span>
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              CLI
            </span>
          </button>
        </div>
      </div>

      {/* Main Viewport Content */}
      <div className="p-5 min-h-[340px] flex flex-col justify-between">
        {/* TAB 1: ARCHITECTURE NODES */}
        {activeTab === 'architecture' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pb-2 border-b border-stone-200/80 dark:border-stone-800">
              <span className="font-semibold text-stone-800 dark:text-stone-200">
                Interactive Engineering System Pipeline
              </span>
              <span className="text-[11px] font-mono text-amber-800 dark:text-amber-400">
                Click node to inspect
              </span>
            </div>

            {/* 4 Interactive Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {architectureNodes.map((node, i) => {
                const Icon = node.icon;
                const isSelected = activeNodeIndex === i;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeIndex(i)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50/80 dark:bg-stone-800 border-amber-400/80 dark:border-amber-500/60 shadow-xs ring-1 ring-amber-400/30'
                        : 'bg-white dark:bg-stone-900/40 border-stone-200/80 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 mb-2 ${
                        isSelected ? 'text-amber-800 dark:text-amber-400' : 'text-stone-400'
                      }`}
                    />
                    <p className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">
                      {node.label}
                    </p>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5 truncate font-mono">
                      {node.tech}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Detailed Inspector */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-900 dark:text-stone-100">
                <span>{architectureNodes[activeNodeIndex].label}</span>
                <span className="text-[11px] font-mono font-medium text-amber-800 dark:text-amber-400">
                  {architectureNodes[activeNodeIndex].role}
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {architectureNodes[activeNodeIndex].detail}
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: CODE SANDBOX */}
        {activeTab === 'code' && (
          <div className="space-y-3 font-mono text-xs">
            {/* Language Switcher Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-stone-200/80 dark:border-stone-800">
              <div className="flex items-center gap-1.5">
                {(['typescript', 'python', 'cpp'] as CodeLang[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCodeLang(lang)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                      codeLang === lang
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300/60 dark:border-amber-800'
                        : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
                    }`}
                  >
                    {lang === 'typescript' ? 'TypeScript' : lang === 'python' ? 'Python AI' : 'C++ IoT'}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 text-[11px] text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-3.5 rounded-2xl bg-[#F8F6F2] dark:bg-[#121110] border border-stone-200/80 dark:border-stone-800/80 overflow-x-auto max-h-52 text-[11px] leading-relaxed text-stone-800 dark:text-stone-300 whitespace-pre">
              {codeSnippets[codeLang].code}
            </div>

            <p className="text-[11px] text-stone-500 dark:text-stone-400 font-sans">
              Snippet: <span className="font-semibold">{codeSnippets[codeLang].note}</span>
            </p>
          </div>
        )}

        {/* TAB 3: INTERACTIVE CLI */}
        {activeTab === 'terminal' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="overflow-y-auto max-h-48 space-y-1.5 p-3 rounded-2xl bg-[#F8F6F2] dark:bg-[#121110] border border-stone-200/80 dark:border-stone-800 text-[11px]">
              {terminalHistory.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith('→')
                      ? 'text-amber-800 dark:text-amber-400 font-semibold'
                      : line.startsWith('shreyas')
                      ? 'text-stone-500 dark:text-stone-400'
                      : 'text-stone-700 dark:text-stone-300'
                  }
                >
                  {line}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
              <span className="text-amber-800 dark:text-amber-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help', 'projects', 'skills'..."
                className="w-full bg-transparent text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none font-mono"
              />
              <button
                type="submit"
                aria-label="Execute command"
                className="p-1.5 rounded-lg bg-stone-900 dark:bg-white text-white dark:text-stone-950 hover:bg-stone-800 transition-colors"
              >
                <Play className="w-3 h-3" />
              </button>
            </form>
          </div>
        )}

        {/* Card Footer Micro Bar */}
        <div className="pt-3 border-t border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-stone-700 dark:text-stone-300">
              Rajarambapu Institute of Technology
            </span>
          </div>
          <span className="font-mono text-stone-400">Semester 5 · CSE (AI & ML)</span>
        </div>
      </div>
    </div>
  );
};
