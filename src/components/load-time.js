import React, { useEffect, useState } from 'react';

const LoadTime = () => {
  const [loadTime, setloadTime] = useState('')

  const measureLoadTime = () => {
    const perf = performance.getEntriesByType("navigation");
    const dur = (Math.round((perf[0].domComplete - perf[0].startTime) / 100) / 10).toLocaleString();
    setloadTime(dur);
  }

  useEffect(() => {
    window.addEventListener('load', measureLoadTime())
    return () => {
      window.removeEventListener('load', measureLoadTime)
    }
  }, [])

  return (
    loadTime && (
      <>Initial render in {loadTime} seconds.</>
    )

  )
};

export default LoadTime;