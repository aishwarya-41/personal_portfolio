import { useEffect, useRef } from 'react';

const Languages = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current.querySelectorAll('.language-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const languages = [
        { name: 'Tamil', level: 'Native', proficiency: 100 },
        { name: 'English', level: 'Fluent', proficiency: 100 },
        { name: 'French', level: 'Basics', proficiency: 30 },
    ];

    return (
        <div className="languages-container" ref={sectionRef}>
            <h2 className="section-title">Languages</h2>
            <div className="languages-grid">
                {languages.map((lang, index) => (
                    <div
                        key={index}
                        className="language-card card-surface"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="lang-header">
                            <h3>{lang.name}</h3>
                            <span className="lang-level">{lang.level}</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${lang.proficiency}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
