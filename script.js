import http from 'k6/http';
import { check , sleep } from 'k6';
export let options = {
  stages: [
    { duration: '1m', target: 100 }, // below normal load
    { duration: '1m', target: 100 },
    { duration: '2m', target: 500 }, // normal load
    { duration: '2m', target: 1000 },
    { duration: '2m', target: 1500 }, // around the breaking point
    // { duration: '5m', target: 300 },
    // { duration: '2m', target: 400 }, // beyond the breaking point
    // { duration: '5m', target: 400 },
    { duration: '2m', target: 0 }, // scale down. Recovery stage.
  ],
};
export default function () {
  let res = http.get('http://52.53.235.167/1/');
  // let res = http.get('http://54.241.52.191:3001/api/photo-carousel/01/photos/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
