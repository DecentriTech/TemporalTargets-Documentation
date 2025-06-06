// src/theme/MDXComponents.js

import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import ExpandableCodeBlock from '@site/src/components/ExpandableCodeBlock';
import HelloTag from '@site/src/components/HelloTag';
import ExpandCollapseIcon from '../components/icons/ExpandCollapseIcon/ExpandCollapseIcon';
import FileCard from '@site/src/components/FileCard'


export default {
  ...MDXComponents,
  ExpandableCodeBlock,
  HelloTag,
  ExpandCollapseIcon,
  FileCard,
};
