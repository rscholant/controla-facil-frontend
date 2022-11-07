import { BigHead } from '@bigheads/core';
import { Badge, Box, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { BadgeContentSpan } from '@core/components/_ui/span';
import { useRouter } from 'next/router';
import React, { Fragment, SyntheticEvent, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { LogoutVariant } from 'mdi-material-ui';

const styles = {
  py: 2,
  px: 4,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: 'text.primary',
  textDecoration: 'none',
  '& svg': {
    fontSize: '1.375rem',
    color: 'text.secondary'
  }
};

export const UserDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const router = useRouter();
  const { data } = useSession();
  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Badge
        overlap="circular"
        onClick={handleDropdownOpen}
        sx={{
          ml: 2,
          cursor: 'pointer',
          width: '40px',
          height: '40px',
          bgcolor: 'primary.main',
          borderRadius: '64px'
        }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <BigHead
          accessory="none"
          body="chest"
          circleColor="blue"
          clothing="shirt"
          clothingColor="black"
          eyebrows="serious"
          eyes="normal"
          facialHair="mediumBeard"
          graphic="react"
          hair="short"
          hairColor="black"
          hat="none"
          hatColor="green"
          lashes={false}
          lipColor="purple"
          mask={false}
          faceMask={false}
          mouth="open"
          skinTone="light"
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap="circular"
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <BigHead
                accessory="none"
                body="chest"
                circleColor="blue"
                clothing="shirt"
                clothingColor="black"
                eyebrows="serious"
                eyes="normal"
                facialHair="mediumBeard"
                graphic="react"
                hair="short"
                hairColor="black"
                hat="none"
                hatColor="green"
                lashes={false}
                lipColor="purple"
                mask={false}
                faceMask={false}
                mouth="open"
                skinTone="light"
              />
            </Badge>
            <Box
              sx={{
                display: 'flex',
                marginLeft: 3,
                alignItems: 'flex-start',
                flexDirection: 'column'
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                {data?.user?.name}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />
        <MenuItem sx={{ py: 2 }} onClick={() => signOut()}>
          <LogoutVariant
            sx={{
              marginRight: 2,
              fontSize: '1.375rem',
              color: 'text.secondary'
            }}
          />
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
