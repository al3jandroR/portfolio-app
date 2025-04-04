"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
      <>
        <header>
            <a href="#" className = "logo-holder">
                <div className="logo">AR</div>
                <div className="logo-text">Portfolio Website</div>
            </a>
            <nav>
                <ul id="menu" className = {menuOpen ? "active" : ""}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="https://github.com/al3jandroR">Projects</a></li>
                    <li><a href="mailto:a.rodriguez727@icloud.com" className="button">Contact Me</a></li>
                </ul>
                <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                      </svg>
                </a>
            </nav>
        </header>
        <main>
            <section className="hero container">
                <div className="hero-blue">
                    <div>
                        <h1><small>Hi I am</small>
                            Alejandro Rodriguez
                        </h1>
                        <p>
                            Full-Stack Developer
                            <span>
                                
                            </span>

                        </p>
                        <div className="call-to-action">
                            <a href="https://github.com/al3jandroR" className="button black">
                                Github
                            </a>
                            {/*<a href="#" className="button white">
                                View Resume
                            </a>*/}
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/al3jandroR">
                                <Image src="/imgs/github.png" alt="github" width = "50" height = "50"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-yellow">
                    <Image src="/imgs/csu.png" alt="CSU Image" width={440} height={340}/>
                </div>
            </section>
            <section className="logos container">
                <div className="marquee">
                    <div className="track">
                        <Image src="/imgs/html.png"
                        alt="HTML" width="128" height="128"/>
                        <Image src="/imgs/css.png"
                        alt="CSS" width="128" height="128"/>
                        <Image src="/imgs/javascript.png"
                        alt="JS" width="128" height="128"/>
                        <Image src="/imgs/azure.png"
                        alt="Azure" width="128" height="128"/>
                        <Image src="/imgs/vscode.png"
                        alt="VS Code" width="128" height="128"/>
                        <Image src="/imgs/python.png"
                        alt="Python" width="128" height="128"/>
                        <Image src="/imgs/java.png"
                        alt="Java" width="128" height="128"/>
                        <Image src="/imgs/c++.png"
                        alt="C++" width="128" height="128"/>
                        <Image src="/imgs/html.png"
                        alt="HTML" width="128" height="128"/>
                        <Image src="/imgs/css.png"
                        alt="CSS" width="128" height="128"/>
                        <Image src="/imgs/javascript.png"
                        alt="JS" width="128" height="128"/>
                        <Image src="/imgs/azure.png"
                        alt="Azure" width="128" height="128"/>
                        <Image src="/imgs/vscode.png"
                        alt="VS Code" width="128" height="128"/>
                        <Image src="/imgs/python.png"
                        alt="Python" width="128" height="128"/>
                        <Image src="/imgs/java.png"
                        alt="Java" width="128" height="128"/>
                        <Image src="/imgs/c++.png"
                        alt="C++" width="128" height="128"/>
                        <Image src="/imgs/html.png"
                        alt="HTML" width="128" height="128"/>
                        <Image src="/imgs/css.png"
                        alt="CSS" width="128" height="128"/>
                        <Image src="/imgs/javascript.png"
                        alt="JS" width="128" height="128"/>
                        <Image src="/imgs/azure.png"
                        alt="Azure" width="128" height="128"/>
                        <Image src="/imgs/vscode.png"
                        alt="VS Code" width="128" height="128"/>
                    </div>
                </div>
            </section>
            <section id="skills" className="skills container">
                <h2>
                    <small>About Me</small>
                    Skills
                </h2>
                <div className="holder-blue">
                    <div className="left-column">
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Vue</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Python</li>
                            <li>Flask</li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <h3> A bit about me</h3>
                        <p>
                            New software developer with a passion for learning and creating. I have experience with a variety of programming languages and frameworks. I am always looking for new opportunities to learn and grow as a developer.
                        </p>
                    </div>
                </div>
            </section>
            {/*<section className="work-experience container">
                <h2>
                    <small>Recent</small>
                    Work Experience
                </h2>
                <div className="jobs">
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/workplace-1.jpg"
                                alt="Workplace 1"
                                width="100%"/>
                                <figcaption>Workplace 1</figcaption>
                            </div>
                        </figure>
                        <h3>Workplace 1</h3>
                        <div>2020</div>
                        <p>example description</p>
                    </article>
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/workplace-2.jpg"
                                alt="Workplace 2"
                                width="100%"/>
                                <figcaption>Workplace 2</figcaption>
                            </div>
                        </figure>
                        <h3>Workplace 2</h3>
                        <div>2020</div>
                        <p>example description</p>
                    </article>
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/workplace-3.jpg"
                                alt="Workplace 3"
                                width="100%"/>
                                <figcaption>Workplace 3</figcaption>
                            </div>
                        </figure>
                        <h3>Workplace 3</h3>
                        <div>2020</div>
                        <p>example description</p>
                    </article>
                </div>
            </section>*/}
            {/*<section id="projects" className="bento">
                <h2>
                    <small>Previous</small>
                    Projects
                </h2>
                <div className="bento-grid">
                    <a href="#" className="bento-item">
                        <img src="#"
                        alt="bento1" width="100%"/>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="#"
                        alt="bento2" width="100%"/>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="#"
                        alt="bento3" width="100%"/>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="#"
                        alt="bento4" width="100%"/>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="#"
                        alt="bento5" width="100%"/>
                    </a>
                    <a href="#" className="bento-item">
                        <img src="#"
                        alt="bento6" width="100%"/>
                    </a>
                </div>
            </section>*/}
        </main>
      </>
  );
}
