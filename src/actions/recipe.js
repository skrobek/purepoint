export const SEARCH = 'app/recipe/SEARCH';
export const SEARCH_SUCCESS = 'app/recipe/SEARCH_SUCCESS';
export const SEARCH_FAIL = 'app/recipe/SEARCH_FAIL';
export const SEARCH_CLEAR = 'app/recipe/SEARCH_CLEAR';

export function search(query) {
  if (!query) {
    return {
      type: SEARCH_CLEAR
    };
  }

  return {
    types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
    promise: (client) => client.get(`/api?q=${query}&p=1`)
      .then(response => {
        // I'm not sure if this is required but in the task was 20 results
        // There is no information if I can get 20 items by one request
        // Api always returns max = 10 items
        if (response.results.length === 10) {
          return client.get(`/api?q=${query}&p=2`)
            .then(secondResponse => [...response.results, ...secondResponse.results])
        }

        return response.results;
      })
  }
}