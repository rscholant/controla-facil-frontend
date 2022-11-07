import { CompanyDataTable } from '@core/components/company';
import { Pagination } from '@core/components/_ui/pagination';
import { BasicTable } from '@core/components/_ui/table/BasicTable';
import { api } from '@shared/services';
import { GetServerSideProps } from 'next';
import { getToken, encode } from 'next-auth/jwt';
import { getSession, getCsrfToken, getProviders } from 'next-auth/react';
import React from 'react';
import { SWRConfig, unstable_serialize } from 'swr';
export type CompanyProps = {
  token: string;
  fallback: any;
};
const Company: React.FC<CompanyProps> & { auth: boolean } = ({
  fallback,
  token
}) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <CompanyDataTable token={token} />
      </SWRConfig>
    </>
  );
};
Company.auth = true;

export const getServerSideProps: GetServerSideProps = async context => {
  const { query, req } = context;

  let page = 1;
  if (query.page) {
    page = parseInt(query.page as string, 10);
  }

  try {
    const secret = process.env['NEXTAUTH_SECRET'];
    const token = await getToken({ req, secret, raw: true });

    const { data } = await api.get('/company', {
      params: {
        page
      },
      headers: { Authorization: `Bearer ${token}` }
    });

    return {
      props: {
        token,
        fallback: {
          [unstable_serialize([
            '/company',
            { page },
            { headers: { Authorization: `Bearer ${token}` } }
          ])]: {
            data: data.data ?? data,
            count: data.count
          }
        }
      }
    };
  } catch (e) {
    return { props: { token: undefined, fallback: undefined } };
  }
};

export default Company;
