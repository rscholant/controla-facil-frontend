import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
  Stack,
  StackProps,
  Pagination as MuiPagination,
  PaginationItem
} from '@mui/material';
import React from 'react';

export type PaginationProps = StackProps & {
  count: number;
  page: number;
  onChange?: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  count,
  page,
  onChange,
  sx,
  ...rest
}) => {
  return (
    <Stack
      sx={{ display: 'flex', flex: 1, alignItems: 'end', mt: '1rem', ...sx }}
      {...rest}
    >
      <MuiPagination
        count={count}
        page={page}
        onChange={(_, page) => onChange && onChange(page)}
        color="primary"
        variant="outlined"
        shape="rounded"
        renderItem={item => (
          <PaginationItem
            components={{ previous: ArrowBack, next: ArrowForward }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
