const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://weroo:weroo123@cluster0.dp83dff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = "ecommerce";

const insertExampleData = async () => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db(dbName);

  await db.collection("products").insertMany([
    { _id: 1, name: "Product 1" },
    { _id: 2, name: "Product 2" },
    { _id: 3, name: "Product 3" },
    { _id: 4, name: "Product 4" },
    { _id: 5, name: "Product 5" },
    { _id: 6, name: "Product 6" },
    { _id: 7, name: "Product 7" },
    { _id: 8, name: "Product 8" },
    { _id: 9, name: "Product 9" },
    { _id: 10, name: "Product 10" },
    { _id: 11, name: "Product 11" },
    { _id: 12, name: "Product 12" },
  ]);

  await db.collection("wishlists").insertOne({
    clientId: "client1",
    products: [1, 2, 3],
  });

  await client.close();
};

insertExampleData().then(() => console.log("Example data inserted"));
