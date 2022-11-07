import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableProps,
  TableRow
} from '@mui/material';
import React, { ReactNode } from 'react';

export type BasicTableProps = TableProps & {
  headers: string[] | ReactNode[];
  data: any;
  onPageChange?: (page: number) => void;
};

export const BasicTable: React.FC<BasicTableProps> = ({
  headers,
  data,
  ...rest
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" {...rest}>
        <TableHead>
          <TableRow>
            {headers.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                {Object.values(item).map((subItem, subIndex) => (
                  <TableCell key={subIndex}>{subItem}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
