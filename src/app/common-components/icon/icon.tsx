'use client';

import { FC, useEffect, useState } from 'react';
import { svgList } from './svg-metadata';
import { IconObjectType } from '@/app/common-types';

type IconType = {
  name: string;
  width?: number;
  height?: number;
  color?: string;
};

const Icon: FC<IconType> = ({
  name,
  width = 24,
  height = 24,
  color = 'currentcolor'
}) => {
  const [iconObject, setIconObject] = useState<IconObjectType | null>(null);

  useEffect(() => {
    setIconObject(svgList.find((svg) => svg.name === name) ?? null);
  }, []);

  return (
    <div className="App">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox={`0 0 ${width} ${height}`}
      >
        <path
          d={iconObject?.path}
          fill={color}
          stroke={'currentColor'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          strokeWidth={32}
        />
      </svg>
    </div>
  );
};

export default Icon;
