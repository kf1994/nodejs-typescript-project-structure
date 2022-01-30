import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
	// This error should crash whole process
	throw new Error("Couldn't find .env file");
}

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// Set the Port to '4000' by default
process.env.PORT = process.env.PORT || '4000';

/**
 * Port config
 */
export const port = parseInt(process.env.PORT, 10);

/**
 * Server settings
 */
export const environment = process.env.NODE_ENV;
export const onMaintenance = (process.env.ON_MAINTENANCE === 'true');
