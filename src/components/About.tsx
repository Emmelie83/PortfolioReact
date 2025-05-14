import React from "react";

    const About: React.FC = () => {
    return (
        <div className="w-3/5 mb-10">
            <h2>About Me</h2>
            <p><strong>Tech moves fast — and I love
                trying to keep up.</strong></p>
            <p>Whether it’s building APIs in Java or sketching interfaces in
                Figma, I enjoy being at the intersection of logic and
                creativity. I earned my degree in Java Development from
                IT-Högskolan, a Swedish vocational university focused on IT
                and software development.</p>

            <p>Today, I mainly work with Java and Spring Boot on
                the backend, and Thymeleaf or Vue on the
                frontend. For UX design, I use Figma as my primary design
                tool.</p>

            <p>My journey into software development began when I decided to
                leave a career I truly valued: translation. Not
                because the field was outdated, but because I felt I had
                stopped growing. I was looking for something dynamic —
                something
                that would challenge me, and keep doing so.</p>

            <p><strong>I found that in coding</strong>. Today, I learn
                something new almost
                every day. And with tech constantly evolving, I don’t see
                that changing anytime soon.</p>

            <p>Outside of work, I like to stay active with bouldering,
                unwind in nature, and get absorbed in a good book. I also
                enjoy connecting with new people — so feel free to reach out
                on LinkedIn or drop me an email!</p>
            <a
                href="https://www.linkedin.com/in/emmeliejohansson/"><img
                    className="w-10 h-10 mt-4" src="./icons/linkedin.svg"
                    alt="LinkedIn Profile" /></a>
        </div>
    );
};

export default About;