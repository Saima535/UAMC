import type { Request, Response } from "express";
import {
  createContentItem,
  deleteContentItem,
  getContentCategories,
  getContentItemById,
  getContentStats,
  listContentItems,
  updateContentItem
} from "./content.service.js";

function getSingleParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export async function listContentItemsHandler(request: Request, response: Response) {
  const items = await listContentItems(request.query);

  response.status(200).json({
    success: true,
    data: items
  });
}

export async function getContentItemHandler(request: Request, response: Response) {
  const item = await getContentItemById(getSingleParam(request.params.id));

  response.status(200).json({
    success: true,
    data: item
  });
}

export async function createContentItemHandler(request: Request, response: Response) {
  const item = await createContentItem(request.body);

  response.status(201).json({
    success: true,
    data: item
  });
}

export async function updateContentItemHandler(request: Request, response: Response) {
  const item = await updateContentItem(getSingleParam(request.params.id), request.body);

  response.status(200).json({
    success: true,
    data: item
  });
}

export async function deleteContentItemHandler(request: Request, response: Response) {
  const result = await deleteContentItem(getSingleParam(request.params.id));

  response.status(200).json({
    success: true,
    data: result
  });
}

export async function getContentStatsHandler(_request: Request, response: Response) {
  const stats = await getContentStats();

  response.status(200).json({
    success: true,
    data: stats
  });
}

export async function getContentCategoriesHandler(request: Request, response: Response) {
  const type = request.params.type as "notice" | "publication";
  const categories = await getContentCategories(type);

  response.status(200).json({
    success: true,
    data: categories
  });
}
