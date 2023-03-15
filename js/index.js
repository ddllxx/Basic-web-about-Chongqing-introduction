if (!navigator.geolocation) {
    alert("Location permissions are not turned on or geo-location queries are not supported by your browser");
} else {
    var myGeo = new BMapGL.Geocoder();
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.longitude, position.coords.latitude);
        myGeo.getLocation(new BMapGL.Point(position.coords.longitude, position.coords.latitude), function (result) {
            if (result?.address?.includes('重庆')) {
                $(".title-block").empty();
                $(".title-block").append('<h2>Welcome to ChongQing!</h2>');
            } else {
                $(".title-block").empty();
                $(".title-block").append('<h2>Come to ChongQing!</h2>');
            }
        });
    })
}