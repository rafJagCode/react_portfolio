import images from '../../assets/images/projects/images';

type ProjectImgProps = { imageName: string };

const ProjectImg = ({ imageName }: ProjectImgProps) => {
  {
    /* TODO: Add sources for different resolutions */
  }
  const prefix = `${imageName}ImgUrl`;
  return (
    <picture>
      <img
        className="project_preview__image"
        src={images[prefix]}
        alt={`${imageName} image`}
      ></img>
    </picture>
  );
};

export default ProjectImg;
