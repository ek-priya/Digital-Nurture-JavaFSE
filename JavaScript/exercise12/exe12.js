document
.getElementById("loadBtn")
.addEventListener("click", function(){

    fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    )

    .then(response =>
        response.json()
    )

    .then(data => {

        document
        .getElementById("output")
        .textContent =
        JSON.stringify(data,null,2);

    })

    .catch(error => {

        console.log(error);

    });

});