const adminAuthSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { 
       type: String, 
       required: true,
       match: [/^(?=.*Admin)(?=.*[A-Z])(?=.*\d).{8,}$/, 'Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and include the word "Admin".']
    }
  });
  