// import axios from 'axios';
// 这里就应该是哪个东西的ts加载器这种东西了
// import http, { CommonResult } from '@/axios/http-request.ts';
// interface Result {
//   code: number;
//   msg: string;
// }
//
// // 测试get 客户列表
// interface GetCustomerListParams {
//   keyword?: string;
//   gender?: 1 | 2;
//   age_from?: number;
//   age_to?: number;
//   has_mobile?: 0 | 1 | -1;
//   has_face?: 0 | 1 | -1;
//   page?: number;
//   per_page?: number;
// }
// interface CustomerRes {
//   data: any; link: any; meta: any; _info?: Result;
// }
// export async function getCustomerList(params: GetCustomerListParams, mock: boolean = false ): Promise<CommonResult<CustomerRes>> {
//     const  data  = await http.request<CustomerRes>('/business/customers', {
//       method: 'get',
//       params,
//     }, mock);
//     return data;
// }
