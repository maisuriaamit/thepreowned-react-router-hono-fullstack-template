import { Hono } from "hono";
import { createRequestHandler } from "react-router";
import api from "./api";

const app = new Hono();

app.route("/api", api);

// Add more routes here
//app.get("/", (c) => c.text("Hello from Hono with React Router!"));

app.get("*", (c) => {
	const requestHandler = createRequestHandler(
		() => import("virtual:react-router/server-build"),
		import.meta.env.MODE,
	);

	return requestHandler(c.req.raw, {
		cloudflare: { env: c.env, ctx: c.executionCtx },
	});
});

export default app;
