import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { PROFILE_DATA } from '../data/profile';
import { BookOpen, Rocket, Compass, Target, Sparkles, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const currentFocusCards = [
    {
      title: 'Currently Building',
      icon: Rocket,
      tag: 'Full-Stack Development',
      color: '#B45309', // Amber bronze
      description: 'Enhancing CivicConnect with automated complaint routing algorithms and refining embedded firmware for closed-loop IoT water automation.',
    },
    {
      title: 'Currently Deepening',
      icon: BookOpen,
      tag: 'AI & Mathematics',
      color: '#2563EB', // Sapphire
      description: 'Strengthening mathematical foundations of neural networks, backpropagation optimization, and advanced database indexing strategies.',
    },
    {
      title: 'Currently Exploring',
      icon: Compass,
      tag: 'Research & Systems',
      color: '#059669', // Emerald
      description: 'Investigating edge AI model quantization techniques for microcontrollers and high-throughput concurrent TypeScript backend patterns.',
    },
  ];

  const philosophies = [
    {
      number: '01',
      title: 'Engineered for Measurable Utility',
      desc: 'Software must solve tangible problems for actual humans. Whether automating water pumps to prevent motor burnouts or streamlining municipal issue tickets, code should serve an unmistakable, verifiable purpose.',
    },
    {
      number: '02',
      title: 'First-Principles Understanding',
      desc: 'Rather than treating frameworks as magical abstractions, I study memory lifecycles, network protocols, algorithmic time complexities, and hardware constraints from the ground up.',
    },
    {
      number: '03',
      title: 'Clean Craftsmanship & Longevity',
      desc: 'Writing self-documenting code with strict types and modular components ensures software can evolve gracefully without buckling under organizational complexity.',
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      {/* Editorial Header */}
      <SectionHeading
        eyebrow="Editorial Profile"
        title="Engineering Solutions Through Curiosity & Discipline"
        description="An undergraduate developer combining computer science rigor, modern web engineering, and applied artificial intelligence."
      />

      {/* Main 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Personal Narrative */}
        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
          <p>
            Hello! I am <span className="text-stone-900 dark:text-white font-bold">{PROFILE_DATA.name}</span>, a computer science engineering undergraduate specializing in Artificial Intelligence and Machine Learning at{' '}
            <span className="text-stone-900 dark:text-stone-200 font-semibold">{PROFILE_DATA.institute}</span> in Maharashtra, India.
          </p>

          <p>
            Currently in my 5th semester, I treat software engineering as an iterative loop of understanding, building, measuring, and refining. Rather than confining myself solely to abstract theory or purely visual design, I work across the full spectrum: from low-level microcontroller sensors and C++ firmware to scalable React frontends and Python machine learning pipelines.
          </p>

          <p>
            My portfolio highlights include <strong className="text-stone-900 dark:text-white">CivicConnect</strong>, a civic engagement platform designed to bring transparency and geolocation triage to municipal repairs; <strong className="text-stone-900 dark:text-white">Smart Water Tank Automation</strong>, an IoT system that mitigates water wastage through ultrasonic level tracking and automated relay actuation; and <strong className="text-stone-900 dark:text-white">BottlePoints</strong>, an incentivized reverse-vending recycling concept.
          </p>

          <div className="p-6 rounded-3xl bg-amber-50/70 dark:bg-stone-900/60 border border-amber-900/15 dark:border-stone-800 text-xs sm:text-sm text-stone-800 dark:text-stone-200 space-y-2">
            <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-400 font-bold">
              <Target className="w-4 h-4" />
              <span>Career Trajectory & Goals</span>
            </div>
            <p className="leading-relaxed">
              Seeking an entry-level software developer, full-stack, or AI/ML engineering role where I can contribute to high-impact technical products while collaborating with senior engineers in a fast-paced environment.
            </p>
          </div>
        </div>

        {/* Right Column: Fast Facts & Identity Card */}
        <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-6 sm:p-7 space-y-6 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 border-b border-stone-200 dark:border-stone-800 pb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Academic & Technical Profile</span>
          </h3>

          <div className="space-y-4 text-xs font-mono">
            <div>
              <span className="text-stone-400">Institution:</span>
              <p className="text-stone-900 dark:text-stone-100 font-sans text-sm font-semibold mt-0.5">
                Rajarambapu Institute of Technology (RIT)
              </p>
            </div>
            <div>
              <span className="text-stone-400">Specialization:</span>
              <p className="text-stone-900 dark:text-stone-100 font-sans text-sm font-semibold mt-0.5">
                B.Tech Computer Science (AI & ML)
              </p>
            </div>
            <div>
              <span className="text-stone-400">Academic Standing:</span>
              <p className="text-stone-900 dark:text-stone-100 font-sans text-sm font-semibold mt-0.5">
                5th Semester (Active)
              </p>
            </div>
            <div>
              <span className="text-stone-400">Core Languages:</span>
              <p className="text-stone-900 dark:text-stone-100 font-sans text-sm font-semibold mt-0.5">
                Python, C++, TypeScript, JavaScript, SQL
              </p>
            </div>
            <div>
              <span className="text-stone-400">Location:</span>
              <p className="text-stone-900 dark:text-stone-100 font-sans text-sm font-semibold mt-0.5">
                Maharashtra, India
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-100 dark:border-stone-800">
            <Link
              to="/contact"
              className="w-full py-3 px-4 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Connect with Shreyas</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Identity Cards: Currently Learning, Building, Exploring */}
      <div className="mb-20">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-6">
          Continuous Engineering Momentum
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentFocusCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 hover:border-amber-400/60 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-850 border border-stone-200/80 dark:border-stone-800">
                      <Icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-stone-500">{card.tag}</span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2">{card.title}</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Developer Philosophy */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-6">
          Core Engineering Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.map((item) => (
            <div
              key={item.number}
              className="p-6 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-2xs"
            >
              <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400 mb-2 block">
                {item.number}.
              </span>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
