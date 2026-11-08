---
title: "Node.js with MongoDB (Mongoose)"
sidebar_position: 29
---

# Node.js with MongoDB (Mongoose)

MongoDB stores data as documents (like JSON) instead of tables.

```
npm install mongoose
```

```javascript
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  marks: { type: Number, min: 0, max: 100 },
  createdAt: { type: Date, default: Date.now },
});

const Student = mongoose.model("Student", studentSchema);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/school");

  await Student.create({ name: "Ali", marks: 85 });

  const all = await Student.find();
  const top = await Student.find({ marks: { $gt: 80 } }).sort({ marks: -1 });
  const one = await Student.findById("PUT_AN_ID_HERE");

  await Student.updateOne({ name: "Ali" }, { marks: 90 });
  await Student.deleteOne({ name: "Ali" });

  await mongoose.disconnect();
}
main();
```

Use MySQL when your data is very structured. Use MongoDB when your data shape changes often.
