




import React, { useEffect, useState } from "react";

const DynamicText  = () => {
  const texts = [
    "Frontend Developer |",
    "Frontend Deve |",
    "UI/UX Designer",
    "Fullstack Dev 🚀"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true); // for blinking cursor

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // Optional blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono whitespace-normal break-words  px-2"
>
  {texts[index].substring(0, subIndex)}
  <span style={{ opacity: blink ? 1 : 0 }}>|</span>
</div>

  );
};

export default DynamicText ;

