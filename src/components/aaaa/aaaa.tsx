import styles from './aaaa.module.scss';
import cx from 'classnames';

export interface AaaaProps {
    className?: string;
    texttt: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Aaaa = ({ className, texttt }: AaaaProps) => {
    return <div className={cx(styles.root, className)}>{texttt}</div>;
};
