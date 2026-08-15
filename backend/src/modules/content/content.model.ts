import { type HydratedDocument, Schema, model } from "mongoose";

export const contentTypes = ["notice", "publication"] as const;

export type ContentItemRecord = {
  type: (typeof contentTypes)[number];
  title: string;
  category: string;
  publishedAt: Date;
  timeLabel: string;
  summary: string;
  link: string;
  image: string;
  isPublished: boolean;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ContentItemDocument = HydratedDocument<ContentItemRecord>;

const contentItemSchema = new Schema<ContentItemRecord>(
  {
    type: {
      type: String,
      enum: contentTypes,
      required: true,
      index: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    publishedAt: {
      type: Date,
      required: true,
      index: true
    },
    timeLabel: {
      type: String,
      trim: true,
      default: ""
    },
    summary: {
      type: String,
      trim: true,
      default: ""
    },
    link: {
      type: String,
      trim: true,
      default: ""
    },
    image: {
      type: String,
      trim: true,
      default: ""
    },
    isPublished: {
      type: Boolean,
      default: true,
      index: true
    },
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

contentItemSchema.index({ type: 1, category: 1, publishedAt: -1 });

export const ContentItemModel = model<ContentItemRecord>("ContentItem", contentItemSchema);
