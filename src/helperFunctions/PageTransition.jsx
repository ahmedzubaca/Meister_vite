import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PageTransition = ({children}) => {
  return(
    <div>
      <motion.div
        initial={{scaleY: 0.2}} 
        animate={{scaleY: 1, transition:{duration: 0.3}}}
        exit={{scaleY: 0.2, transition:{duration: 0.3}}}
        style={{overflow: 'hidden'}}
                 
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