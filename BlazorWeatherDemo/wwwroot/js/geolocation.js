window.getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject('Geolocation not supported by your browser..');
        } else {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({
                        success: true,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                error => {
                    resolve({
                        success: false,
                        message: error.message
                    });
                }
            );
        }
    });
};