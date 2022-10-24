import { Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import React from 'react';

const Dashboard = () => {
  return (
    <Typography
      onClick={() => {
        signOut();
      }}
    >
      Dashboard
    </Typography>
  );
};

Dashboard.auth = true;

export default Dashboard;
