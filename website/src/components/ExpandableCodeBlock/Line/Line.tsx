// components/ExpandableCodeBlock/Line.tsx
import React from 'react';
import clsx from 'clsx';
import styles from '../styles.module.css';

export default function Line({
  line,
  getLineProps,
  getTokenProps,
  classNames,
  showLineNumbers,
}: {
  line: any;
  getLineProps: Function;
  getTokenProps: Function;
  classNames: string[];
  showLineNumbers: boolean;
}) {
  return (
    <div {...getLineProps({line})} className={clsx(...(classNames ?? []))}>
      {showLineNumbers && <span className={styles.lineNumber} />}
      {line.map((token: any, key: number) => (
        <span key={key} {...getTokenProps({token, key})} />
      ))}
    </div>
  );
}