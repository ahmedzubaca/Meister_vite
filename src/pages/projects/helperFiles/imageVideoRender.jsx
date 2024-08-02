export const getFileType = (filename) => {
  const extension = filename.split('.').pop();
  if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
    return 'image';
  } else if (['mp4', 'webm', 'ogg'].includes(extension)) {
    return 'video';
  }
  return null;
};
export const renderContent = (filename, imgStyle, videoStyle) => {   
  const fileType = getFileType(filename);
  if (fileType === 'image') {      
    return <img src={filename} alt='slika' className={imgStyle} />;
  } else if (fileType === 'video') {      
    return (
      <video controls autoPlay className={videoStyle} >
        <source src={filename} type={`video/${filename.split('.').pop()}`}  />
        Your browser does not support the video tag.
      </video>
    );
  }
  return null;
};