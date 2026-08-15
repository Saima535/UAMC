import { z } from "zod";
import { type ContentItemDocument, ContentItemModel, contentTypes } from "./content.model.js";

const contentItemInputSchema = z.object({
  type: z.enum(contentTypes),
  title: z.string().trim().min(1).max(220),
  category: z.string().trim().min(1).max(80),
  publishedAt: z.string().datetime(),
  timeLabel: z.string().trim().max(40).default(""),
  summary: z.string().trim().max(1200).default(""),
  link: z.string().trim().max(500).default(""),
  image: z.string().trim().max(500).default(""),
  isPublished: z.boolean().default(true),
  order: z.number().int().min(0).max(10000).default(0)
});

const contentItemUpdateSchema = contentItemInputSchema.partial().extend({
  type: z.enum(contentTypes).optional()
});

const listQuerySchema = z.object({
  type: z.enum(contentTypes),
  category: z.string().trim().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  includeUnpublished: z
    .union([z.boolean(), z.string()])
    .optional()
    .transform((value) => value === true || value === "true")
});

type ContentType = (typeof contentTypes)[number];
type ContentItemInput = z.infer<typeof contentItemInputSchema>;
type ContentItemUpdate = z.infer<typeof contentItemUpdateSchema>;
type ContentListQuery = z.infer<typeof listQuerySchema>;

const defaultContentItems: ContentItemInput[] = [
  {
    type: "notice",
    title: "Application for Admission 2025 is now open",
    category: "General Notice",
    publishedAt: "2025-03-12T15:00:00.000Z",
    timeLabel: "3:00 PM",
    summary: "Admission applications are now open for eligible candidates.",
    isPublished: true,
    order: 1,
    link: "",
    image: ""
  },
  {
    type: "notice",
    title: "Schedule for Semester Final Examination released",
    category: "Reports",
    publishedAt: "2025-03-10T09:30:00.000Z",
    timeLabel: "9:30 AM",
    summary: "Students can review the updated semester final examination schedule.",
    isPublished: true,
    order: 2,
    link: "",
    image: ""
  },
  {
    type: "notice",
    title: "International Medical Education Seminar registration",
    category: "Admission Notice",
    publishedAt: "2025-03-08T11:15:00.000Z",
    timeLabel: "11:15 AM",
    summary: "Registration is now available for the upcoming seminar.",
    isPublished: true,
    order: 3,
    link: "",
    image: ""
  },
  {
    type: "notice",
    title: "Faculty Development Program for academic staff",
    category: "General Notice",
    publishedAt: "2025-03-05T13:00:00.000Z",
    timeLabel: "1:00 PM",
    summary: "A new faculty development program has been announced for academic staff.",
    isPublished: true,
    order: 4,
    link: "",
    image: ""
  },
  {
    type: "notice",
    title: "Public health awareness drive on campus this month",
    category: "Job Circular",
    publishedAt: "2025-03-03T10:00:00.000Z",
    timeLabel: "10:00 AM",
    summary: "Campus-wide awareness activities will take place throughout the month.",
    isPublished: true,
    order: 5,
    link: "",
    image: ""
  },
  {
    type: "publication",
    title: "Journal of UAMC Medicine, Volume 06, Issue 02",
    category: "Journal",
    publishedAt: "2025-03-25T15:40:00.000Z",
    timeLabel: "3.40 PM",
    summary: "Latest issue of the institutional journal.",
    isPublished: true,
    order: 1,
    link: "",
    image: ""
  },
  {
    type: "publication",
    title: "Research bulletin on clinical education practices",
    category: "Journal",
    publishedAt: "2025-03-18T15:40:00.000Z",
    timeLabel: "3.40 PM",
    summary: "Clinical education research bulletin.",
    isPublished: true,
    order: 2,
    link: "",
    image: ""
  },
  {
    type: "publication",
    title: "Student innovation projects showcase report",
    category: "Tenders",
    publishedAt: "2025-03-14T15:40:00.000Z",
    timeLabel: "3.40 PM",
    summary: "Innovation showcase report for current projects.",
    isPublished: true,
    order: 3,
    link: "",
    image: ""
  },
  {
    type: "publication",
    title: "Annual institutional publication overview 2024",
    category: "Journal",
    publishedAt: "2025-03-09T15:40:00.000Z",
    timeLabel: "3.40 PM",
    summary: "Annual overview of institutional publications.",
    isPublished: true,
    order: 4,
    link: "",
    image: ""
  }
];

function createHttpError(statusCode: number, message: string) {
  const error = new Error(message) as Error & { statusCode?: number };
  error.statusCode = statusCode;
  return error;
}

function formatContentItem(document: ContentItemDocument | null) {
  if (!document) {
    return null;
  }

  return {
    id: document._id.toString(),
    type: document.type,
    title: document.title,
    category: document.category,
    publishedAt: document.publishedAt.toISOString(),
    timeLabel: document.timeLabel,
    summary: document.summary,
    link: document.link,
    image: document.image,
    isPublished: document.isPublished,
    order: document.order,
    createdAt: document.createdAt?.toISOString() ?? "",
    updatedAt: document.updatedAt?.toISOString() ?? ""
  };
}

async function seedDefaultContentIfEmpty() {
  const existingCount = await ContentItemModel.estimatedDocumentCount();

  if (existingCount > 0) {
    return;
  }

  await ContentItemModel.insertMany(
    defaultContentItems.map((item) => ({
      ...item,
      publishedAt: new Date(item.publishedAt)
    }))
  );
}

export async function listContentItems(rawQuery: unknown) {
  await seedDefaultContentIfEmpty();

  const query = listQuerySchema.parse(rawQuery) as ContentListQuery;
  const filters: Record<string, unknown> = {
    type: query.type
  };

  if (query.category) {
    filters.category = query.category;
  }

  if (!query.includeUnpublished) {
    filters.isPublished = true;
  }

  const items = await ContentItemModel.find(filters).sort({ order: 1, publishedAt: -1, createdAt: -1 }).limit(query.limit);

  return items.map(formatContentItem);
}

export async function getContentItemById(id: string) {
  const item = await ContentItemModel.findById(id);

  if (!item) {
    throw createHttpError(404, "Content item not found.");
  }

  return formatContentItem(item);
}

export async function createContentItem(rawInput: unknown) {
  const input = contentItemInputSchema.parse(rawInput);

  const item = await ContentItemModel.create({
    ...input,
    publishedAt: new Date(input.publishedAt)
  });

  return formatContentItem(item);
}

export async function updateContentItem(id: string, rawInput: unknown) {
  const input = contentItemUpdateSchema.parse(rawInput) as ContentItemUpdate;

  const updatePayload = {
    ...input,
    ...(input.publishedAt ? { publishedAt: new Date(input.publishedAt) } : {})
  };

  const item = await ContentItemModel.findByIdAndUpdate(id, updatePayload, {
    new: true,
    runValidators: true
  });

  if (!item) {
    throw createHttpError(404, "Content item not found.");
  }

  return formatContentItem(item);
}

export async function deleteContentItem(id: string) {
  const item = await ContentItemModel.findByIdAndDelete(id);

  if (!item) {
    throw createHttpError(404, "Content item not found.");
  }

  return { id };
}

export async function getContentStats() {
  await seedDefaultContentIfEmpty();

  const [noticeCount, publicationCount, publishedCount, draftCount] = await Promise.all([
    ContentItemModel.countDocuments({ type: "notice" }),
    ContentItemModel.countDocuments({ type: "publication" }),
    ContentItemModel.countDocuments({ isPublished: true }),
    ContentItemModel.countDocuments({ isPublished: false })
  ]);

  return {
    notices: noticeCount,
    publications: publicationCount,
    published: publishedCount,
    drafts: draftCount
  };
}

export async function getContentCategories(type: ContentType) {
  await seedDefaultContentIfEmpty();

  const categories = await ContentItemModel.distinct("category", { type });
  return categories.sort((left, right) => left.localeCompare(right));
}
