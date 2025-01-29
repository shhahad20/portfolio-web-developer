import { useEffect, useState } from "react";
import "../styles/hero.scss";

interface Snippet {
    text: string;
    top: string;
    left: string;
    delay: string;
  }
  const codeSnippets = [
    'console.log("Hello, World!");',
    "const fetchData = async () => {...};",
    'def greet(name): return f"Hello, {name}!"',
    'let user = { name: "Shahad", role: "Developer" };',
    'SELECT * FROM users WHERE role="admin";',
    "function add(a, b) { return a + b; }",
  ];

const Hero: React.FC = () => {
  const [activeSnippets, setActiveSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    const addSnippet = () => {
      const newSnippet: Snippet = {
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        top: `${Math.random() * 80 + 10}%`, // Random vertical placement (10%-90%)
        left: `${Math.random() * 80 + 10}%`, // Random horizontal placement (10%-90%)
        delay: `${Math.random() * 5}s`, // Random delay (0s - 5s)
      };

      setActiveSnippets((prev) => {
        if (prev.length > 6) prev.shift(); // Keep a max of 6 snippets
        return [...prev, newSnippet];
      });
    };

    const interval = setInterval(addSnippet, 2000); // Add new snippet every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero-section">
      <header>Source Code</header>

      <div className="hero-container">
        <div className="content">
          <p className="p-intro-text">
            Hi, I'm Source Code! A Passionate Developer Turning Ideas into
            Reality.
          </p>
          <h1 className="intro-text">
            Building innovative, efficient, and scalable solutions for the
            digital world.
          </h1>
          <div className="hero-btn-container">
            <button className="hero-btn">
              Find out more
              <span>
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM0 4.5H10V3.5H0L0 4.5Z"
                    fill="#A5B4FC"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Animated Code Background */}
      <div className="code-bg">
      {activeSnippets.map((snippet, index) => (
          <pre
            key={index}
            className="code-line"
            style={{ top: snippet.top, left: snippet.left, animationDelay: snippet.delay }}
          >
            {snippet.text}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default Hero;
