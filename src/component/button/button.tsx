import React from "react";

type IButton = {
    text: string;
};

const Button: React.FC<IButton> = ({text}) => {
    return <button>{text}</button>;
};

export default Button;
