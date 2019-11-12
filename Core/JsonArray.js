// Array of JSON value
var myArray = [
    { "p_id": "p_one", "p_name": "p_one", "p_cost": "10000" },
    { "p_id": "p_two", "p_name": "p_two", "p_cost": "20000" },
    { "p_id": "p_three", "p_name": "p_three", "p_cost": "30000" },
    { "p_id": "p_four", "p_name": "p_four", "p_cost": "40000" }
];
for (var i = 0; i < myArray.length; i++) {
    var obj = myArray[i];
    document.write(obj.p_id + " " + obj.p_name + " " + obj.p_cost + "<br>");
}
