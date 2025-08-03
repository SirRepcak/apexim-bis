import React from 'react';
import {useInView} from 'react-intersection-observer';
import {animated, useSpring} from 'react-spring';
import './StatsCounter.css';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * A single animated number.
 * @param {number} targetValue - The number to count up to.
 * @param {boolean} isInView - A boolean from the parent to trigger the animation.
 * @param {number} duration - Animation duration in milliseconds.
 */
const AnimatedNumber = ({ targetValue, isInView, duration = 2000 }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: isInView ? targetValue : 0 },
    config: { duration },
  });

  // Format the number to avoid decimals during animation
  return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>;
};


/**
 * A section that displays animated stats counters.
 * @param {Array<{value: number, label: string}>} stats - Array of stat objects.
 * @param {string} [backgroundImage] - URL for a background image.
 * @param {string} [backgroundColor] - A fallback or primary background color.
 * @param {string} [textColor] - The color for the numbers and labels.
 * @param {boolean} [fullWidth=false] - If true, breaks out of the container to span the viewport width.
 * @param {number} [animationDuration=2000] - Duration of the count-up animation in ms.
 */
const StatsCounter = ({
                        stats = [],
                        backgroundImage,
                        backgroundColor,
                        textColor = '#ffffff',
                        fullWidth = false,
                        animationDuration = 2000,
                      }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Start animation when 30% of the component is visible
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerStyle = {
    backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    color: textColor,
  };

  const containerClasses = `stats-counter-container ${fullWidth ? 'full-width' : ''} ${isMobile ? 'mobile' : ''}`;

  return (
      <div ref={ref} className={containerClasses} style={containerStyle}>
        {/* Overlay for better text readability on images */}
        {backgroundImage && <div className="stats-overlay"></div>}

        <div className="stats-wrapper">
          {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">
                  <AnimatedNumber
                      targetValue={stat.value}
                      isInView={inView}
                      duration={animationDuration}
                  />
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default StatsCounter;