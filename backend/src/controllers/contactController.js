const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendContactNotification } = require('../utils/emailService');
const mongoose = require('mongoose');

// @desc    Submit a contact form inquiry
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg || 'Invalid submission data',
        errors: errors.array(),
      });
    }

    const { name, email, subject, message } = req.body;

    let savedContact = null;
    let messageId = `msg_${Date.now()}`;

    // If MongoDB is connected, save to database
    if (mongoose.connection.readyState === 1) {
      savedContact = await Contact.create({
        name,
        email,
        subject,
        message,
        status: 'new',
      });
      messageId = savedContact._id.toString();
    } else {
      console.log('ℹ️ MongoDB disconnected: Contact message processed in memory mode.');
    }

    // Attempt email dispatch asynchronously (never breaks submission response)
    const emailData = {
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    };
    sendContactNotification(emailData).catch((err) =>
      console.error('Email dispatch error background task:', err)
    );

    return res.status(201).json({
      success: true,
      message: 'Thank you for contacting me. Your message has been sent successfully.',
      data: {
        id: messageId,
        name,
        email,
        subject,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
};
