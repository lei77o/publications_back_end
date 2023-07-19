import { createPool } from "mysql2/promise";
import {MYSQLHOST, MYSQLDATABASE, MYSQLPASSWORD, MYSQLUSER, MYSQLPORT} from './config.js'

export const pool = createPool({
    host: MYSQLHOST,
    user: MYSQLUSER,
    password:MYSQLPASSWORD,
    port: MYSQLPORT,
    database: MYSQLDATABASE,
})
