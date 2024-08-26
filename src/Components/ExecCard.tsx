import React, { useEffect, useRef } from 'react';
import Socials from './Socials';

interface Props {
    imgURL: string;
    name: string;
    subname: string;
    desc: string;
}

function ExecCard({ imgURL, name, subname, desc }: Props) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1 // Adjust threshold as needed
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Optional: comment this line if you want to re-apply the animation on re-entry
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        // Clean up the observer on component unmount
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div className="contact__container">
            <div className="contact__card" ref={cardRef}>
                <div className="contact__image__col">
                    <div className="contact__image__content">
                        <div className="contact__image">
                            <img src={imgURL} alt="Profile" />
                        </div>
                        <div className="contact__label"></div>
                    </div>
                </div>
                <div className="contact__text__col">
                    <div className="contact__name">
                        <h1>{name}</h1>
                        <h2>{subname}</h2>
                    </div>
                    <div className="contact__text">
                        <p>{desc}</p>
                        <div className="card__foot">
                            <div className="body__button">
                                <div className="body__button__bg">
                                    <button type="button" onClick={() => {}}>More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExecCard;
