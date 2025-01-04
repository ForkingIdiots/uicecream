import { clsx } from "clsx";
import styles from "./button-emoji.css";
import { Button } from "../button";
type BaseProps = {
    className?: string;
    style?: React.CSSProperties;
}

type ButtonEmojiProps = BaseProps & {
    children: React.ReactNode;
    emoji: string;
    number?: number;
}

export type { ButtonEmojiProps };

const ButtonEmoji = ({ children, className, style, emoji, number }: ButtonEmojiProps) => {
    const renderEmoji = () => {
        if (number) {
            return <span>{emoji.repeat(number)}</span>;
        }
        return <span>{emoji}</span>;
    }
    return <Button className={clsx(styles.buttonEmoji, className)} style={style}>{renderEmoji()}{children}</Button>;
}

export { ButtonEmoji };