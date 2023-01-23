import styles from './UploadFileButton.module.scss'
import { useRef } from 'react';

interface IUploadFileButton {
    placeholder: string,
    setFile: (e: any) => void,
    fileName: string
}

export const UploadFileButton = ({ placeholder, setFile, fileName}: IUploadFileButton) => {

    const buttonRef = useRef<HTMLInputElement>(null);

    const onUploadFile = (e: any) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className={styles.uploadFile}>
            <span>{fileName ? fileName : placeholder}</span>
            <input
                type='file'
                ref={buttonRef}
                onChange={(e: any) => onUploadFile(e)}
            />
            <button onClick={() => buttonRef.current?.click()} type={'button'}>
                Выбрать файл
            </button>
        </div>
    );
};