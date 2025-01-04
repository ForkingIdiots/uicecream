import { clsx } from "clsx";
import styles from "./button.css";
type BaseProps = {
    className?: string;
    style?: React.CSSProperties;
}

type ButtonProps = BaseProps & {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
}

export type { ButtonProps };

const Button = ({ children, className, style }: ButtonProps) => {
    return <button className={clsx(styles.button, className)} style={style}>{children}</button>;
}

export { Button };
