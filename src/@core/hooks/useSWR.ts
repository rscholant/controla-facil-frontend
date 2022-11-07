import { api } from '@shared/services';
import { AxiosRequestConfig } from 'axios';
import SWR from 'swr';

export type ResponseType<T> = {
  data: T[];
  count: any;
  additional: any;
};

export async function fetcher(
  route: string,
  searchData: any,
  config?: AxiosRequestConfig<any>
): Promise<any> {
  const { data } = await api.get(route, {
    params: {
      ...searchData
    },
    ...config
  });
  return {
    data: data.data ?? data,
    count: data.count,
    additional: data.additional
  };
}

export function useSWR<ResponseDataType = any>(
  path: string,
  searchData?: any,
  config?: AxiosRequestConfig<any>
) {
  return SWR<ResponseType<ResponseDataType>>(() => {
    if (searchData) {
      return [path, searchData, config];
    }
  }, fetcher);
}
