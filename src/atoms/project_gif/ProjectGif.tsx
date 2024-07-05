import images from '../../assets/images/projects/images';
import uuid from 'react-uuid';

type ProjectGifProps = { imageName: string };

const ProjectGif = ({ imageName }: ProjectGifProps) => {
  {
    /* TODO: Add sources for different resolutions */
  }
  const prefix = `${imageName}GifUrl`;
  const key = uuid();
  return (
    <picture key={key}>
      <img
        className="project_preview__image"
        src={images[prefix]}
        alt={`${imageName} gif`}
      ></img>
    </picture>
  );
};

export default ProjectGif;
