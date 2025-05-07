import React from 'react';
import { Highlight, type Language, type PrismTheme, type RenderProps } from 'prism-react-renderer';

export type HighlightWrapperProps = {
  code: string;
  language: Language;
  theme: PrismTheme;
  children: (props: RenderProps) => React.ReactNode;
};

export default function HighlightWrapper({
  code,
  language,
  theme,
  children,
}: HighlightWrapperProps): React.ReactElement {
  return Highlight({code, language, theme, children});
}
