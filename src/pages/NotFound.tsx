import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertOctagon } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center text-stone-900 dark:text-stone-100">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center mx-auto text-amber-800 dark:text-amber-400">
          <AlertOctagon className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400">
            HTTP 404 · PAGE NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white">
            Route Not Resolved
          </h1>
          <p className="text-xs text-stone-500 font-medium">
            The requested page is not registered in this application.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-[#121110] border border-stone-200 dark:border-stone-800 font-mono text-[11px] text-stone-500 text-left space-y-1">
          <p className="text-amber-800 dark:text-amber-400 font-semibold">&gt; Destination not found</p>
          <p className="text-stone-400">&gt; Returning to home portfolio index</p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-2xl bg-stone-900 dark:bg-white hover:bg-stone-800 text-white dark:text-stone-950 font-bold text-xs transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home Route</span>
        </Link>
      </div>
    </div>
  );
};
