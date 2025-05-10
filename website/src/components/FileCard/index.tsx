import React from 'react';
import styles from './styles.module.css';

type FileCardProps = {
  filename: string;
  url: string;
  description?: string;
};

export default function FileCard({ filename, url, description }: FileCardProps) {
  return (
    <a className={styles.card} href={url}>
      <div className={styles.icon}>
        📄
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{filename}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </a>
  );
}
