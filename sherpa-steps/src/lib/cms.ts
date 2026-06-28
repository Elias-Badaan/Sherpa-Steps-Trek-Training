import { items } from "@wix/data";
import { auth } from "@wix/essentials";

/** Wrap a read query, elevated for permission safety, never throwing at SSR. */
async function queryAll<T>(collectionId: string, sortField?: string): Promise<T[]> {
  try {
    const elevatedQuery = auth.elevate(items.query);
    let q = elevatedQuery(collectionId).limit(100);
    if (sortField) q = q.ascending(sortField);
    const { items: results } = await q.find();
    return results as unknown as T[];
  } catch (err) {
    console.error(`[cms:${collectionId}] query failed:`, err);
    return [];
  }
}

export interface SummitPhoto {
  _id: string;
  graduateName: string;
  trek: string;
  peakElevationMeters: number;
  graduationDate: string;
  photo?: string;
  caption: string;
  orderIndex?: number;
}

export interface Review {
  _id: string;
  name: string;
  quote: string;
  detail: string;
  orderIndex?: number;
}

export interface ProgramPhase {
  _id: string;
  phaseName: string;
  weeks: string;
  focus: string;
  sampleSession: string;
  price: string;
  orderIndex?: number;
}

export interface StoryBlock {
  _id: string;
  heading: string;
  body: string;
}

export const getSummitPhotos = () => queryAll<SummitPhoto>("SummitPhotos", "orderIndex");
export const getReviews = () => queryAll<Review>("Reviews", "orderIndex");
export const getProgramPhases = () => queryAll<ProgramPhase>("ProgramPhases", "orderIndex");
export const getStoryBlock = async (): Promise<StoryBlock | null> =>
  (await queryAll<StoryBlock>("StoryBlocks"))[0] ?? null;

export interface EnrollmentInput {
  name: string;
  email: string;
  phone?: string;
  targetTrek: string;
  departureDate: string;
  currentFitnessLevel: string;
  trainingNote?: string;
}

/** Insert an enrollment inquiry into the Enrollments collection. */
export async function createEnrollment(input: EnrollmentInput): Promise<{ ok: boolean; id?: string; error?: string }> {
  try {
    const elevatedInsert = auth.elevate(items.insert);
    const inserted = await elevatedInsert("Enrollments", {
      ...input,
      submittedAt: new Date().toISOString(),
    });
    return { ok: true, id: (inserted as any)?._id };
  } catch (err) {
    console.error("[cms:Enrollments] insert failed:", err);
    return { ok: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}
