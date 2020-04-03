import express from 'express';
import bodyParser from 'body-parser';
import helmet  from 'helmet';
import log4js from 'log4js';
import cors from  'cors';


const appLogger = log4js.getLogger();

// create our Express app
const app = express();

// Security
app.use(helmet());

// HTTP LOGGER

app.use(log4js.connectLogger(appLogger));

// CORS - REMOVE Production
app.use(cors());

// Incoming Request Objects

app.use((req, res, next) => {
	bodyParser.json({
		limit: '50mb',
		verify: (req, res, buf, encoding) => {
			req.rawBody = buf.toString();
		}
	})(req, res, err => {
		if (err) {
			res.status(400).send('Bad body Request');
			return;
		}
		next();
	});
});

app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true
}));

//Routes Module
export default app