'use client';

import { MotionConfig as OriginalMotionConfig } from 'motion/react';
import React from 'react';

function MotionConfig({children}) {
  return <OriginalMotionConfig reducedMotion="user">{children}</OriginalMotionConfig>;
}

export default MotionConfig;
