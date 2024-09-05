import { useState, useEffect, useRef } from 'react';
import styles from '../css_modules/Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const numberRef = useRef(null);

  // Use IntersectionObserver to detect when the element is in view
  useEffect(() => {
    const currentElement = numberRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsCounting(true); // Start counting when in view
      }
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Counter logic
  useEffect(() => {
    if (isCounting && count < 250000) {
      const increment = 250000 / 1000; // Calculate increment per millisecond for 1 seconds
      const interval = setInterval(() => {
        setCount((prev) => {
          const nextValue = prev + increment;
          if (nextValue >= 250000) {
            clearInterval(interval);
            return 250000; // Stop at 250000
          }
          return nextValue;
        });
      }, 1); // Update every millisecond

      return () => clearInterval(interval); // Cleanup the interval
    }
  }, [isCounting, count]);

  return (
    <div className={styles.textContainer}>
      <p className={styles.number} ref={numberRef}>
        {Math.floor(count)} + 
      </p>
      <p className={styles.text}>izgrađenih metara kvadratnih</p>
    </div>
  );
};

export default Counter;