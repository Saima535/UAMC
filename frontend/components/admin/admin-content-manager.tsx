"use client";

import { useEffect, useState } from "react";
import { getStoredAdminToken } from "../../lib/admin-auth";
import {
  createContentItem,
  deleteContentItem,
  fetchContentItems,
  formatLongDate,
  type ContentItem,
  type ContentItemPayload,
  type ContentType,
  noticeCategoryOptions,
  publicationCategoryOptions,
  updateContentItem
} from "../../lib/content-api";

type AdminContentManagerProps = {
  type: ContentType;
  title: string;
  description: string;
};

type FormState = {
  title: string;
  category: string;
  publishedDate: string;
  timeLabel: string;
  summary: string;
  link: string;
  image: string;
  isPublished: boolean;
  order: number;
};

function getCategoryOptions(type: ContentType) {
  return type === "notice" ? noticeCategoryOptions : publicationCategoryOptions;
}

function getInitialFormState(type: ContentType): FormState {
  return {
    title: "",
    category: getCategoryOptions(type)[0],
    publishedDate: new Date().toISOString().slice(0, 10),
    timeLabel: "",
    summary: "",
    link: "",
    image: "",
    isPublished: true,
    order: 0
  };
}

export function AdminContentManager({ type, title, description }: AdminContentManagerProps) {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [formState, setFormState] = useState<FormState>(() => getInitialFormState(type));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const categoryOptions = getCategoryOptions(type);

  async function loadItems() {
    setLoading(true);
    setError("");

    try {
      const nextItems = await fetchContentItems({
        type,
        limit: 100,
        includeUnpublished: true,
        allowFallback: false,
        token: getStoredAdminToken()
      });
      setItems(nextItems);
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : `Unable to load ${title.toLowerCase()}.`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadItems();
  }, [type]);

  function resetForm() {
    setEditingId(null);
    setFormState(getInitialFormState(type));
  }

  function startEdit(item: ContentItem) {
    setEditingId(item.id);
    setSuccessMessage("");
    setFormState({
      title: item.title,
      category: item.category,
      publishedDate: item.publishedAt.slice(0, 10),
      timeLabel: item.timeLabel,
      summary: item.summary,
      link: item.link,
      image: item.image,
      isPublished: item.isPublished,
      order: item.order
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSuccessMessage("");

    const payload: ContentItemPayload = {
      type,
      title: formState.title.trim(),
      category: formState.category,
      publishedAt: `${formState.publishedDate}T12:00:00.000Z`,
      timeLabel: formState.timeLabel.trim(),
      summary: formState.summary.trim(),
      link: formState.link.trim(),
      image: formState.image.trim(),
      isPublished: formState.isPublished,
      order: Number(formState.order)
    };

    try {
      if (editingId) {
        await updateContentItem(editingId, payload, getStoredAdminToken());
        setSuccessMessage(`${title} item updated successfully.`);
      } else {
        await createContentItem(payload, getStoredAdminToken());
        setSuccessMessage(`${title} item created successfully.`);
      }

      resetForm();
      await loadItems();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : `Unable to save ${title.toLowerCase()} item.`);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm("Delete this item permanently?");

    if (!confirmed) {
      return;
    }

    setError("");
    setSuccessMessage("");

    try {
      await deleteContentItem(id, getStoredAdminToken());
      if (editingId === id) {
        resetForm();
      }
      setSuccessMessage(`${title} item deleted successfully.`);
      await loadItems();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : `Unable to delete ${title.toLowerCase()} item.`);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#17924e]">Content Manager</p>
        <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[#142118]">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5b675e]">{description}</p>
      </div>

      {error ? <div className="rounded-2xl border border-[#f2c1c1] bg-[#fff3f3] px-4 py-3 text-sm text-[#8b2e2e]">{error}</div> : null}
      {successMessage ? <div className="rounded-2xl border border-[#cfe9d5] bg-[#effaf1] px-4 py-3 text-sm text-[#19643b]">{successMessage}</div> : null}

      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-3xl border border-[#dbe7dd] bg-white p-6 shadow-[0_10px_28px_rgba(17,38,28,0.04)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-[#16231a]">{editingId ? "Edit Item" : "Create New Item"}</h3>
              <p className="mt-1 text-sm text-[#617066]">Add or update a {type} record.</p>
            </div>
            {editingId ? (
              <button type="button" onClick={resetForm} className="rounded-xl border border-[#d7e2d9] px-4 py-2 text-sm font-medium text-[#31513c]">
                Cancel Edit
              </button>
            ) : null}
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-medium text-[#26372d]">
              Title
              <input
                required
                value={formState.title}
                onChange={(event) => setFormState((current) => ({ ...current, title: event.target.value }))}
                className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#26372d]">
                Category
                <select
                  value={formState.category}
                  onChange={(event) => setFormState((current) => ({ ...current, category: event.target.value }))}
                  className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
                >
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-[#26372d]">
                Display Time
                <input
                  value={formState.timeLabel}
                  onChange={(event) => setFormState((current) => ({ ...current, timeLabel: event.target.value }))}
                  className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
                  placeholder="3:40 PM"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#26372d]">
                Published Date
                <input
                  type="date"
                  required
                  value={formState.publishedDate}
                  onChange={(event) => setFormState((current) => ({ ...current, publishedDate: event.target.value }))}
                  className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-[#26372d]">
                Sort Order
                <input
                  type="number"
                  min={0}
                  value={formState.order}
                  onChange={(event) => setFormState((current) => ({ ...current, order: Number(event.target.value) }))}
                  className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-[#26372d]">
              Summary
              <textarea
                rows={4}
                value={formState.summary}
                onChange={(event) => setFormState((current) => ({ ...current, summary: event.target.value }))}
                className="rounded-xl border border-[#d9e4db] px-4 py-3 outline-none focus:border-[#17924e]"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#26372d]">
                Link
                <input
                  value={formState.link}
                  onChange={(event) => setFormState((current) => ({ ...current, link: event.target.value }))}
                  className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-[#26372d]">
                Image
                <input
                  value={formState.image}
                  onChange={(event) => setFormState((current) => ({ ...current, image: event.target.value }))}
                  className="h-12 rounded-xl border border-[#d9e4db] px-4 outline-none focus:border-[#17924e]"
                  placeholder="/images/example.jpg"
                />
              </label>
            </div>

            <label className="flex items-center gap-3 rounded-xl bg-[#f6faf7] px-4 py-3 text-sm font-medium text-[#31513c]">
              <input
                type="checkbox"
                checked={formState.isPublished}
                onChange={(event) => setFormState((current) => ({ ...current, isPublished: event.target.checked }))}
                className="h-4 w-4"
              />
              Published on public pages
            </label>

            <button
              type="submit"
              disabled={saving}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-[#17924e] px-6 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {saving ? "Saving..." : editingId ? "Update Item" : "Create Item"}
            </button>
          </form>
        </section>

        <section className="rounded-3xl border border-[#dbe7dd] bg-white p-6 shadow-[0_10px_28px_rgba(17,38,28,0.04)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-[#16231a]">Existing Items</h3>
              <p className="mt-1 text-sm text-[#617066]">Review, edit, or delete saved records.</p>
            </div>
            <button type="button" onClick={() => void loadItems()} className="rounded-xl border border-[#d7e2d9] px-4 py-2 text-sm font-medium text-[#31513c]">
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="rounded-2xl bg-[#f7faf8] px-4 py-6 text-sm text-[#617066]">Loading items...</div>
          ) : items.length === 0 ? (
            <div className="rounded-2xl bg-[#f7faf8] px-4 py-6 text-sm text-[#617066]">No items found yet.</div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article key={item.id} className="rounded-2xl border border-[#e1ebe3] bg-[#f9fbf9] px-4 py-4">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#e8f3ea] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#17924e]">
                          {item.category}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.isPublished ? "bg-[#eefaf1] text-[#19643b]" : "bg-[#f5f2e8] text-[#8a6621]"}`}>
                          {item.isPublished ? "Published" : "Draft"}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold leading-7 text-[#18241c]">{item.title}</h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#617066]">
                        <span>{formatLongDate(item.publishedAt)}</span>
                        <span>{item.timeLabel || "No time label"}</span>
                        <span>Order {item.order}</span>
                      </div>
                      {item.summary ? <p className="max-w-2xl text-sm leading-7 text-[#526055]">{item.summary}</p> : null}
                    </div>

                    <div className="flex gap-3">
                      <button type="button" onClick={() => startEdit(item)} className="rounded-xl bg-[#17924e] px-4 py-2 text-sm font-semibold text-white">
                        Edit
                      </button>
                      <button type="button" onClick={() => void handleDelete(item.id)} className="rounded-xl border border-[#e0c0c0] px-4 py-2 text-sm font-semibold text-[#8b2e2e]">
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
