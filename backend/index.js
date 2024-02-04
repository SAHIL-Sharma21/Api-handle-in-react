import express from "express";
const app = express();


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello backend!")
})

//making products apis
app.get("/api/products", (req, res) => {

    //product list
    const products = [
        {
            id: 1,
            title: "Sofas",
            price: 2500,
            image: "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
            id: 2,
            title: 'Wall Painting',
            price: 5000,
            image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww'
        }, {

        }
    ];

    res.send(products);
});



app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
})