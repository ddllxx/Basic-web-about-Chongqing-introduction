var map = new BMap.Map("map");
var point = new BMap.Point(106.58366099951339, 29.563792997021264);
var convertor = new BMap.Convertor();
convertor.translate([point], 1, 5, (data) => {
    map.centerAndZoom(data.points[0], 16);
    map.enableScrollWheelZoom(true);
    var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map }
    });
    local.searchNearby("小吃", point, 5000);
    map.centerAndZoom(point, 16);
});