import { Hono } from "hono";
import * as productService from "./product-service";

const productsApiRoutes = new Hono()
    .get("/", (c) => c.text("Products API Get Endpoint"))
    .get(":id", (c) => {
        const productId = c.req.param("id");
        const product = productService.getById(productId);
        return c.json(product);
    })
    .post("/", async (c) => {
        const newProduct = await c.req.json();
        const createdProduct = productService.create(newProduct);
        return c.json(createdProduct);
    })
    .patch("/:id", async (c) => {
        const productId = c.req.param("id");
        const updatedData = await c.req.json();
        const updatedProduct = productService.update(productId, updatedData);
        return c.json(updatedProduct);
    })
    .delete("/:id", (c) => {
        const productId = c.req.param("id");
        const deletedProduct = productService.deleteById(productId);
        return c.json(deletedProduct);
    });

export default productsApiRoutes;