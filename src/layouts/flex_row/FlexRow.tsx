import { ElementType, ReactNode } from 'react';
import './FlexRow.css';

type FlexRowProps = {
  Tag: ElementType;
  className?: string;
  children?: ReactNode;
};

const FlexRow = ({ Tag, className, children }: FlexRowProps) => {
  const additionalClass = className ? `${className} ` : '';
  return <Tag className={additionalClass + 'flex_row'}>{children}</Tag>;
};

export default FlexRow;
