// const path = require("path")

// const notes = '/Users/mstars_lab1_12/desktop/test.txt';

// console.log(path.dirname(notes))

// console.log(path.basename(notes))

// console.log(path.extname(notes))

// const fs = require("fs")

// fs.stat('/Users/mstars_lab1_12/desktop/test.txt', (err, stats) =>{
// if(err){
//     console.log(err)
//     return
// }else{
//     console.log(stats)
// }

// })

// const fs = require("fs")
// fs.appendFile("file.log", content, err => {
//     if(err) {
//         console.log(err)
//         return
//     }
// })

// const fs = require("fs")
// const folderPath = "/Users/mstars_lab1_12/desktop/asd"
// console.log(fs.readdirSync(folderPath))

const fs = require("fs");
const { db } = require("../mongo/models/food");
fs.renameSync(
  "/Users/mstars_lab1_12/Desktop/nameSoliv",
  "/Users/mstars_lab1_12/desktop/nnameSoliv32",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
  }
);
db.universities.aggregate([
  { $group: { _id: { name: "$name", city: "$city" }, totaldocs: { $sum: 1 } } },
]);
db.universities.aggregate([{ $group: { _id: null, count: { $count: {} } } }]);
// db.universities.aggregate({[$group:{ _i}]})

db.universities.insertOne([
  {
    totalStudents: 100,
  },
]);

db.universities.aggregate([
  {
    $group: {
      _id: { name: "$name", counted: "$totalstudent" },
      totalStudents: { $sum: { $multiply: ["$totalstudents", 2] } },
    },
  },
  { $match: { totalStudents: { $gte: 150 } } },
  { $sort: { totalStudents: -1 } },
]);

db.universities.aggregate([
  {
    $group: {
      _id: { name: "$name", counted: "$totalStudent" },
      totalstudents: { $sum: { $multiply: ["$totalStudents", 2] } },
    },
  },
  { $match: { totalstudents: { $gte: 150 } } },
  { $sort: { totalstudents: -1 } },
]);

db.universities.aggregate([
  { $group: { _id: null, summitTotal: { $sum: "$totalStudents" } } },
]);

db.universities
  .aggregate([
    { $match: { name: "UPSA" } },
    { $unwind: "$students" },
    { $group: { _id: null, maximum: { $max: "$students.year" } } },
  ])
  .pretty();

db.universities
  .aggregate([
    { $match: { name: "USAL" } },
    { $unwind: "$students" },
    { $group: { _id: null, maximum: { $max: "$students.year" } } },
  ])
  .pretty();

db.universities
  .aggregate([
    { $match: { name: "UPSA" } },
    { $unwind: "$students" },
    { $project: { _id: 0, "students.year": 1, "students.number": 1 } },
    { $sort: { "students.number": -1 } },
    { $limit: 2 },
  ])
  .pretty();

db.universities
  .aggregate([
    {
      $match: { name: "USAL" },
    },
    { $project: { _id: 0, name: 1 } },
    {
      $lookup: {
        from: "courses",
        localField: "name",
        foreignField: "university",
        as: "courses",
      },
    },
  ])
  .pretty();

db.courses.aggregate([{ $sortByCount: "$level" }]);

db.createCollection("food_info", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "name",
        "price",
        "portion",
        "discount",
        "stock",
        "category_name",
      ],
      properties: {
        name: { bsonType: "string", description: "error this is string" },
        price: { bsonType: "int", description: "error this is number" },
        portion: { bsonType: "int", description: "error this is number" },
        discount: { bsonType: "int", description: "error this is number" },
        stock: { bsonType: "int", description: "error this is number" },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "error",
});
db.order.insertOne({
  order_detail: {
    food_id: "623d3050b2ebb626329d4cb7",
    food_price: 7500.0,
  },
  customer: "623d2e46b2ebb626329d4cae",
  deliver: "623d3872b2ebb626329d4cb8",
  ordered_date: "just now",
  order_status: "finish",
  total_free: 7500.0,
});

db.createCollection("order", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "order_detail",
        "customer",
        "deliver",
        "ordered_date",
        "order_status",
        "total_free",
      ],
      properties: {
        order_detail: {
          bsonType: "object",
          required: ["food_id", "food_price"],
          properties: {
            food_id: { bsonType: "string" },
            food_price: { bsonType: "double" },
          },
        },
        customer: {
          bsonType: "string",
        },
        deliver: {
          bsonType: "string",
        },
        ordered_date: {
          bsonType: "date",
        },
        order_status: {
          bsonType: "string",
        },
        total_free: {
          bsonType: "double",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});
db.createCollection("user", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "role"],
      properties: {
        name: {
          bsonType: "string",
        },
        email: {
          bsonType: "string",
        },
        password: {
          bsonType: "string",
        },
        role: {
          bsonType: "int",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});

db.user.insertMany([
  { name: "Khangai", email: "kh@yahoo.com", password: "124567", role: 2 },
  {
    name: "Temuulen",
    email: "temuulen@yahoo.com",
    password: "123456",
    role: 2,
  },
  {
    name: "Bolor",
    email: "Bolor@yahoo.com",
    password: "1234567",
    role: 2,
  },
]);
db.food_info.insertOne({
  name: "huushuur",
  price: 1500,
  portion: 1,
  discount: 0,
  stock: 3,
  category_name: "undsen hool",
});

db.order.aggregate([
  { $addFields: { shalgaltid: { $toObjectId: "$deliver" } } },
  {
    $lookup: {
      from: "user",
      localField: "shalgaltid",
      foreignField: "_id",
      as: "result",
    },
  },
]);
db.order.aggregate([
  { $addFields: { shalgaltid: { $toObjectId: "$customer" } } },
  {
    $lookup: {
      from: "user",
      localField: "shalgaltid",
      foreignField: "_id",
      as: "result",
    },
  },
  { $match: { "result.name": "Tuvshee" } },
]);
db.user.aggregate([
  { $match: { name: "Angarag" } },
  { $addFields: { shalgaltid: { $toString: "$_id" } } },

  {
    $lookup: {
      from: "order",
      localField: "shalgaltid",
      foreignField: "customer",
      as: "result",
    },
  },
]);

db.order.aggregate([
  {
    $addFields: {
      shalgaltid: { $toObjectId: "$order_detail.food_id" },
      shalgaltid2: { $toObjectId: "$customer" },
    },
  },

  {
    $lookup: {
      from: "food_info",
      localField: "shalgaltid",
      foreignField: "_id",
      as: "result",
    },
  },
  {
    $lookup: {
      from: "user",
      localField: "shalgaltid2",
      foreignField: "_id",
      as: "result1",
    },
  },
  { $match: { name: "Angarag" } },
]);

db.order.aggregate([
  {
    $addFields: {
      catObjId: { $toObjectId: "$customer_id" },
      foodObjId: { $toObjectId: "$order_detail.food_id" },
    },
  },
  {
    $lookup: {
      from: "user",
      localField: "catObjId",
      foreignField: "_id",
      as: "reserve",
    },
  },
  {
    $lookup: {
      from: "food_info",
      localField: "foodObjId",
      foreignField: "_id",
      as: "foodName",
    },
  },
  { $match: { "reserve.name": "Baatarkhuu" } },
  {
    $project: {
      "reserve.name": 1,
      ordered_date: 1,
      catObjId: 1,
      foodObjId: 1,
      "foodName.name": 1,
    },
  },
  { $sort: { "reserve.ordered_date": 1 } },
]);
db.foods.insertOne({
  discount: 0,
  sales: false,
  category_id: "623d3031b2ebb626329d4cb4",
  name: "Гахайн мах",
  price: 10800,
  portion: 1,
  stock: 10,
  image: "/food/chicken_ramen.png",
  tumb_img: "3_tumb.png",
  ingredients: "Тахианы гуяны мах, будааны гоймон, тахианы шөл",
  category: "Үндсэн хоол",
});
db.users.find({ $or: [{ name: search }, { phone: search }, { email: search }, { address: search }] })