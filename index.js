// TypeError: Failed to execute 'fetch' on 'Window'

console.log('bobbyhadz.com');

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer YOUR_TOKEN',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      return response.json();
    })
    .catch(error => {
      console.log('error: ', error);
    });
}

getUser().then(data => {
  console.log(data);
});
