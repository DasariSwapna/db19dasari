var Apple = require("../models/apple");

// List of all Apples
exports.apple_list = async function (req, res) {
  try {
    theApples = await Apple.find();
    res.send(theApples);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// VIEWS
// Handle a show all view
exports.apple_view_all_Page = async function (req, res) {
  try {
    theApples = await Apple.find();
    res.render("apple", {
      title: "apple Search Results",
      results: theApples,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Apple.
exports.apple_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Apple.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

// Handle Costume delete on DELETE.
exports.apple_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await Apple.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};

// Handle Apple update form on PUT.
exports.apple_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Apple.findById(req.params.id);
    // Do updates of properties
    if (req.body.apple_type) toUpdate.apple_type = req.body.apple_type;
    if (req.body.cost) toUpdate.cost = req.body.cost;
    if (req.body.quantity) toUpdate.quantity = req.body.quantity;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
  }
};

// Handle Costume create on POST.
exports.apple_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Apple();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"apple_type":"goat", "quantity":12, "cost":"large"}
  document.apple_type = req.body.apple_type;
  document.quantity = req.body.quantity;
  document.cost = req.body.cost;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

exports.apple_create_Page = function (req, res) {
  console.log("create view");
  try {
    res.render("applecreate", { title: "Apple Create" });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle a show one view with id specified by query
exports.apple_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id);
  try {
    result = await Apple.findById(req.query.id);
    res.render("appledetail", { title: "Apple Detail", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};
// Handle building the view for updating a costume.
// query provides the id
exports.apple_update_Page = async function (req, res) {
  console.log("update view for item " + req.query.id);
  try {
    let result = await Apple.findById(req.query.id);
    res.render("appleupdate", { title: "Apple Update", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};
// Handle a delete one view with id from query
exports.apple_delete_Page = async function (req, res) {
  console.log("Delete view for id " + req.query.id);
  try {
    result = await Apple.findById(req.query.id);
    res.render("appledelete", { title: "Apple Delete", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};
