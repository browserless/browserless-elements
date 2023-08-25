import React from 'react';

import Heading from './Heading';
import useTheme from '../hooks/useTheme';
import { classNames } from '../utils';

const AsideSection = (props: SectionProps) => {
  const { title, children } = props;
  const { theme } = useTheme();

  return (
    <div className="mb-8">
      <Heading
        size="sm"
        className={classNames(
          theme === 'dark' ? 'text-charcoal-100' : 'text-charcoal-500',
          'pointer-events-none'
        )}
      >
        {title}
      </Heading>
      {children}
    </div>
  );
};

export default AsideSection;
export interface SectionProps extends Omit<React.HTMLProps<HTMLDivElement>, "title"> {
  title: string;
}
