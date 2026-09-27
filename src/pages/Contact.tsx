import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactTerminal } from '../components/contact/ContactTerminal';
import { ContactForm } from '../components/contact/ContactForm';
import { SOCIAL_LINKS } from '../data/socials';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Direct Transmission"
        title="Get in Touch & Collaborate"
        description="Whether you are discussing entry-level software developer roles, technical projects, or academic collaborations, I am glad to connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Terminal & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <ContactTerminal />

          <div className="p-6 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 space-y-4 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200">
              Direct Contact Channels
            </h4>

            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center space-x-3 p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-amber-400/60 transition-colors shadow-2xs"
              >
                <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 border border-amber-200/60">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono block">Primary Email</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">{SOCIAL_LINKS.email}</span>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-blue-400/60 transition-colors shadow-2xs"
              >
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0A66C2] border border-blue-200/60">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono block">Professional Network</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">linkedin.com/in/shreyas-thorat</span>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-stone-400 transition-colors shadow-2xs"
              >
                <div className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono block">Version Control</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">github.com/ShreyasThorat72</span>
                </div>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-stone-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>RIT Campus, Islampur, Sangli, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
