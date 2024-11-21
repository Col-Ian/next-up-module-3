import express from 'express';
import userRouter from './routers/user';
import characterRouter from './routers/character';
import cors from 'cors';

const PORT = process.env.PORT ?? 5001;

const app = express();

app.use(express.json());

var corsOptions = {
	origin: 'http://localhost:5173',
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use('/api/user', userRouter);

app.use('/api/character', characterRouter);

/**
 * Exercise:
 * Implement a new data model and corresponding API. At the end of the day you should
 * create a model that interests you, and progresses your project in some way, but if
 * you can't think of anything, try creating a model for a collection of books which
 * may have the following properties:
 *  - ISBN
 *  - title
 *  - author
 *  - etc...
 * and lives at /api/book
 *
 * Whatever you decide be sure to implement the full set of POST, GET, PUT, and DELETE
 * operations assuming that makes sense in your case.
 */

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
