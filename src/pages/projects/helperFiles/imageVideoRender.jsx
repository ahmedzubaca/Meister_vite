import { ImageLoader } from "./ImageLoader";

export const imageVideoRender = (imgLight, imgNormal, imgStyle) => {
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

  return(    
    fileType === 'image' ?
      <ImageLoader 
              lightSrc={imgLight}
              heavySrc={imgNormal}
              imgStyle={imgStyle}
      /> 
    : 
      fileType === 'video' ?      
        <video controls autoPlay className={imgStyle} >
            <source src={imgLight} type={`video/${imgLight.split('.').pop()}`}  />
        Your browser does not support the video tag.
        </video>
      : null   
  )
};