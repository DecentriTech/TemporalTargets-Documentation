import React from 'react';
import styles from './ExpandCollapseIcon.module.css';

export default function ExpandCollapseIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={expanded ? styles.expanded : ''}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      {/* Top-left arrow */}
      <g className={styles.arrow}>
        <line x1="5" y1="9" x2="5" y2="5" />
        <line x1="5" y1="5" x2="9" y2="5" />
      </g>
      {/* Top-right arrow */}
      <g className={styles.arrow} transform="rotate(90 12 12)">
        <line x1="5" y1="9" x2="5" y2="5" />
        <line x1="5" y1="5" x2="9" y2="5" />
      </g>
      {/* Bottom-right arrow */}
      <g className={styles.arrow} transform="rotate(180 12 12)">
        <line x1="5" y1="9" x2="5" y2="5" />
        <line x1="5" y1="5" x2="9" y2="5" />
      </g>
      {/* Bottom-left arrow */}
      <g className={styles.arrow} transform="rotate(270 12 12)">
        <line x1="5" y1="9" x2="5" y2="5" />
        <line x1="5" y1="5" x2="9" y2="5" />
      </g>
    </svg>
  );
}
