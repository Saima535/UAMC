export type ContentType = "notice" | "publication";

export type ContentItem = {
  id: string;
  type: ContentType;
  title: string;
  category: string;
  publishedAt: string;
  timeLabel: string;
  summary: string;
  link: string;
  image: string;
  isPublished: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ContentItemPayload = {
  type: ContentType;
  title: string;
  category: string;
  publishedAt: string;
  timeLabel: string;
  summary: string;
  link: string;
  image: string;
  isPublished: boolean;
  order: number;
};

type FetchContentItemsOptions = {
  type: ContentType;
  limit?: number;
  category?: string;
  includeUnpublished?: boolean;
  allowFallback?: boolean;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api/v1";

export const noticeCategoryOptions = ["General Notice", "Admission Notice", "Reports", "Job Circular"];
export const publicationCategoryOptions = ["Journal", "Tenders"];

export const fallbackNotices: ContentItem[] = [
  {
    id: "fallback-notice-1",
    type: "notice",
    title: "Application for Admission 2025 is now open",
    category: "General Notice",
    publishedAt: "2025-03-12T15:00:00.000Z",
    timeLabel: "3:00 PM",
    summary: "Admission applications are now open for eligible candidates.",
    link: "",
    image: "",
    isPublished: true,
    order: 1
  },
  {
    id: "fallback-notice-2",
    type: "notice",
    title: "Schedule for Semester Final Examination released",
    category: "Reports",
    publishedAt: "2025-03-10T09:30:00.000Z",
    timeLabel: "9:30 AM",
    summary: "Students can review the updated semester final examination schedule.",
    link: "",
    image: "",
    isPublished: true,
    order: 2
  },
  {
    id: "fallback-notice-3",
    type: "notice",
    title: "International Medical Education Seminar registration",
    category: "Admission Notice",
    publishedAt: "2025-03-08T11:15:00.000Z",
    timeLabel: "11:15 AM",
    summary: "Registration is now available for the upcoming seminar.",
    link: "",
    image: "",
    isPublished: true,
    order: 3
  },
  {
    id: "fallback-notice-4",
    type: "notice",
    title: "Faculty Development Program for academic staff",
    category: "General Notice",
    publishedAt: "2025-03-05T13:00:00.000Z",
    timeLabel: "1:00 PM",
    summary: "A new faculty development program has been announced for academic staff.",
    link: "",
    image: "",
    isPublished: true,
    order: 4
  },
  {
    id: "fallback-notice-5",
    type: "notice",
    title: "Public health awareness drive on campus this month",
    category: "Job Circular",
    publishedAt: "2025-03-03T10:00:00.000Z",
    timeLabel: "10:00 AM",
    summary: "Campus-wide awareness activities will take place throughout the month.",
    link: "",
    image: "",
    isPublished: true,
    order: 5
  }
];

export const fallbackPublications: ContentItem[] = [
  {
    id: "fallback-publication-1",
    type: "publication",
    title: "Journal of UAMC Medicine, Volume 06, Issue 02",
    category: "Journal",
    publishedAt: "2025-03-25T15:40:00.000Z",
    timeLabel: "3.40 PM",
    summary: "Latest issue of the institutional journal.",
    link: "",
    image: "",
    isPublished: true,
    order: 1
  },
  {
    id: "fallback-publication-2",
    type: "publication",
    title: "Research bulletin on clinical education practices",
    category: "Journal",
    publishedAt: "2025-03-18T15:40:00.000Z",
    timeLabel: "3.40 PM",
    summary: "Clinical education research bulletin.",
    link: "",
    image: "",
    isPublished: true,
    order: 2
  },
  {
    id: "fallback-publication-3",
    type: "publication",
    title: "Student innovation projects showcase report",
    category: "Tenders",
    publishedAt: "2025-03-14T15:40:00.000Z",
    timeLabel: "3.40 PM",
    summary: "Innovation showcase report for current projects.",
    link: "",
    image: "",
    isPublished: true,
    order: 3
  },
  {
    id: "fallback-publication-4",
    type: "publication",
    title: "Annual institutional publication overview 2024",
    category: "Journal",
    publishedAt: "2025-03-09T15:40:00.000Z",
    timeLabel: "3.40 PM",
    summary: "Annual overview of institutional publications.",
    link: "",
    image: "",
    isPublished: true,
    order: 4
  }
];

function getFallbackItems(type: ContentType) {
  return type === "notice" ? fallbackNotices : fallbackPublications;
}

async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {})
    },
    cache: "no-store"
  });

  const payload = (await response.json()) as {
    success: boolean;
    message?: string;
    data: T;
  };

  if (!response.ok || !payload.success) {
    throw new Error(payload.message || "Request failed.");
  }

  return payload.data;
}

export async function fetchContentItems(options: FetchContentItemsOptions) {
  const { type, limit = 20, category, includeUnpublished = false, allowFallback = true } = options;
  const searchParams = new URLSearchParams({
    type,
    limit: String(limit)
  });

  if (category) {
    searchParams.set("category", category);
  }

  if (includeUnpublished) {
    searchParams.set("includeUnpublished", "true");
  }

  try {
    return await apiRequest<ContentItem[]>(`/content-items?${searchParams.toString()}`);
  } catch (error) {
    if (!allowFallback) {
      throw error;
    }

    return getFallbackItems(type)
      .filter((item) => (!category ? true : item.category === category))
      .slice(0, limit);
  }
}

export async function fetchContentStats(allowFallback = true) {
  try {
    return await apiRequest<{
      notices: number;
      publications: number;
      published: number;
      drafts: number;
    }>("/content-items/stats");
  } catch (error) {
    if (!allowFallback) {
      throw error;
    }

    return {
      notices: fallbackNotices.length,
      publications: fallbackPublications.length,
      published: fallbackNotices.length + fallbackPublications.length,
      drafts: 0
    };
  }
}

export async function createContentItem(payload: ContentItemPayload) {
  return apiRequest<ContentItem>("/content-items", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function updateContentItem(id: string, payload: Partial<ContentItemPayload>) {
  return apiRequest<ContentItem>(`/content-items/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload)
  });
}

export async function deleteContentItem(id: string) {
  return apiRequest<{ id: string }>(`/content-items/${id}`, {
    method: "DELETE"
  });
}

export function formatDayMonth(dateString: string) {
  const date = new Date(dateString);

  return {
    day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)
  };
}

export function formatLongDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(dateString));
}

