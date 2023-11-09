import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import cityImg from "../assets/city.jpg";
import heroImg from "../assets/hero.png";

export default function WelcomePage() {
  const { scrollY } = useScroll();

  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.3, 0]
  ); //second is pixel third is opacity

  const yCity = useTransform(scrollY, [0, 200], [0, -100]);

  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);

  const yHero = useTransform(scrollY, [0, 200], [0, -150]);

  const scaleText = useTransform(scrollY, [0, 300], [1, 1.3]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 105]);
  const opacityText = useTransform(scrollY, [0, 200, 300, 500], [1, 1, 0.7, 0]);

  //

  const text1X = useTransform(
    scrollY,
    [500, 550, 750, 800],
    [-150, 0, 0, -150]
  );
  const text1Opacity = useTransform(
    scrollY,
    [500, 550, 750, 800],
    [0, 1, 1, 0]
  );

  const text2X = useTransform(
    scrollY,
    [750, 800, 950, 1100],
    [-150, 0, 0, -150]
  );
  const text2Opacity = useTransform(
    scrollY,
    [750, 800, 950, 1100],
    [0, 1, 1, 0]
  );

  const text3X = useTransform(
    scrollY,
    [1100, 1150, 1400, 1450],
    [-150, 0, 0, 0]
  );

  const text3Opacity = useTransform(
    scrollY,
    [1100, 1150, 1400, 1450],
    [0, 1, 1, 1]
  );

  const text4X = useTransform(scrollY, [1450, 1550], [-150, 0]);
  const text4Opacity = useTransform(scrollY, [1450, 1550], [0, 1]);

  return (
    <>
      <header id="welcome-header">
        <motion.div
          style={{ scale: scaleText, y: yText, opacity: opacityText }}
          id="welcome-header-content"
        >
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }} //Enhanced style to use 'opcityCity'
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img
          style={{ y: yHero, opacity: opacityHero }}
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
        />
      </header>

      <main id="welcome-content">
        <motion.section
          className="z"
          style={{ x: text1X, opacity: text1Opacity }}
        >
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </motion.section>

        <motion.section
          viewport={{ once: true }}
          style={{ x: text2X, opacity: text2Opacity }}
        >
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </motion.section>

        <motion.section style={{ x: text3X, opacity: text3Opacity }}>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </motion.section>

        <motion.section style={{ x: text4X, opacity: text4Opacity }}>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </motion.section>
      </main>
    </>
  );
}
