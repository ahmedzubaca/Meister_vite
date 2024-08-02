export const calculateImgHeight = (viewportWidth, viewportHeight) => {    
  if((viewportWidth >= 500 && viewportWidth <= 950)&&(viewportHeight <= 500)) {
    return 80 * viewportHeight / 100;
  }
  else if((viewportWidth >= 500 && viewportWidth <= 950)&&(viewportHeight > 500)) {
    return 9* (40 * viewportWidth/100) / 16
  }
  else if(viewportWidth >= 950 && viewportWidth < 1200) {
    return 9* (30 * viewportWidth/100) / 16
  }
  else if(viewportWidth >= 1200) {
    return 9* (20 * viewportWidth/100) / 16
  }
  else {
    return 9 * viewportWidth / 16
  }    
}