import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { EDUCATION_DATA } from '../data/education';
import { PROJECTS_DATA } from '../data/projects';
import { EXPERIENCES_DATA } from '../data/experience';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import { Download, Printer, Check } from 'lucide-react';

export const Resume: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      window.print();
      setDownloadSuccess(false);
    }, 400);
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      {/* Top Controls Bar (hidden during printing) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            Curriculum Vitae
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white">
            Professional Resume (ATS Formatted)
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-300 text-stone-700 dark:text-stone-200 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print View</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-2xl bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-stone-100 text-white dark:text-stone-950 text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Preparing PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
                <span>Save as PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ATS-Friendly Professional Paper Document */}
      <div className="rounded-3xl bg-white text-neutral-900 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(28,25,23,0.06)] border border-stone-200 leading-normal font-sans">
        {/* Document Header */}
        <div className="border-b-2 border-stone-900 pb-6 mb-8 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-950">
            {PROFILE_DATA.name}
          </h2>
          <p className="text-sm font-semibold text-stone-700 mt-1">
            B.Tech in Computer Science Engineering (Artificial Intelligence & Machine Learning)
          </p>
          <p className="text-xs text-stone-600 mt-0.5">
            {PROFILE_DATA.institute} · 5th Semester
          </p>

          {/* Contact Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-stone-700 font-medium">
            <span>{PROFILE_DATA.socials.email}</span>
            <span aria-hidden="true">·</span>
            <span>github.com/ShreyasThorat72</span>
            <span aria-hidden="true">·</span>
            <span>linkedin.com/in/shreyas-thorat-867040214</span>
            <span aria-hidden="true">·</span>
            <span>Maharashtra, India</span>
          </div>
        </div>

        {/* 1. Profile Summary */}
        <section className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2.5">
            Professional Summary
          </h3>
          <p className="text-xs text-stone-700 leading-relaxed">
            {PROFILE_DATA.bio}
          </p>
        </section>

        {/* 2. Education */}
        <section className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
            Education
          </h3>
          <div className="space-y-4">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <span className="font-bold text-stone-950">{edu.degree} — {edu.specialization}</span>
                  <span className="text-stone-600 font-mono text-[11px]">{edu.period}</span>
                </div>
                <div className="text-xs text-stone-700">
                  {edu.institute}, {edu.location}
                </div>
                <div className="mt-1 text-[11px] text-stone-600">
                  <span className="font-semibold text-stone-800">Relevant Coursework: </span>
                  {edu.keyCoursework.slice(0, 6).join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Technical Skills */}
        <section className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
            Technical Competencies
          </h3>
          <div className="space-y-1.5 text-xs text-stone-700">
            <div>
              <span className="font-bold text-stone-900">Languages: </span>
              Python, C++, TypeScript, JavaScript (ES6+), Java, SQL, HTML5/CSS3
            </div>
            <div>
              <span className="font-bold text-stone-900">Frameworks & Web: </span>
              React.js, Node.js, Express.js, Tailwind CSS, RESTful APIs
            </div>
            <div>
              <span className="font-bold text-stone-900">AI & Data: </span>
              Scikit-Learn, Pandas, NumPy, OpenCV, Supervised/Unsupervised Learning
            </div>
            <div>
              <span className="font-bold text-stone-900">IoT & Hardware: </span>
              ESP32, Arduino, Microcontroller C++, Ultrasonic Sensors, Relay Modules
            </div>
            <div>
              <span className="font-bold text-stone-900">Developer Tools: </span>
              Git, GitHub, VS Code, Linux/Bash, Postman, Vercel
            </div>
          </div>
        </section>

        {/* 4. Projects */}
        <section className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
            Key Software & Engineering Projects
          </h3>
          <div className="space-y-4">
            {PROJECTS_DATA.filter((p) => !p.isPlaceholder).map((proj) => (
              <div key={proj.id} className="text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-stone-950">
                    {proj.title} <span className="font-normal text-stone-600">— {proj.tagline}</span>
                  </span>
                  <span className="text-[11px] font-mono text-stone-600">{proj.category}</span>
                </div>
                <p className="mt-1 text-stone-700 leading-relaxed">
                  {proj.shortDescription}
                </p>
                <div className="mt-1.5 text-[11px] text-stone-600">
                  <span className="font-semibold text-stone-800">Stack: </span>
                  {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Activities & Leadership */}
        <section className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
            Experience & Technical Activities
          </h3>
          <div className="space-y-3">
            {EXPERIENCES_DATA.filter((e) => !e.isPlaceholder).map((exp) => (
              <div key={exp.id} className="text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-stone-950">{exp.role}</span>
                  <span className="text-stone-600 font-mono text-[11px]">{exp.period}</span>
                </div>
                <div className="text-stone-700">{exp.organization} · {exp.location}</div>
                <ul className="mt-1 space-y-0.5 list-disc list-inside text-stone-700 text-[11px]">
                  {exp.responsibilities.slice(0, 2).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Achievements & Certifications */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-3">
            Achievements & Showcases
          </h3>
          <div className="space-y-2 text-xs text-stone-700">
            {ACHIEVEMENTS_DATA.filter((a) => !a.isPlaceholder).map((ach) => (
              <div key={ach.id}>
                <span className="font-bold text-stone-900">{ach.title} </span>
                <span className="text-stone-600 font-mono text-[11px]">({ach.date}) — </span>
                <span>{ach.description}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
