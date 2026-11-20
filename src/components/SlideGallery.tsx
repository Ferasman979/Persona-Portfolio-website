import Image from 'next/image';
import styles from './SlideGallery.module.css';

interface Slide {
    src: string;
    alt: string;
    caption: string;
}

/** Thumbnails of presentation slides; each opens full size in a new tab. */
const SlideGallery = ({ slides }: { slides: Slide[] }) => (
    <ul className={styles.gallery}>
        {slides.map((slide) => (
            <li key={slide.src}>
                <a
                    href={slide.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.slideLink}
                    aria-label={`${slide.caption}: open full-size slide in a new tab`}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={1920}
                        height={1080}
                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 380px"
                        className={styles.slide}
                    />
                </a>
                <p className={styles.caption}>{slide.caption}</p>
            </li>
        ))}
    </ul>
);

export default SlideGallery;
