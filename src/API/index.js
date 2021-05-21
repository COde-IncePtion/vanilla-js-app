import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJuRnFsWkVlQW95YkJaUXM4QXpZcWRWWWpIOHphRW53Z2NEVm14ZmtCWU1aQ3kwS2g3NSIsImp0aSI6ImRlNWVkZmM4M2Y5NDJhZjE1N2M0N2Y5YjdjNWNiNDE0M2MzMzljMGQwMmNmMmEyM2NlNWRhYWE4YmJhMGMyYjc5MTRjNmFiZWYyMTMwOTZhIiwiaWF0IjoxNjIxNTc0MDA5LCJuYmYiOjE2MjE1NzQwMDksImV4cCI6MTYyMTU3NzYwOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.JKMJpBFT-f_-ha7v8yiaJWylIMRpSXhN7KP6u_CpJMzPdxLoGbGBuvxGcjiVq3Cy2ctthyTZj9_gnWwc1lf7QhLCNzE4mxNaWDBUmUWYGWuoNamKa8s1DGU9VGe8MzMZdzPa718VOpPvZr52p1iH8nnLt5m9bYwC6wglgyxXSAkZ01i8_6Lqz08x9ZCPzphK9Ewy603Efr8fqPKSEZmDBwD9cZKK88W3C2Ud15j2ijfxHNfKiBfiTcZujQ5YIo8S4OTYIYurT0RVP6SyldGbAoAmJba3tCIU_vhp21XfXyXx3XsLUs-pvHduNpbgljf5S5ti47qKHhISpscvXueLxg";

export const getAnimals = () => {
  return axios({
    method: "get",
    url: "https://api.petfinder.com/v2/animals",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
