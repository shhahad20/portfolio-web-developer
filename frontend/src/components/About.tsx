import "../styles/about.scss";

const About = () => {
  return (
    <section id="about-section">
      <div className="about-container">
        <div className="code-border-container">
        {/* <div className="code-intro-conatiner">
          <div className="code-intro"><p>print(<span className="highlight">"Meet the Code Whisperer."</span>)</p> <div className="code-span"></div></div>
        </div> */}
        <code className="top-code">print("Meet the Code whisperer.")</code>
        <div className="content-box">
          <p className="p-text">
            I’m a self-driven programmer with 5 years of experience in developing
            robust, scalable, and user-friendly applications. My expertise spans across a
            wide range of technologies, including
          </p>
          <div className="languages">
            <img src="/js.svg" alt="JavaScript" />
            <img src="/py.svg" alt="Python"  />
            <img src="/react.svg" alt="React" />
            <img src="/node.svg" alt="Node.js"  />
          </div>
          <p className="p-text">
            I enjoy collaborating with clients to turn their ideas into functional and
            aesthetically pleasing digital solutions. When I'm not coding, I love
            contributing to open-source projects and exploring the latest trends in tech.
          </p>
          {/* <p className="code-output">Meet the Code Whisperer.</p> */}
        </div>
        <code className="bottom-output">Meet the Code Whisperer.</code>
        </div>
      </div>
    </section>
  );
};

export default About;
