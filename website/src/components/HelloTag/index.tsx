import React, {type ReactNode} from 'react';

export default function HelloTag({
  name = 'world',
}: {
  name?: string;
}): ReactNode {
  return <span style={{ color: '#25c5a0' }}>Hello, {name}!</span>;
}