Create an input box and an Add Item button. When the button is clicked: • Add the entered item to an <ul>. • Clear the input. • If the input is empty, display "Please enter an item". Example: Input: Apple Output: • Apple
Create Increase, Decrease, and Reset buttons. Rules: • Starting value = 0 • Maximum = 10 • Minimum = 0 • Don't allow the counter to go beyond these limits. Example: Count: 5 [Increase] [Decrease] [Reset] and n. • Input: 20 • Output: 2 3 5 7 11 13 17 19
<!DOCTYPE html>
<html>
<head>
    <title>Add Item</title>
</head>
<body>

<input type="text" id="item" placeholder="Enter item">
<button onclick="addItem()">Add Item</button>

<p id="message"></p>

<ul id="list"></ul>

<script>
function addItem() {
    let input = document.getElementById("item");
    let value = input.value;
    let message = document.getElementById("message");

    if (value == "") {
        message.innerHTML = "Please enter an item";
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = value;

    document.getElementById("list").appendChild(li);

    input.value = "";
    message.innerHTML = "";
}
</script>

</body>
</html>






<!DOCTYPE html>
<html>
<head>
    <title>Add Item</title>
</head>
<body>

<input type="text" id="item" placeholder="Enter item">
<button onclick="addItem()">Add Item</button>

<p id="message"></p>

<ul id="list"></ul>

<script>
function addItem() {
    let input = document.getElementById("item");
    let value = input.value;
    let message = document.getElementById("message");

    if (value == "") {
        message.innerHTML = "Please enter an item";
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = value;

    document.getElementById("list").appendChild(li);

    input.value = "";
    message.innerHTML = "";
}
</script>

</body>
</html>