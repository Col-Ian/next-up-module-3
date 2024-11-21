// const { Pool } = require('pg');

import { pool } from '../utils/databasePool';

// const pool = new Pool({
// 	host: 'localhost',
// 	user: 'postgres',
// 	port: 5432,
// 	password: 'admin',
// 	database: 'next_up',
// 	max: 5,
// 	// Amount of time to wait for a connection to the database to form before timing out.
// 	connectionTimeoutMillis: 20000,
// 	// Amount of time a connection sits idle in a pool before it is torn down and discarded.
// 	idleTimeoutMillis: 20000,
// 	// Boolean tells the node event loop to exit the process as soon as all connections are idle.
// 	allowExitOnIdle: false,
// });

export async function insertUser(
	user_id: number,
	username: string,
	user_password: string,
	user_email: string
) {
	// const client = await pool.connect();

	const insertQuery = `INSERT INTO public.users(user_id, username, user_password, user_email) VALUES($1, $2, $3, $4) RETURNING *`;
	// Using pool.query instead of a connection automatically checks out and releases a connection.
	pool.query(
		insertQuery,
		[user_id, username, user_password, user_email],
		(err: any, res: any) => {
			if (err) {
				console.log(err);
			} else {
				console.log(res.rows);
			}
		}
	);
	// client.release(true);
}

export async function getSingleUser(user_id: number) {
	const idQuery = `SELECT * FROM public.users WHERE user_id=$1`;

	let response = await pool.query(idQuery, [user_id]);

	return response.rows[0];
}

// Test
export async function deleteSingleUser(user_id: number) {
	const client = await pool.connect();
	const idQuery = `DELETE FROM public.users WHERE user_id=$1`;

	let response = await client.query(idQuery, [user_id]);

	client.release(true);
	return response.rows[0];
}

// const user_id = 203498;

// const idQuery = `SELECT * FROM public.users WHERE user_id=$1`;

// client.query(idQuery, [user_id], (err, res) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(res.rows[0]);
// 	}
// 	client.end();
// });

// const insertQuery = `INSERT INTO public.users(user_id, username, user_password) VALUES($1, $2, $3) RETURNING *`;
// client.query(insertQuery, ['841', 'Testing', 'passwordTest'], (err, res) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(res);
// 	}
// });
// client.query(
// 	insertQuery,
// 	['901', 'Second Test', 'passwordTest2'],
// 	(err, res) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(res);
// 		}
// 	}
// );

// client.query(`SELECT * FROM public.users`, (err, res) => {
// 	if (!err) {
// 		testObject = res.rows[0];
// 	} else {
// 		console.log(err);
// 	}
// 	console.log(testObject);
// 	client.end();
// });

// client.query(`SELECT user_id FROM public.users`, (err, res) => {
// 	if (!err) {
// 		console.log(res.rows);
// 	} else {
// 		console.log(err);
// 	}
// 	// client.end();
// });

// client.query(`SELECT * FROM public.users WHERE user_id='901'`, (err, res) => {
// 	if (!err) {
// 		console.log(res.rows);
// 	} else {
// 		console.log(err);
// 	}
// 	client.end();
// });

// client.query(`SELECT * FROM public.users ORDER BY username`, (err, res) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(res.rows);
// 	}
// 	client.end();
// });

// Select all users with that id and username starts with S
// client.query(`SELECT * FROM public.users WHERE user_id='901' AND username LIKE 'S%'`, (err, res) => {
// 	if (!err) {
// 		console.log(res.rows);
// 	} else {
// 		console.log(err);
// 	}
// 	client.end();
// });
