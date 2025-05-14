import React from "react";

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="skills-wrapper">
        <div className="skill-category">
          <ul>
            <li>
              <img src="./icons/springboot.svg" alt="Spring Boot" />
              Spring Boot
            </li>
            <li>
              <img
                src="./icons/springsecurity.svg"
                alt="Spring Security"
              />
              Spring Security
            </li>
            <li>
              <img src="./icons/maven.svg" alt="Maven" />
              Maven
            </li>
            <li>
              <img src="./icons/gradle.svg" alt="Gradle" />
              Gradle
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <ul>
            <li>
              <img src="./icons/html.svg" alt="HTML" />
              HTML
            </li>
            <li>
              <img src="./icons/css.svg" alt="CSS" />
              CSS
            </li>
            <li>
              <img src="./icons/vue.svg" alt="Vue.js" />
              Vue.js
            </li>
            <li>
              <img src="./icons/thymeleaf.svg" alt="Thymeleaf" />
              Thymeleaf
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <ul>
            <li>
              <img src="./icons/docker.svg" alt="Docker" />
              Docker
            </li>
            <li>
              <img src="./icons/junit.svg" alt="JUnit" />
              JUnit
            </li>
            <li>
              <img src="./icons/git.svg" alt="Git" />
              Git
            </li>
            <li>
              <img src="./icons/postman.svg" alt="Postman" />
              Postman
            </li>
          </ul>
        </div>
        <div className="skill-category">
          <ul>
            <li>
              <img src="./icons/java.svg" alt="Java" />
              Java
            </li>
            <li>
              <img src="./icons/javascript.svg" alt="Javascript" />
              Javascript
            </li>
            <li>
              <img src="./icons/python.svg" alt="Python" />
              Python
            </li>
            <li>
              <img src="./icons/kotlin.svg" alt="Kotlin" />
              Kotlin
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
