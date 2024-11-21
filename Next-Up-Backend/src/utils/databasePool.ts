const { Pool } = require('pg');

export const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	port: 5432,
	password: 'admin',
	database: 'next_up',
	max: 5,
	// Amount of time to wait for a connection to the database to form before timing out.
	connectionTimeoutMillis: 20000,
	// Amount of time a connection sits idle in a pool before it is torn down and discarded.
	idleTimeoutMillis: 20000,
	// Boolean tells the node event loop to exit the process as soon as all connections are idle.
	allowExitOnIdle: false,
});
