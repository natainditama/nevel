import React from 'react';
import clsx from 'clsx';

export default function Container({
  children,
  fluid = false,
  className = '',
  maxWidth = 'md',
  component = 'div',
  ...props
}) {
  const isMdOrHigher = React.useMemo(() => maxWidth === 'md' || maxWidth === 'lg' || maxWidth === 'xl', [maxWidth]);
  const isLgOrHigher = React.useMemo(() => maxWidth === 'lg' || maxWidth === 'xl', [maxWidth]);

  return React.createElement(
    component ?? 'div',
    {
      className: clsx(
        fluid && 'max-w-none',
        'relative mx-auto max-w-3xl px-4',
        isMdOrHigher && 'md:max-w-4xl',
        isLgOrHigher && 'lg:max-w-5xl',
        maxWidth === 'xl' && 'xl:max-w-6xl',
        className,
      ),
      ...props,
    },
    children,
  );
}
