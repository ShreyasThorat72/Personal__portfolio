/**
 * Core Web Vitals Performance Monitoring Utility
 * Tracks LCP, FID, INP, CLS, FCP, and TTFB using native PerformanceObserver APIs
 * and logs formatted metrics to the console during development.
 */

export interface MetricRating {
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  unit: string;
}

export interface WebVitalMetric {
  name: 'LCP' | 'FID' | 'INP' | 'CLS' | 'FCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  entries?: PerformanceEntry[];
}

export type PerformanceCallback = (metric: WebVitalMetric) => void;

// Google Web Vitals Thresholds
const THRESHOLDS: Record<WebVitalMetric['name'], [number, number]> = {
  CLS: [0.1, 0.25],
  FCP: [1800, 3000],
  FID: [100, 300],
  INP: [200, 500],
  LCP: [2500, 4000],
  TTFB: [800, 1800],
};

function getRating(name: WebVitalMetric['name'], value: number): 'good' | 'needs-improvement' | 'poor' {
  const [goodLimit, needsImprovementLimit] = THRESHOLDS[name];
  if (value <= goodLimit) return 'good';
  if (value <= needsImprovementLimit) return 'needs-improvement';
  return 'poor';
}

const RATING_COLORS = {
  good: '#10B981',             // Emerald
  'needs-improvement': '#F59E0B', // Amber
  poor: '#EF4444',             // Red
};

function logMetric(metric: WebVitalMetric) {
  const isCLS = metric.name === 'CLS';
  const displayValue = isCLS ? metric.value.toFixed(3) : `${Math.round(metric.value)}ms`;
  const color = RATING_COLORS[metric.rating];

  // Stylized console output for developer clarity
  console.log(
    `%c[Web Vitals] %c${metric.name} %c${displayValue} %c(${metric.rating})`,
    'color: #3B82F6; font-weight: bold;',
    'color: #9CA3AF; font-weight: 600;',
    `color: ${color}; font-weight: bold;`,
    `color: ${color}; font-size: 10px; text-transform: uppercase;`
  );
}

/**
 * Observes First Contentful Paint (FCP)
 */
function observeFCP(onReport: PerformanceCallback) {
  try {
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
        const value = entry.startTime;
        onReport({
          name: 'FCP',
          value,
          rating: getRating('FCP', value),
          entries: [entry],
        });
        observer.disconnect();
      }
    });
    observer.observe({ type: 'paint', buffered: true });
  } catch {
    // Unsupported entry type
  }
}

/**
 * Observes Largest Contentful Paint (LCP)
 */
function observeLCP(onReport: PerformanceCallback) {
  try {
    let lcpEntry: PerformanceEntry | null = null;
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        lcpEntry = entries[entries.length - 1];
      }
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });

    // Report final LCP upon user interaction or visibility change
    const stopAndReport = () => {
      if (lcpEntry) {
        const value = lcpEntry.startTime;
        onReport({
          name: 'LCP',
          value,
          rating: getRating('LCP', value),
          entries: [lcpEntry],
        });
        observer.disconnect();
      }
    };

    ['keydown', 'click', 'visibilitychange'].forEach((event) => {
      window.addEventListener(event, stopAndReport, { once: true, capture: true });
    });
  } catch {
    // Unsupported entry type
  }
}

/**
 * Observes Cumulative Layout Shift (CLS)
 */
function observeCLS(onReport: PerformanceCallback) {
  try {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];

    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as any[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    const reportCLS = () => {
      onReport({
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue),
        entries: clsEntries,
      });
    };

    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        reportCLS();
      }
    });
  } catch {
    // Unsupported entry type
  }
}

/**
 * Observes First Input Delay (FID)
 */
function observeFID(onReport: PerformanceCallback) {
  try {
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as any[]) {
        const value = entry.processingStart - entry.startTime;
        onReport({
          name: 'FID',
          value,
          rating: getRating('FID', value),
          entries: [entry],
        });
        observer.disconnect();
      }
    });
    observer.observe({ type: 'first-input', buffered: true });
  } catch {
    // Unsupported entry type
  }
}

/**
 * Observes Time to First Byte (TTFB)
 */
function observeTTFB(onReport: PerformanceCallback) {
  try {
    const observer = new PerformanceObserver((entryList) => {
      const navigationEntry = entryList.getEntries()[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const value = navigationEntry.responseStart;
        onReport({
          name: 'TTFB',
          value,
          rating: getRating('TTFB', value),
          entries: [navigationEntry],
        });
        observer.disconnect();
      }
    });
    observer.observe({ type: 'navigation', buffered: true });
  } catch {
    // Fallback using timing if available
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const value = Math.max(timing.responseStart - timing.requestStart, 0);
      onReport({
        name: 'TTFB',
        value,
        rating: getRating('TTFB', value),
      });
    }
  }
}

/**
 * Initializes Core Web Vitals monitoring.
 * In development mode, metrics are logged to the console automatically.
 *
 * @param callback Optional custom handler for telemetry reporting
 * @param forceEnable Set to true to enable logging even in production builds
 */
export function initPerformanceMonitoring(
  callback?: PerformanceCallback,
  forceEnable = false
) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const isDev = import.meta.env.DEV || forceEnable;

  const handleReport: PerformanceCallback = (metric) => {
    if (isDev) {
      logMetric(metric);
    }
    if (callback) {
      callback(metric);
    }
  };

  // Register all Core Web Vital observers safely
  observeFCP(handleReport);
  observeLCP(handleReport);
  observeCLS(handleReport);
  observeFID(handleReport);
  observeTTFB(handleReport);
}
