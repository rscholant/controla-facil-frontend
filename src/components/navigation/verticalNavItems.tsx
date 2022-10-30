import React from 'react';
import {
  VerticalNavSectionTitle,
  VerticalNavLink
} from '@components/navigation';
import { Settings } from '@core/context';
import { NavLink, NavSectionTitle, VerticalNavItemsType } from '@core/layouts';

export type VerticalNavItemsProps = {
  navVisible?: boolean;
  groupActive: string[];
  currentActiveGroup: string[];
  verticalNavItems?: VerticalNavItemsType;
  saveSettings: (values: Settings) => void;
  setGroupActive: (value: string[]) => void;
  setCurrentActiveGroup: (item: string[]) => void;
};

const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle;

  return VerticalNavLink;
};

export const VerticalNavItems: React.FC<VerticalNavItemsProps> = props => {
  const { verticalNavItems } = props;
  const RenderMenuItems = verticalNavItems?.map(
    (item: NavLink | NavSectionTitle, index: number) => {
      const TagName: any = resolveNavItemComponent(item);

      return <TagName {...props} key={index} item={item} />;
    }
  );

  return <>{RenderMenuItems}</>;
};
