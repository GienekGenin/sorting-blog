window.onload = () => {
    fetch('https://api.myjson.com/bins/152f9j')
        .then(response => {
            response.json().then(data => {
                console.log(data);
            })
        })
        .catch(err => {
            console.log('Woooops, shit happens');
            console.log(err);
        })
};