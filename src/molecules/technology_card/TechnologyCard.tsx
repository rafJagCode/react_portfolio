import Card from '../../atoms/card/Card';
import Text from '../../atoms/text/Text';
import TechnologyImg from '../../atoms/technology_img/TechnologyImg';
import './TechnologyCard.css';

type TechnologyCardProps = {
  imageName: string;
  text: string;
};

const TechnologyCard = ({ imageName, text }: TechnologyCardProps) => {
  return (
    <div className="technology_card">
      <Card></Card>
      <TechnologyImg imageName={imageName} />
      <Text className="fs-400 text-light text-mono" Tag="p">
        {text}
      </Text>
    </div>
  );
};

export default TechnologyCard;
