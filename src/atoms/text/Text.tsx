import { ElementType, ReactNode } from 'react';
import './Text.css';

type TextProps = {
  Tag: ElementType;
  className: string;
  children: ReactNode;
};

const Text = ({ Tag, className, children }: TextProps) => {
  return (
    <Tag className={`text${className ? ' ' + className : ''}`}>{children}</Tag>
  );
};

export default Text;
