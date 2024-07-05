import Text from '../../atoms/text/Text';
import './Navlink.css';

type NavlinkProps = {
  link: string;
  text: string;
};

const Navlink = ({ link, text }: NavlinkProps) => {
  return (
    <li>
      <a href={link}>
        <Text Tag="p" className="text-light fs-400">
          {text}
        </Text>
      </a>
    </li>
  );
};

export default Navlink;
