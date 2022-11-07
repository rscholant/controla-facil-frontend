import { Pagination } from '@core/components/_ui/pagination';
import { BasicTable } from '@core/components/_ui/table';
import { useSWR } from '@core/hooks';

import React from 'react';

export type CompanyDataTableProps = {
  token: string;
};

export const CompanyDataTable: React.FC<CompanyDataTableProps> = ({
  token
}) => {
  const { data } = useSWR(
    '/company',
    { page: 1 },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return (
    <>
      <BasicTable
        headers={['Razão social', 'Nome fantasia', 'CNPJ', '']}
        data={data?.data.map(item => {
          return {
            name: item.name,
            socialName: item.socialName,
            cnpj: item.cnpj,
            options: 'OPÇÕES'
          };
        })}
      />
      <Pagination count={10} page={5} onChange={item => console.log(item)} />
    </>
  );
};
