import { useEffect, useState } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export const useTextScramble = (phrases: string[], interval = 3000) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const targetText = phrases[phraseIndex];
    let iteration = 0;
    const maxIterations = targetText.length;

    const scrambleInterval = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iteration += 1 / 3;

      if (iteration >= maxIterations) {
        clearInterval(scrambleInterval);
        setDisplayText(targetText);
      }
    }, 30);

    const phraseTimeout = setTimeout(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, interval);

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(phraseTimeout);
    };
  }, [phraseIndex, phrases, interval]);

  return displayText;
};
