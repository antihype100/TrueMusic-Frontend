import React from 'react';
import styles from './AuthorLayout.module.scss';

interface IAuthorLayoutProps {
  author: string;
  children: React.ReactNode;
}

const AuthorLayout = ({ author, children }: IAuthorLayoutProps) => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{author}</h1>
      {children}
    </section>
  );
};

export default AuthorLayout;
