import { Hono } from "hono";
import productsApiRoutes from "./products/products-controller";

const api = new Hono();

api.route("/products", productsApiRoutes);

api.get("/", (c) => c.text("API Get Endpoint"));
api.get(":id", (c) => c.text(`API Get Endpoint with ID: ${c.req.param("id")}`));
api.post("/", (c) => c.text("API Post Endpoint"));
api.patch("/", (c) => c.text("API Patch Endpoint"));
api.delete("/", (c) => c.text("API Delete Endpoint"));



export default api;