import { Domain, HomeOutline } from 'mdi-material-ui';

export const menuConfig = (): any => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Empresa',
      icon: Domain,
      path: '/company'
    }
  ];
};
