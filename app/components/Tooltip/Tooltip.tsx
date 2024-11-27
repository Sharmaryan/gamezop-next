import { useState } from "react";
import styles from "./Tooltip.module.css";
import { TooltipProps } from "./Tooltip.types";

const Tooltip = ({ children, tooltipText }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <button
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className={styles.tooltipChild}>{children}</div>
      {isVisible && <span className={styles.tooltipText}>{tooltipText}</span>}
    </button>
  );
};

export default Tooltip;
