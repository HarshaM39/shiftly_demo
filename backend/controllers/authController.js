const bcrypt = require("bcrypt");
const db = require("../db");


// ==================== REGISTER ====================

const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  try {
    // Check if the user already exists
    const checkSql = "SELECT id FROM users WHERE email = ?";

    db.query(checkSql, [email], async (err, results) => {
      if (err) {
        console.error("Database error:", err.message);

        return res.status(500).json({
          success: false,
          message: "Database error"
        });
      }

      if (results.length > 0) {
        return res.status(409).json({
          success: false,
          message: "User already exists"
        });
      }

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertSql =
        "INSERT INTO users (email, password) VALUES (?, ?)";

      db.query(
        insertSql,
        [email, hashedPassword],
        (err, result) => {
          if (err) {
            console.error("Database error:", err.message);

            return res.status(500).json({
              success: false,
              message: "Database error"
            });
          }

          console.log("User registered successfully:", email);

          return res.status(201).json({
            success: true,
            message: "Registration successful",
            data: {
              id: result.insertId,
              email
            }
          });
        }
      );
    });
  } catch (error) {
    console.error("Registration error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Registration failed"
    });
  }
};


// ==================== LOGIN ====================

const login = (req, res) => {
  const { email, password } = req.body;

  // Log that a login request reached the backend.
  // Never log the password.
  console.log("Login request received for:", email);

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  const sql =
    "SELECT id, email, password FROM users WHERE email = ?";

  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Database error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Database error"
      });
    }

    if (results.length === 0) {
      console.log("Login failed - user not found:", email);

      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const user = results[0];

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      console.log("Login failed - invalid password for:", email);

      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    console.log("Login successful for:", user.email);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: user.id,
        email: user.email
      }
    });
  });
};


// ==================== GET USERS ====================

const getUsers = (req, res) => {
  const sql = "SELECT id, email FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Database error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Database error"
      });
    }

    console.log("Users fetched successfully");

    return res.status(200).json({
      success: true,
      data: results
    });
  });
};


// ==================== EXPORT ====================

module.exports = {
  register,
  login,
  getUsers
};