//1 update torol
db.sales.updateOne(
  { _id: ObjectId("5bd761dcae323e45a93ccfe9") },
  {
    $push: {
      items: {
        $each: [
          {
            name: "keyobard",
            tags: ["writing", "office", "school", "stationary"],
            price: 60,
            quantity: 1,
          },
        ],
      },
    },
  }
);
//2 dor hayj 1 array deer update hiih
db.sales.updateOne(
  { _id: ObjectId("5bd761dcae323e45a93ccfea") },
  {
    $set: {
      "items.0": [
        {
          name: "notebook",
          tags: ["writings", "offices", "schools", "stationary"],
          price: 600,
          quantity: 1,
        },
      ],
    },
  }
);
//3 dor hayj 1 logical operator ashiglana

db.sales.find({
  $and: [
    { items: { $elemMatch: { name: "binder", price: Decimal128("20.08") } } },
    { items: { $elemMatch: { name: "pens", price: Decimal128("23.08") } } },
  ],
});
//4 elemmatch arrayfilter tus bur 1 udaa
db.sales.updateOne(
  { _id: ObjectId("5bd761dcae323e45a93ccfea") },
  { $set: { "items.$[elem].quantity": 10 } },
  { arrayFilters: [{ elem: { quantity: 1 } }] }
);
//5 slice or sort
db.sales.updateOne(
  { _id: ObjectId("5bd761dcae323e45a93ccffb") },
  {
    $push: {
      items: {
        $each: [
          { name: "book", tags: "array", price: 10, quantity: 3 },
          { name: "note", tags: "array", price: 11, quantity: 2 },
          { name: "notepad", tags: "array", price: 12, quantity: 3 },
        ],
        $sort: { price: 1 },
        $slice: 6,
      },
    },
  }
);
//6 inc or min operator ashiglasan

db.sales.updateOne(
  { _id: ObjectId("5bd761dcae323e45a93ccffb") },
  { $inc: { "items.$[].quantity": 1 } }
);
//7 addToSet bol pull operator ashiglasan
db.results.updateOne({ _id: 2 }, { $pull: { grades: { $in: [20, 30] } } });
//8 position operator
db.results.updateOne(
  { _id: 2 },
  { $push: { grades: { $each: [10, 20, 30], $position: 1 } } }
);
