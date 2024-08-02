import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import "./index.css";
import ButtonContainer from './UniversalComponents/ButtonContainer';

const itemsData = [
    {
        content: 'Cestovná kancelária E-Travel',
        imgs: [
            'https://picsum.photos/seed/a/700/700',
            'https://picsum.photos/seed/b/700/700',
            'https://picsum.photos/seed/c/700/700',
            'https://picsum.photos/seed/d/700/700',
        ],
    },
];

function Test({link}) {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const items = document.querySelectorAll('.slider .item');
        items.forEach((item) => {
            const textWrapper = item.querySelector('.wrap');
            textWrapper.innerHTML = textWrapper.textContent.replace(
                /\S/g,
                "<span class='letter'>$&</span>"
            );
        });

        // Initial animation trigger
        const initialItem = items[0];
        const initialText = initialItem.querySelectorAll('.content .letter');
        const initialImgs = initialItem.querySelectorAll('.img');

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

    const anim = (currentItem, newItem, callback) => {
        const currentImgs = currentItem.querySelectorAll('.img');
        const currentText = currentItem.querySelectorAll('.content .letter');
        const nextImgs = newItem.querySelectorAll('.img');
        const nextText = newItem.querySelectorAll('.content .letter');

        const t = 400;
        const offset = '-=' + t * 0.4;
        const imgOffset = t * 0.8;

        const tl = anime.timeline({
            easing: 'easeInOutQuint',
            duration: t,
            complete: callback,
        });

        tl.add({
            targets: currentText,
            translateY: [0, '-.75em'],
            opacity: [1, 0],
            easing: 'easeInQuint',
            duration: t,
            delay: (el, i) => 10 * (i + 1),
        })
            .add(
                {
                    targets: currentImgs[0],
                    translateY: -600,
                    translateZ: 0,
                    rotate: [0, '-15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                offset
            )
            .add(
                {
                    targets: currentImgs[1],
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
                    targets: currentImgs[2],
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
                    targets: currentImgs[3],
                    translateY: -600,
                    translateZ: 0,
                    rotate: [0, '15deg'],
                    opacity: [1, 0],
                    easing: 'easeInCubic',
                },
                '-=' + imgOffset
            )
            .add({
                targets: currentItem,
                opacity: 0,
                visibility: 'hidden',
                duration: 10,
                easing: 'easeInCubic',
            })
            .add(
                {
                    targets: newItem,
                    opacity: 1,
                    visibility: 'visible',
                    duration: 10,
                },
                offset
            )
            .add(
                {
                    targets: nextImgs[0],
                    translateY: [600, 0],
                    translateZ: 0,
                    rotate: ['15deg', 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                },
                offset
            )
            .add(
                {
                    targets: nextImgs[1],
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
                    targets: nextImgs[2],
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
                    targets: nextImgs[3],
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
                    targets: nextText,
                    translateY: ['.75em', 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: 'easeOutQuint',
                    duration: t * 1.5,
                    delay: (el, i) => 10 * (i + 1),
                },
                offset
            );
    };

    const updateSlider = (newIndex) => {
        const items = document.querySelectorAll('.slider .item');
        const currentItem = items[current];
        const newItem = items[newIndex];

        const callback = () => {
            currentItem.classList.remove('is-active');
            newItem.classList.add('is-active');
            setCurrent(newIndex);
            setIsPlaying(false);
        };

        anim(currentItem, newItem, callback);
    };

    const next = () => {
        if (isPlaying) return;
        setIsPlaying(true);
        const newIndex = current === itemsData.length - 1 ? 0 : current + 1;
        updateSlider(newIndex);
    };

    const prev = () => {
        if (isPlaying) return;
        setIsPlaying(true);
        const newIndex = current === 0 ? itemsData.length - 1 : current - 1;
        updateSlider(newIndex);
    };

    return (
        <div className="slider h-screen w-screen bg-black flex items-center justify-center text-white relative overflow-hidden transition-background-color duration-2000">
            <div className='bg-red-600 display-flex justify-center'>
                <ButtonContainer link={link}/>
            </div>
            {itemsData.map((item, index) => (
                <div key={index} className={`item absolute top-0 left-0 w-full h-full flex items-center justify-center ${index === current ? 'is-active' : 'opacity-0 pointer-events-none'}`}>
                    <div className="content absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center text-8xl font-bold">
                        <div className="wrap text-center text-shadow-xl max-w-lg">
                            {item.content}
                        </div>
                    </div>
                    <div className="imgs relative w-3/5 pt-[60%]">
                        <div className="grid absolute top-0 left-0 w-full h-full grid-cols-12 grid-rows-12 gap-8 transform rotate-[-20deg] opacity-65">
                            {item.imgs.map((img, imgIndex) => (
                                <div key={imgIndex} className={`img absolute w-full h-full ${imgIndex === 0 ? 'col-span-4 row-span-6' : imgIndex === 1 ? 'col-start-5 col-span-8 row-span-5' : imgIndex === 2 ? 'col-span-8 row-start-7 row-span-5' : 'col-start-9 col-span-4 row-span-6'}`}>
                                    <img src={img} alt="" className="absolute top-0 w-full h-full object-cover filter brightness-110 contrast-110 saturate-130 mix-blend-screen" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Test;