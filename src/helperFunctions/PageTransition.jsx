import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PageTransition = ({children}) => {
  return(
    <div>
      <motion.div
        initial={{y: '100%'}} 
        animate={{y: 0}}
        exit={{opacity: 1, position: 'absolute', top: 0, left: 0}} 
        transition= {{duration: 0.75}}                    
      >
        {children}
      </motion.div>
    </div>
  );
}
export default PageTransition;

PageTransition.propTypes = {
  children: PropTypes.any.isRequired,
  delay: PropTypes.any.isRequired
}