import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Carousel = () =>
{
    const fadeImages = [
        {
            url: './img/newcaledonia1.jpg',
            caption: 'Slide 1'
        },
        {
            url: './img/newcaledonia2.jpg',
            caption: 'Slide 2'
        },
        {
            url: './img/newcaledonia3.jpg',
            caption: 'Slide 3'
        },
        {
            url: './img/newcaledonia4.jpg',
            caption: 'Slide 4'
        },
        {
            url: './img/newcaledonia5.jpg',
            caption: 'Slide 5'
        },
        {
            url: './img/newcaledonia6.jpg',
            caption: 'Slide 6'
        },
    ];

    return (
        <>
            <section className="slide-container">
                <Fade>
                    {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade" key={index}>
                            <div className="image-container">
                                <img src={fadeImage.url} className="w-100" alt={fadeImage.caption} />
                            </div>
                        </div>
                    ))}
                </Fade>
            </section>
        </>
    )
}

export default Carousel;
