import bunyan from "bunyan";
import bunyanFormat from "bunyan-format";
import path from "path";

const appRootDir = path.join(__dirname, "..");

let createLogger: any;
if (process.env.NODE_ENV === "production") {
	const formatOut = bunyanFormat({
		outputMode: "short",
	});

	//creating bunyan logging
	createLogger = (name: string) => {
		return bunyan.createLogger({
			name,
			serializers: bunyan.stdSerializers,
			streams: [
				{
					level: "info",
					path: `${appRootDir}/logs/info.production.log`,
					stream: formatOut,
				},
			],
		});
	};
} else {
	// If no NODE_ENV configured, then it's considered as Development
	//Declaring output mode.
	const formatOut = bunyanFormat({
		outputMode: "short",
	});

	//creating bunyan logging
	createLogger = (name: string) => {
		return bunyan.createLogger({
			name,
			src: true,
			serializers: bunyan.stdSerializers,
			stream: formatOut,
		});
	};
}

export default createLogger;
