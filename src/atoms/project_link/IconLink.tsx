import { IconType, Allocation } from './types';
import * as Icons from './Icons';
import './IconLink.css';

type IconLinkProps = {
  iconType: IconType;
  link: string;
  allocation: Allocation;
};

const Icon = (iconType: IconType) => {
  return Icons[iconType];
};

const IconLink = ({ iconType, link, allocation }: IconLinkProps) => {
  return (
    <a
      href={link}
      aria-label={`${iconType} Link`}
      rel="noopener noreferrer"
      target="_blank"
      className={`icon_link icon_link--${allocation}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon_link__icon icon_link__icon--${allocation}`}
      >
        <title className="icon_link__title">{iconType}</title>
        {Icon(iconType)()}
      </svg>
    </a>
  );
};

export default IconLink;
