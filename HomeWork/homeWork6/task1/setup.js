import pool from './db.js';

const createTable = async () => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      )
    `;
    await pool.query(sql);
    console.log('Таблица products создана');
  } catch (err) {
    console.error('Ошибка при создании таблицы:', err);
  }
};

createTable();