import { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  link: string;
  children: ReactNode;
};

const Button = ({ link, children }: ButtonProps) => {
  return (
    <a href={link} className="button" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Button;
