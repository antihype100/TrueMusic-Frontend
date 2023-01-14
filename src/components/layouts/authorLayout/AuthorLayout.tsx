import React from 'react';
import styles from './AuthorLayout.module.scss';

interface IAuthorLayoutProps {
  author?: string;
  children: React.ReactNode;
}

const AuthorLayout = ({ author, children }: IAuthorLayoutProps) => {
  return (
    <>
      <h1 className={styles.title}>{author}</h1>
      <section className={styles.wrapper}>{children}</section>
    </>
  );
};

export default AuthorLayout;
