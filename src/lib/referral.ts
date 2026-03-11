/**
 * Referral tracking utilities for the partner program.
 */

/**
 * Generate a referral slug from a partner's name
 * e.g., "Sarah Chen" → "sarah-chen"
 */
export function generateReferralSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Build the full referral URL
 */
export function buildReferralUrl(slug: string): string {
  return `https://tweakandbuild.com?ref=${slug}`;
}

/**
 * Read referral code from cookie
 */
export function getReferralFromCookie(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(/tb_ref=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

/**
 * Set referral cookie (90 days)
 */
export function setReferralCookie(ref: string): void {
  const expires = new Date();
  expires.setDate(expires.getDate() + 90);
  document.cookie = `tb_ref=${encodeURIComponent(ref)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}
