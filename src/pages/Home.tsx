import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TelegramIcon from "../assets/telegram.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import Link from "../assets/link.svg?react";
import InstaIcon from "../assets/insta.svg?react";
import ChevronRightIcon from "../assets/chevron-right.svg?react";
import GithubIcon from "../assets/github.svg?react";
import CssIcon from "../assets/stack/skills/css3-original 1.svg?react";
import HtmlIcon from "../assets/stack/skills/html5-original 1.svg?react";
import JsIcon from "../assets/stack/skills/javascript-original 1.svg?react";
import PhpIcon from "../assets/stack/skills/php-original 1.svg?react";
import ReactIcon from "../assets/stack/skills/react-original 1.svg?react";
import SassIcon from "../assets/stack/skills/sass-original 1.svg?react";
import TailwindIcon from "../assets/stack/skills/tailwindcss-original 1.svg?react";
import EslintIcon from "../assets/tools/skills/eslint-original 1.svg?react";
import FigmaIcon from "../assets/tools/skills/figma-original 1.svg?react";
import GitIcon from "../assets/tools/skills/git-original 1.svg?react";
import GithubIcon2 from "../assets/tools/skills/github-original 1.svg?react";
import JestIcon from "../assets/tools/skills/jest-plain 1.svg?react";
import NpmIcon from "../assets/tools/skills/npm-original-wordmark 1.svg?react";
import VscodeIcon from "../assets/tools/skills/vscode-original 1.svg?react";
import WebpackIcon from "../assets/tools/skills/webpack-original 1.svg?react";
import TsIcon from "../assets/stack/skills/typescript-original 1.svg?react";
import VueIcon from "../assets/stack/skills/vuejs-original 1.svg?react";
import me from "../assets/me.png";
import "./Home.scss";
const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease",
    });
  }, []);
  return (
    <div className="snap-wrapper">
      <div className="hero container snap-section">
        <aside className="left-aside">
          <span className="heading">
            <h3 data-aos="fade-up">Mykhailo Kuptsov</h3>
            <h1 data-aos="fade-up" data-aos-delay="100">
              Web Developer
            </h1>
          </span>
          <div className="buttons">
            <span className="icon" data-aos="fade-up" data-aos-delay="300">
              <TelegramIcon />
            </span>
            <span className="icon" data-aos="fade-up" data-aos-delay="400">
              <LinkedInIcon />
            </span>
            <span className="icon" data-aos="fade-up" data-aos-delay="500">
              <InstaIcon />
            </span>
          </div>
        </aside>
        <aside className="right-aside">
          <div className="text">
            <h4 data-aos="fade-left" data-aos-delay="300">
              — Introduction
            </h4>
            <h3 data-aos="fade-left" data-aos-delay="400">
              Frontend Web Developer, based in London
            </h3>
            <p data-aos="fade-left" data-aos-delay="500">
              Throughout my development journey, I've worked on a diverse range
              of projects - from interactive web applications and landing pages
              to automation tools and chatbots. My portfolio demonstrates a
              solid understanding of JavaScript, TypeScript, and modern frontend
              technologies, as well as a keen eye for user experience and clean
              code. I enjoy solving real-world problems with code, constantly
              learning new approaches, and bringing ideas to life through
              technology.
            </p>
          </div>
          <button data-aos="fade-up" data-aos-delay="500">
            View all projects
            <span className="btn-icon">
              <ChevronRightIcon />
            </span>
          </button>
        </aside>
        <span className="me-lol" data-aos="fade-up" data-aos-delay="700">
          <img src={me} alt="mishapro" />
        </span>
      </div>
      <div className="skills-section container snap-section">
        <div className="grid-container">
          <div className="grid-item">
            <div className="text">
              <span>
                <h5>Who am I?</h5>
                <h3>Frontend Developer</h3>
              </span>
              <p>
                Building digital products with attention to details, usability,
                and clean code. Passionate about web technologies and
                automation.
              </p>
            </div>
          </div>
          <div className="grid-icons">
            <div className="grid-icon">
              <InstaIcon />
            </div>
            <div className="grid-icon">
              <TelegramIcon />
            </div>
            <div className="grid-icon">
              <LinkedInIcon />
            </div>
            <div className="grid-icon">
              <GithubIcon />
            </div>
          </div>
          <div className="grid-item-wide">
            <div className="text">
              <h2>Shaping Ideas Into Code.</h2>
            </div>
          </div>
          <div className="grid-item tech-stack">
            <div className="tech-icons">
              <div className="icon">
                <HtmlIcon />
              </div>
              <div className="icon">
                <CssIcon />
              </div>
              <div className="icon">
                <JsIcon />
              </div>
              <div className="icon">
                <TsIcon />
              </div>
              <div className="icon">
                <ReactIcon />
              </div>
              <div className="icon">
                <VueIcon />
              </div>
              <div className="icon">
                <SassIcon />
              </div>
              <div className="icon">
                <TailwindIcon />
              </div>
              <div className="icon">
                <PhpIcon />
              </div>
            </div>
            <div className="text">
              <span>
                <h5>Most Used</h5>
                <h3>Tech Stack</h3>
              </span>
            </div>
          </div>
          <div className="grid-item-wide projects">
            <div className="text">
              <h5>Showcase</h5>
              <h3>Projects</h3>
            </div>
            <div className="icon">
              <Link />
            </div>
          </div>
          <div className="grid-item tech-stack">
            <div className="tech-icons">
              <div className="icon">
                <EslintIcon />
              </div>
              <div className="icon">
                <FigmaIcon />
              </div>
              <div className="icon">
                <GitIcon />
              </div>
              <div className="icon">
                <GithubIcon2 />
              </div>
              <div className="icon">
                <JestIcon />
              </div>
              <div className="icon">
                <NpmIcon />
              </div>
              <div className="icon">
                <VscodeIcon />
              </div>
              <div className="icon">
                <WebpackIcon />
              </div>
            </div>
            <div className="text">
              <span>
                <h5>Most Used</h5>
                <h3>Tools</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
