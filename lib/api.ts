// Public (unauthenticated) backend API used by the landing page.
// Configured via NEXT_PUBLIC_API_URL in .env.development / .env.production (see .env.example).
// It is inlined into the static bundle at build time, so changing it requires a rebuild.
export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");

// "bride" = the advertiser is looking for a bride (a "Bride Wanted" advertisement).
export type ProposalType = "bride" | "groom";

export type Localized = { en: string; si: string };

export type PublicProposal = {
  ref: string;
  type: ProposalType;
  posted_by: string;
  age: number;
  height: string;
  location: string;
  religion: string;
  education: Localized | null;
  job: Localized | null;
};

export type ProposalFilters = {
  types: ProposalType[];
  districts: string[];
  countries: string[];
  religions: string[];
};

export type ProposalPage = {
  items: PublicProposal[];
  total: number;
  page: number;
  page_size: number;
};

export type ProposalQuery = {
  type?: ProposalType;
  location?: string;
  religion?: string;
  page?: number;
  page_size?: number;
};

async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL is not configured");
  const res = await fetch(`${API_URL}${path}`, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`GET ${path} failed with ${res.status}`);
  return res.json() as Promise<T>;
}

export function fetchProposalFilters(signal?: AbortSignal) {
  return getJson<ProposalFilters>("/api/v1/public/proposals/filters", signal);
}

export function fetchProposals(query: ProposalQuery, signal?: AbortSignal) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== "") params.set(key, String(value));
  }
  const qs = params.toString();
  return getJson<ProposalPage>(`/api/v1/public/proposals${qs ? `?${qs}` : ""}`, signal);
}
