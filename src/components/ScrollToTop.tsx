import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ScrollToTop: React.FC = () => {
  useScrollToTop();
  return null; // This component doesn't render anything
};

export default ScrollToTop; 