import React, {type ReactNode} from 'react';
import Highlight from '../../HighlightWrapper/HighlightWrapper';
import type {Token, RenderProps, Language} from 'prism-react-renderer';
import clsx from 'clsx';
import {usePrismTheme} from '@docusaurus/theme-common';
import {getPrismCssVariables} from '@docusaurus/theme-common/internal';
import Container from '@theme/CodeBlock/Container';
import CopyButton from '../CopyButton/CopyButton';
import styles from '../styles.module.css';

export default function Content({
  code,
  language = 'cpp',
}: {
  code: string;
  language?: string;
}): ReactNode {
  const prismTheme = usePrismTheme();

  return (
    <Container
  as="div"
  className={clsx(`language-${language}`, styles.codeBlockContainer)}>
  <div className={styles.codeBlockWrapper}>
    <CopyButton code={code} className={styles.codeButton} />
    <Highlight code={code.trim()} language={language as Language} theme={prismTheme}>
      {({className, style, tokens, getLineProps, getTokenProps}: RenderProps) => (
        <pre
          tabIndex={0}
          className={clsx(className, styles.codeBlock, 'thin-scrollbar')}
          style={getPrismCssVariables(prismTheme)}>
          <code className={styles.codeBlockLines}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  </div>
</Container>
  );
}