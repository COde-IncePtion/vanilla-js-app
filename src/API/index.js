import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJuRnFsWkVlQW95YkJaUXM4QXpZcWRWWWpIOHphRW53Z2NEVm14ZmtCWU1aQ3kwS2g3NSIsImp0aSI6IjY4M2M5Mjk5Y2Y0ODQyYjkwMjlkODFkOWFiNmMyOTFkZWRjNzNkNzc1YmRjNzE4MThmMzI3ZjQ3ZGQ5MDhiYWY0OTcxYWIzMGEzMTA4MzFkIiwiaWF0IjoxNjIxNTc5MjMxLCJuYmYiOjE2MjE1NzkyMzEsImV4cCI6MTYyMTU4MjgzMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.MSrp6WrGOBR7FavW7OJQclWAdMM_OLzfkSIoRoUUvgwQdvIgn5doSQbjY5uN3rhsGQsK3GpI9n6IujAWqTJDvj8AAc-TV-pqwxphIf0QXKVci08u7ml9JjnMQSfFzu0U5uX2d47o4LONX7sDRBNTs2OZL9YI7ykHS0_u53keY6oD2O5TAUWGHvMLRlsn6kc-XqL1TTiMVz1Y88tvzVab_YrL4iSk7D8yKsIqSoqOfGYv4R6Gka1oGoC2uTBSVNeldnjn8kEfZvJ9AJ9Ynla6zgzztXfWterIlj2JpuqGmUzA5q6ej891eawyVNXDtdoMEmE4d5RtHmm-e700eLUNYQ";

export const getAnimals = (page = 1) => {
  return axios({
    method: "get",
    url: `https://api.petfinder.com/v2/animals?page=${page}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getFilteredAnimals = (filterConfig)=>{
  return axios({
    method: "get",
    url: `https://api.petfinder.com/v2/animals?page=${page}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
