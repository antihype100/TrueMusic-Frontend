import React from 'react';
import styles from '../../pages/author/release/ReleaseDesign/ReleaseDesign.module.scss';

export const ParseTextarea = ({ value = [], onChange }: any) => {
  const [text, setText] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setText(value);
    onChange(value);
  };

  return <textarea className={styles.formText} onChange={handleChange} cols={60} rows={5} value={text} />;
};
