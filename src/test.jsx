import React, { useEffect } from 'react';
import anime from 'animejs';
import ButtonContainer from './UniversalComponents/ButtonContainer';
import "./index.css";
import header1 from "../public/images/header/header1.jpg";
import header2 from "../public/images/header/header2.jpg";
import header3 from "../public/images/header/header3.jpg";
import header4 from "../public/images/header/header4.jpg";

const itemsData = [
    {
        content: 'Cestovná kancelária E-Travel',
        imgs: [
            header4,
            header2,
            header3,
            header1,
        ],
    },
];

function Test({ link }) {
    useEffect(() => {
        const item = document.querySelector('.item');
        const textWrapper = item.querySelector('.wrap');
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        // Initial animation trigger
        const initialText = item.querySelectorAll('.content .letter');
        const initialImgs = item.querySelectorAll('.img');

        const t = 400;
        const imgOffset = t * 0.8;

        anime.timeline({ easing: 'easeInOutQuint', duration: t })
            .add({
                targets: initialText,
                translateY: ['.75em', 0],
                opacity: [0, 1],
                easing: 'easeOutQuint',
                duration: t * 1.5,
                delay: (el, i) => 10 * (i + 1),
            })
            .add(
                {
                    targets: initialImgs[0],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: initialImgs[1],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['-15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: initialImgs[2],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: initialImgs[3],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['-15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            );
    }, []);

    const handleClick = () => {
        const item = document.querySelector('.item');
        const text = item.querySelectorAll('.content .letter');
        const imgs = item.querySelectorAll('.img');

        const t = 400;
        const imgOffset = t * 0.8;

        anime.timeline({ easing: 'easeInOutQuint', duration: t })
            .add({
                targets: text,
                translateY: [0, '-.75em'],
                opacity: [1, 0],
                easing: 'easeInQuint',
                duration: t,
                delay: (el, i) => 10 * (i + 1),
            })
            .add(
                {
                    targets: imgs[0],
                    translateY: -600,
                    translateZ: 0,
                    rotate: [0, '-15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: imgs[1],
                    translateY: -600,
                    translateZ: 0,
                    rotate: [0, '15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: imgs[2],
                    translateY: -600,
                    translateZ: 0,
                    rotate: [0, '-15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: imgs[3],
                    translateY: -600,
                    translateZ: 0,
                    rotate: [0, '15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                '-=' + imgOffset
            )
            .add({
                targets: text,
                translateY: ['.75em', 0],
                opacity: [0, 1],
                easing: 'easeOutQuint',
                duration: t * 1.5,
                delay: (el, i) => 10 * (i + 1),
            })
            .add(
                {
                    targets: imgs[0],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: imgs[1],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['-15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: imgs[2],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            )
            .add(
                {
                    targets: imgs[3],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['-15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                '-=' + imgOffset
            );
    };

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center text-white relative overflow-hidden">
            <div className='bg-red-600 display-flex justify-center mt-[30%] z-40'>
                <ButtonContainer link={link}/>
            </div>
            <div className="item absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="content absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center text-8xl font-bold">
                    <div className="wrap text-center text-shadow-xl max-w-lg">
                        {itemsData[0].content}
                    </div>
                </div>
                <div className="imgs relative w-3/5 pt-[60%]">
                    <div className="grid absolute top-0 left-0 w-full h-full grid-cols-12 grid-rows-12 gap-4 transform rotate-[-20deg] opacity-65">
                        {itemsData[0].imgs.map((img, imgIndex) => (
                            <div key={imgIndex} className={`img absolute w-full h-full ${imgIndex === 0 ? 'col-span-4 row-span-6' : imgIndex === 1 ? 'col-start-5 col-span-8 row-span-5' : imgIndex === 2 ? 'col-span-8 row-start-7 row-span-5' : 'col-start-9 col-span-4 row-span-6'}`}>
                                <img src={img} alt="" className="absolute top-0 w-full h-full object-cover filter brightness-110 contrast-110 saturate-130 mix-blend-screen" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
