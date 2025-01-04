import { style } from "@vanilla-extract/css";

const buttonEmoji = style({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: 'black',
    border: '2px double white',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
});

export default { buttonEmoji };
