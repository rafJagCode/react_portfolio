import images from '../../assets/images/technologies/images';

type TechnologyIconProps = {
  imageName: string;
};

const TechnologyIcon = ({ imageName }: TechnologyIconProps) => {
  const prefix = `${imageName}ImgUrl`;
  return <img src={images[prefix]} alt={`${imageName} icon`} />;
};

export default TechnologyIcon;
