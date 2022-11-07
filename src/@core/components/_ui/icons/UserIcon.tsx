/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactNode } from 'react';
import { SvgIconProps } from '@mui/material';

export type UserIconProps = {
  iconProps?: SvgIconProps;
  icon: string | ReactNode;
};

export const UserIcon = (props: UserIconProps) => {
  const { icon, iconProps } = props;

  const IconTag = icon;

  let styles;

  // @ts-ignore
  return <IconTag {...iconProps} style={{ ...styles }} />;
};
