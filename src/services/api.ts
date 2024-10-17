import request from '../utils/request';

export const fetchUsers = () => 
  request({
    url: '/users',
    method: 'GET',
  });

export const createUser = (data: any) => 
  request({
    url: '/users',
    method: 'POST',
    data,
  });

export const updateUser = (id: string, data: any) => 
  request({
    url: `/users/${id}`,
    method: 'PUT',
    data,
  });

export const deleteUser = (id: string) => 
  request({
    url: `/users/${id}`,
    method: 'DELETE',
  });

// 添加更多 API 调用...