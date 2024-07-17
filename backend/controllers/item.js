const Item = require("../models/itemSchema");

//Add item

async function addItem(req, res) {
  const {
    name,
    age,
    gender,
    dob,
    mobile,
    poster,
   
  } = req.body;
  console.log(req.body);
  if (!name || !age || !gender || !dob || !mobile) {
    return res.status(422).json({ error: "fill all the details" });
  }
  try {
    const preitem = await Item.findOne({ name: name });

    if (preitem) {
      return res.status(422).json({ error: "This item is Already Exist" });
    } else {
      const newItem = new Item({
        name,
        age,
        gender,
        dob,
        mobile,
        poster,
      });

      const savedItem = await newItem.save();
      return res.status(201).json({ status: 201, savedItem });
    }
  } catch (error) {
    console.log("catch block error", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

//Get all Items

async function getAllItem(req, res) {
  try {
    const allItems = await Item.find();
    res.status(201).json({ status: 201, allItems });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function getSelectedItem(req, res) {
  const itemId = req.params.itemid;
  try {
    const selectedItems = await Item.find({ _id: itemId });
    res.status(201).json({ status: 201, selectedItems });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function editItems(req, res) {
  const itemId = req.params.itemid;
  console.log(itemId);
  const {
    name,
    age,
    gender,
    dob,
    mobile,
    poster,
  } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      {
        $set: {
          name,
          age,
          gender,
          dob,
          mobile,
          poster,
        },
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ status: 200, updatedItem });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteItems(req, res) {
  const itemId = req.params.itemid;

  try {
    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ status: 200, deletedItem });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addItem,
  getAllItem,
  editItems,
  deleteItems,
  getSelectedItem,
};
