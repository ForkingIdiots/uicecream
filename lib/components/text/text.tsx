import styles from "./text.css";
type TextProps = {
    children: React.ReactNode;
}
const Text = ({ children }: TextProps) => {

    return <div className={styles.text}>{children}</div>;
};

export { Text };
export type { TextProps };