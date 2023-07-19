import {config} from 'dotenv'

config();

export const PORT = process.env.PORT || 3000;

// export const DB_USER = process.env.DB_USER || "root";
// export const DB_PASSWORD = process.env.DB_PASSWORD || "circo12";
// export const DB_PORT= process.env.DB_PORT || 3006;
// export const DB_DATABASE = process.env.DATABASE || "publications_db";
// export const DB_HOST = process.env.DB_HOST || "localhost";

export const MYSQLHOST= process.env.MYSQLHOST || "localhost";
export const MYSQLUSER= process.env.MYSQLUSER || "root";
export const MYSQLPASSWORD= process.env.MYSQLPASSWORD || "circo12";
export const MYSQLPORT= process.env.MYSQLPORT || 3006;
export const MYSQLDATABASE= process.env.MYSQLDATABASE || "publications_db";