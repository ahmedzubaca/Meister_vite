import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PageTransition = ({children, delay = 0}) => {
  return(
    <div>
      <motion.div
        initial={{opacity: 0}} 
        animate={{opacity: 1}}
        exit={{opacity: 0.5}}
        transition={{duration: 0.5, delay}}
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