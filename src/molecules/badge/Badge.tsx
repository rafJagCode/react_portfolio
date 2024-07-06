import Text from '../../atoms/text/Text';
import './Badge.css';

type BadgeProps = {
  text: string;
};
const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="badge">
      <div className="badge__indicator"></div>
      <Text className="fs-300 text-light font-mono" Tag="p">
        {text}
      </Text>
    </div>
  );
};

export default Badge;
