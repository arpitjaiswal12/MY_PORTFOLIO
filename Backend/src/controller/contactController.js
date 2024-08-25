const Contact = require("../model/contactModel.js");

exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name && !email) {
      return res
        .status(400)
        .json({ error: "Name or email fileds are required" });
    }

    const newContact = await Contact.create({
      email,
      name,
      message,
    });

    return res.status(201).json({
      success: true,
      data: newContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
