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
            id: 3,
            title: "Flower Decor",
            price: 1500,
            image: 'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D'
        }, {
            id: 4,
            title: 'Basic Table',
            price: 6000,
            image: 'https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D'
        }, {
            id: 5,
            title: 'Bed',
            price: 10000,
            image: "https://images.unsplash.com/photo-1616137507072-f7276b168614?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
            id: 6,
            title: "Lamp",
            price: 6000,
            image: "https://images.unsplash.com/photo-1607809714110-e34f71c7b2ed?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    // res.send(products);
    //adding delay in api response by 3sec
    // ? is search query parameter and we want to implement this feature 
    // http://localhost:3000/api/products?search=BasicTable

    //checking if request value is given

    if (req.query.search) {
        //using filter on products if our search matches with the query
        const filterPorducts = products.filter(product => product.title.includes(req.query.search));
        res.send(filterPorducts);
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000);
});



app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
})