import { useState } from 'react';
import ProjectGif from '../../atoms/project_gif/ProjectGif';
import ProjectImg from '../../atoms/project_img/ProjectImg';
import ProjectOverlay from '../../atoms/project_overlay/ProjectOverlay';
import './ProjectPreview.css';

type ProjectPreviewTypes = {
  imageName: string;
};

const ProjectPreview = ({ imageName }: ProjectPreviewTypes) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlaying = () => setIsPlaying((state) => !state);

  return (
    <button className="project_preview" onClick={togglePlaying}>
      {isPlaying ? (
        <ProjectGif imageName={imageName} />
      ) : (
        <>
          <ProjectImg imageName={imageName} />
          <ProjectOverlay />
        </>
      )}
    </button>
  );
};

export default ProjectPreview;
