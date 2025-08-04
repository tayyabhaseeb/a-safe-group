export function callAPI() {
  return fetch("http://localhost:3001/api/joke").then((res) => res.json());
}
