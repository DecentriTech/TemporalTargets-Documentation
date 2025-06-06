import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import styles from '../styles.module.css';
import ExpandCollapseIcon from '../../icons/ExpandCollapseIcon/ExpandCollapseIcon';

export default function ToggleButton({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}): ReactNode {
  return (
    <button
      onClick={onToggle}
      className={clsx('clean-btn', styles.toggleButton)}
      aria-label={expanded ? 'Collapse code' : 'Expand code'}>
      <ExpandCollapseIcon expanded={expanded} />
    </button>
  );
}