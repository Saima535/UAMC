import { Router } from "express";
import { requireAdminAuth } from "../../common/middlewares/require-admin-auth.js";
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

contentRouter.get("/stats", requireAdminAuth, getContentStatsHandler);
contentRouter.get("/categories/:type", getContentCategoriesHandler);
contentRouter.get("/", listContentItemsHandler);
contentRouter.get("/:id", getContentItemHandler);
contentRouter.post("/", requireAdminAuth, createContentItemHandler);
contentRouter.patch("/:id", requireAdminAuth, updateContentItemHandler);
contentRouter.delete("/:id", requireAdminAuth, deleteContentItemHandler);

export { contentRouter };
