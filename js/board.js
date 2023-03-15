var commentList = [
    {
        "name": "Test",
        "email": "xxx@xx.com",
        "comment": "test Share Board!"
    },
    {
        "name": "Me",
        "email": "xxx@cc.com",
        "comment": "This function is ok, but it can not save, only show in this view. If you press F5 to reload this page, you will lost your share text."
    }
]

function showComments() {
    $("#commentList").empty();
    for (var i = 0; i < commentList.length; i++) {
        var li = $("<li></li>");
        commentEle = commentList[i];
        console.log(commentEle);
        li.append("<p class=\"comment-title\">" + commentEle["name"] + "<span>" + commentEle["email"] + "</span></p>")
        li.append("<p class=\"comment-desc\">" + commentEle["comment"] + "</p>")
        $("#commentList").append(li);
    }
}

$("#comment-btn").click(function (e) {
    e.preventDefault();
    localStorage.setItem('name', $('#inputName')[0].value);
    localStorage.setItem('email', $('#inputEmail')[0].value);
    if ($('#inputName')[0].value.trim() == "") {
        alert('No Name');
        return;
    }
    if ($('#inputText')[0].value.trim() == "") {
        alert('No Content');
        return;
    }

    commentList.unshift({
        'name': $('#inputName')[0].value,
        'email': $('#inputEmail')[0].value,
        'comment': $('#inputText')[0].value
    });
    $('#inputText')[0].value = "";
    showComments()
});

$('#inputName')[0].value = localStorage.getItem('name');
$('#inputEmail')[0].value = localStorage.getItem('email');
showComments()