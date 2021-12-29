import express from "express";

// we imported express and set up a new express 
// instance const app = express().
const app = express();
const port = 5000;

app.get("/", (request, response) => {
    response.send("welcome to the main get request")
})

app.get("/about", (request, response) => {
    response.send("this is a get request to send the response only")
})

app.post("/about", (request, response) => {
    response.send("this is a post request to store the data to db and send response back")
})

app.put("/about", (request, response) => {
    response.send("this is a put request to update any data")
})

app.delete("/about", (request, response) => {
    response.send("this is a delete request to delete any data")
})


app.listen(port, () => console.log(`Your server is running on localhost:${port}`));