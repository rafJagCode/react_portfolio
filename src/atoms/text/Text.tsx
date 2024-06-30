import PropTypes from 'prop-types';
import { FunctionComponent } from 'react';
import './Text.css';

const propTypes = {
  Tag: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

type TextProps = PropTypes.InferProps<typeof propTypes>;

const Text: FunctionComponent<TextProps> = ({ Tag, className, children }) => {
  return (
    <Tag className={`text${className ? ' ' + className : ''}`}>{children}</Tag>
  );
};

export default Text;
