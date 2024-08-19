import { ImageLoader } from "./ImageVideoLoader";

export const imageVideoRender = (imgLight, imgNormal, imgStyle, videoStyle) => {
  const getFileType = (filename) => {
    const extension = filename.split('.').pop();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
      return 'image';
    } else if (['mp4', 'webm', 'ogg'].includes(extension)) {
      return 'video';
    }
    return null;
  };  
  const fileType = getFileType(imgLight);
  if (fileType === 'image') {      
    return (     
        <ImageLoader 
          lightSrc={imgLight}
          heavySrc={imgNormal}
          imgStyle={imgStyle}
        />
    )    
  } else if (fileType === 'video') {      
    return (
      <video controls autoPlay className={videoStyle} >
        <source src={imgLight} type={`video/${imgLight.split('.').pop()}`}  />
        Your browser does not support the video tag.
      </video>
    );
  }
  return null;
};