const request = {
    status: '200',
};

const promesa = new Promise((res, rej) => {
    if (request.status === '200') {
        setTimeout(() => {
            res({
                id: '1',
                title: 'Cream Ale',
                description: 'Rubia suave',
                price: '320',
                pictureUrl: '',

            });
        }, 2000);

    } else {
        rej('F');
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

