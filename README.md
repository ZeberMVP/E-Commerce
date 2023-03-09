# E-Commerce
This is a SPA made with React and Sass for the front, Node.js with Express for the back and PostgreSQL with Sequelize for the database. The app is deployed in [Render](https://render.com/) through Docker. [Click hero to see the web deployed](https://e-commerce-erc7.onrender.com/)

![air force search](https://user-images.githubusercontent.com/106594858/224170665-266861c0-b51e-4c04-87e8-32e4d5fbf598.png) <br>

Sneaker Shop is an e-commerce where you can buy different sneakers from some brands like Nike or Adidas. The app is pretty simple to use. You can search sneakers by name or brand and sort them by name, relevance or price. If you click any sneaker, you can see more details from it.

![deatils view](https://user-images.githubusercontent.com/106594858/224175331-cc599143-142c-441d-959e-6fd1cb21e8bf.png)

You can add any product to the cart (each time you click "add to cart", the quantity of that product is increased) and then click in any of the shopping cart icons. This action will head you to the cart, where you can choose the size and quantity of the pair. You can also delete the product from your cart. When you are done, you have to submit your email address and we will contact you to proccess the order (you won't receive any email, this is just a prototype)

![cart view](https://user-images.githubusercontent.com/106594858/224175929-c6ba0e7a-5f12-4f10-9d87-a4bfa3ecd126.png)

## Routes
### /api/product (GET)
You get a full list of the products in the db
### /api/product (POST)
You can add a product to the db
### /api/provider (POST)
You can add a provider to the db
### /api/provider/:product_name (POST)
You get the data from an specific product and its provider

## Run the app locally
If you want to run the app in your system, follow this steps:

1. Clone this repo
2. Change the line ``` const serverUrl = "https://e-commerce-erc7.onrender.com"; ``` to ``` const serverUrl = "http://localhost:5000"; ``` in Details.jsx, Products.jsx and Cart.jsx
3. Create a .env folder in the route folder and add <br>
```
DATABASE_URL=your_db_url
```
4. Run ``` npm i ```
5. Run ``` npm run dev ```
