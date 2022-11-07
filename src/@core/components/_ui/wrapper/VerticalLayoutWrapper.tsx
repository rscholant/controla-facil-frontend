import React from 'react';
export type VerticalLayoutWrapperProps = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const VerticalLayoutWrapper: React.FC<VerticalLayoutWrapperProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <div style={{ height: '100%', display: 'flex', ...style }} {...rest}>
      {children}
    </div>
  );
};
