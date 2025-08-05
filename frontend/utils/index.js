export function callAPI() {
  return fetch(`${import.meta.env.VITE_API_URL}/api/joke`).then((res) =>
    res.json()
  );
}
