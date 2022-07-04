function useData(id, token) {
    return fetch(`https://forms.googleapis.com/v1/forms/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
    })
    .catch((error) => {
        console.log(error);
    });
}

export default useData;