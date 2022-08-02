import React, { useState, useEffect, useMemo } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false)

  const options = {
    // rootMargin: "200px 0px 0px 0px"
    threshold: 0.1
  }

  const observer = useMemo (() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting), 
    options
  ))

  useEffect (() => {
    observer.observe(ref.current)
    
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}

export default useOnScreen;