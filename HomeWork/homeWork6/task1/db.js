import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: 'root',   
  database: 'product_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});