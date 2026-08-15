import { Router } from "express";
import {
  createContentItemHandler,
  deleteContentItemHandler,
  getContentCategoriesHandler,
  getContentItemHandler,
  getContentStatsHandler,
  listContentItemsHandler,
  updateContentItemHandler
} from "./content.controller.js";

const contentRouter = Router();

contentRouter.get("/stats", getContentStatsHandler);
contentRouter.get("/categories/:type", getContentCategoriesHandler);
contentRouter.get("/", listContentItemsHandler);
contentRouter.get("/:id", getContentItemHandler);
contentRouter.post("/", createContentItemHandler);
contentRouter.patch("/:id", updateContentItemHandler);
contentRouter.delete("/:id", deleteContentItemHandler);

export { contentRouter };
