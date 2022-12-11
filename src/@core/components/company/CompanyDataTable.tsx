import { Pagination } from '@core/components/_ui/pagination';
import { BasicTable } from '@core/components/_ui/table';
import { useSWR } from '@core/hooks';
import { useSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

import React, { useState } from 'react';

export const CompanyDataTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const session = useSession();
  console.log('🚀 ~ file: CompanyDataTable.tsx:12 ~ session', session);

  const { data } = useSWR(
    '/company',
    { page },
    { headers: { Authorization: `Bearer ` } }
  );
  console.warn(data, 'aqui');
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
      <Pagination
        count={data?.count}
        page={page}
        onChange={item => setPage(Number(item))}
      />
    </>
  );
};
