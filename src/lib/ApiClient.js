class ApiClient {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then(function (response) {
        return response.json();
      })
        .then(function (json) { resolve(json); })
        .catch(function (error) { reject(error); });
    });
  }
}

export default ApiClient;
