var startIdx = 0;
var perPage = 3;
var attractions = [
    {
        'img': 'wulong1.jfif',
        'title': 'Wulong Karst Tourist Area',
        'desc': 'Chongqing Wulong Karst Tourist Area is a national AAAAA level scenic spot. It includes the three parts of the natural three bridges, Fairy Mountain, and Furong Cave, a tourist attraction in Wulong, Chongqing. Tiansheng Sanqiao is located in the southern part of Fairy Mountain, between Fairy Mountain and Wulong County; Fairy Mountain is located in Fairy Mountain Town, Wulong County, Chongqing, in the Wuling Mountains in the east of Chongqing; Furong Cave is located 4 kilometers away from Jiangkou Town, Wulong County Of the Furong River.'
    },
    {
        'img': 'wulong2.jfif',
        'title': 'Fairy Mountain Prairie',
        'desc': 'The first alpine meadow in the South-Fairy Mountain Prairie. National 5A-level scenic spots and national-level forest parks. Fairy Mountain covers an area of 100 square kilometers, with an altitude of 1650-2033 meters, and the annual average temperature is lower than 11.2℃. The climate is pleasant and the scenery is unique.'
    },
    {
        'img': 'wulong3.jfif',
        'title': 'Wulong Tiansheng Sanqiao Scenic Area',
        'desc': 'The largest natural bridge group in Asia ------ Wulong National AAAA-level Tourist Area Tiansheng Sanqiao Scenic Area. The Tianshengsanqiao Geopark Park located in the north of the county town and the Furong Cave and Furong River Geopark Park located in the southeast of the county town are located on the north and south banks of the Wujiang River. They are rare large-scale karst geoparks in the country.'
    },
    {
        'img': 'att1.jfif',
        'title': 'Kuixia',
        'desc': 'Zhaitang Gorge is the first gorge of the Three Gorges of the Yangtze River, also known as Kui Gorge. Starting from Baidi City in Fengjie in the west to Daxi Town in Wushan County in the east, it has a total length of 8 kilometers and is known for its majesty. The river is roaring and rushing in the gorge, whirlpools are everywhere, the mountains are rushing, and the momentum is majestic.'
    },
    {
        'img': 'att2.jfif',
        'title': 'Dazu Rock Carvings',
        'desc': 'Dazu Rock Carvings are located in Dazu County, Chongqing City. Dazu Rock Carvings began in the late Tang Dynasty and flourished in the Song Dynasty after five generations. They are the representative of the worry show in the late Chinese grotto art. The Dazu Rock Carvings in Chongqing is famous for its grand scale, exquisite carvings, diverse subject matter, rich connotation and complete preservation.'
    },
    {
        'img': 'att3.jfif',
        'title': 'Hongya Cave',
        'desc': 'Hongyadong is located in the riverside area where Cangbai Road, the Yangtze River and the Jialing River intersect in Chongqing’s core business district, Jiefangbei Road, and is surrounded by urban tourism, business and leisure, and urban cultural landscapes. With the most traditional architectural features of Bayu as the main body, the "hangjiaolou" style is the main body.'
    }
]
function showItems() {
    $(".attractions").empty();
    for (var i = startIdx; i < attractions.length && i < startIdx + 3; i++) {
        var li = $("<div class=\"attraction\"></div>");
        attractionEle = attractions[i];
        console.log(attractionEle);
        li.append("<div class=\"attraction-img col-md-6 col-xs-12\"><img src=\"./img/" + attractionEle['img'] + "\" alt=\"\" style=\"width: 100%;\"></div>")
        li.append("<div class=\"attraction-desc col-md-6 col-xs-12\"><h4>" + attractionEle['title'] + "</h4><p>" + attractionEle['desc'] + "</p></div>")
        $(".attractions").append(li);
    }
}

function updateBtn() {
    $("#page-prev").attr('class', 'previous disabled');
    $("#page-next").attr('class', 'next disabled');
    if (startIdx + 1 >= perPage) {
        $("#page-prev").removeClass('disabled');
    }
    if (startIdx + perPage + 1 < attractions.length) {
        $("#page-next").removeClass('disabled');
    }
}

$("#page-prev").click(function (e) {
    e.preventDefault();
    if ($("#page-prev").attr('class').includes('disabled')) {
        return;
    }
    startIdx -= perPage;
    showItems();
    updateBtn();
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

$("#page-next").click(function (e) {
    e.preventDefault();
    if ($("#page-next").attr('class').includes('disabled')) {
        return;
    }
    startIdx += perPage;
    showItems();
    updateBtn();
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

showItems();
updateBtn();