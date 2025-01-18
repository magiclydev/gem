const express = require('express');
const router = express.Router();
const adminRoutes = require('./routes/admin.js');
// ... require other models (Question, TrialCode, etc.)

// Authentication middleware (protect admin routes)
const authMiddleware = (req, res, next) => {
    if (req.session.user && req.session.user.role !== 'User') {
        next(); // User is logged in and not a regular 'User'
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

router.use(authMiddleware); // Apply to all admin routes

// ... admin routes for managing questions, trial codes, etc.

module.exports = router;
