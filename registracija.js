function validation () {
var url = "https://jsonplaceholder.typicode.com/users";

$.getJSON(url, function (data) {
    console.log(data);

});
}