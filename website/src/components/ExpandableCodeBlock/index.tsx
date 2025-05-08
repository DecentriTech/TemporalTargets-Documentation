import React, {useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Content from './Content/Content';
import ToggleButton from './ToggleButton/ToggleButton';
import CopyButton from './CopyButton/CopyButton';
import styles from './styles.module.css';

export type Props = {
  code: string;
  language?: string;
  previewLines?: number;
};

export default function ExpandableCodeBlock({
  code,
  language = 'cpp',
  previewLines = 5,
}: Props): ReactNode {
  const [expanded, setExpanded] = useState(false);
  const lines = code.trim().split('\n');
  const visibleCode = (expanded ? lines : lines.slice(0, previewLines)).join('\n');

  return (
    <div className={clsx(styles.container, 'theme-code-block')}>
      <div className={styles.codeBlockWrapper}>
        <Content code={visibleCode} language={language} />
        {lines.length > previewLines && (
          <ToggleButton
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
          />
        )}
      </div>
    </div>
  );
}