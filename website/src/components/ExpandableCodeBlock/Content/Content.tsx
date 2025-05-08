import React, {type ReactNode} from 'react';
import Highlight from '../../HighlightWrapper/HighlightWrapper';
import type {Token, RenderProps, Language} from 'prism-react-renderer';
import clsx from 'clsx';
import {usePrismTheme} from '@docusaurus/theme-common';
import {
  getPrismCssVariables,
  parseLines,
  containsLineNumbers,
} from '@docusaurus/theme-common/internal';
import styles from '../styles.module.css';
import Container from '@theme/CodeBlock/Container';
import Line from '../Line/Line';
import CopyButton from '../CopyButton/CopyButton';

export default function Content({
  code,
  language = 'cpp',
}: {
  code: string;
  language?: string;
}): ReactNode {
  const prismTheme = usePrismTheme();
  const trimmedCode = code.trim();

  
  const {lineClassNames, code: parsedCode} = parseLines(trimmedCode, {
    metastring: '',
    language,
    magicComments: [],
  });

  const showLineNumbers = true;

  return (
    <Container
      as="div"
      className={clsx(`language-${language}`, styles.codeBlockContainer)}>
      <div className={styles.codeBlockWrapper}>
        <CopyButton code={trimmedCode} className={styles.codeButton} />
        <Highlight
          code={parsedCode}
          language={language as Language}
          theme={prismTheme}>
          {({className, style, tokens, getLineProps, getTokenProps}: RenderProps) => (
            <pre
              tabIndex={0}
              className={clsx(className, styles.codeBlock, 'thin-scrollbar')}
              style={getPrismCssVariables(prismTheme)}>
              <code
                className={clsx(
                  styles.codeBlockLines,
                  showLineNumbers && styles.codeBlockLinesWithNumbering,
                )}>
                {tokens.map((line, i) => (
                  <Line
                    key={i}
                    line={line}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={showLineNumbers}
                  />
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </Container>
  );
}