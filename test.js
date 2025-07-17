import { check } from 'k6';
import http from 'k6/http';

export let options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  let res = http.get('https://httpbin.org/get');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
