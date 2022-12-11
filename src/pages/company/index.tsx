import { CompanyDataTable } from '@core/components/company';
import { api } from '@shared/services';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import React from 'react';
import { SWRConfig, unstable_serialize } from 'swr';
import { authOptions } from '../api/auth/[...nextauth]';

export type CompanyProps = {
  session: any;
};

const Company: React.FC<CompanyProps> & { auth: boolean } = ({ session }) => {
  console.log('🚀 ~ file: index.tsx:15 ~ session', session);
  return (
    <>
      <CompanyDataTable />
    </>
  );
};
Company.auth = true;

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      )
    }
  };
};
export default Company;
