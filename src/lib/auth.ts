// Authentication and Session Utility for "For Shuttu, With Love"
// Pure Web API implementation (crypto.subtle, btoa, atob) for full compatibility with Edge Middleware and Node.js.

const COOKIE_NAME = "shuttu_session";
const DEFAULT_SECRET = "for-shuttu-with-love-secret-key-super-safe-2025";
const DEFAULT_PASSWORD = "shuttu";

function getSecretKey(): string {
  return process.env.SESSION_SECRET || DEFAULT_SECRET;
}

export function getExpectedPassword(): string {
  return process.env.SITE_PASSWORD || DEFAULT_PASSWORD;
}

// Base64URL encode string
function toBase64Url(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Base64URL decode string
function fromBase64Url(base64Url: string): string {
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

// Convert ArrayBuffer to hex string
function bufferToHex(buffer: ArrayBuffer): string {
  const byteArray = new Uint8Array(buffer);
  return Array.from(byteArray)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Create HMAC-SHA256 signature
async function createHmac(keyStr: string, message: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(keyStr);
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(message));
  return bufferToHex(signature);
}

export interface SessionData {
  user: string;
  issuedAt: number;
  expiresAt: number;
}

// Generate signed session token
export async function createSessionToken(user = "shuttu"): Promise<string> {
  const now = Date.now();
  const expiresAt = now + 30 * 24 * 60 * 60 * 1000; // 30 days
  const payload: SessionData = { user, issuedAt: now, expiresAt };
  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const signature = await createHmac(getSecretKey(), encodedPayload);
  return `${encodedPayload}.${signature}`;
}

// Verify session token
export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token || typeof token !== "string") return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [encodedPayload, signature] = parts;
  try {
    const expectedSignature = await createHmac(getSecretKey(), encodedPayload);
    if (signature !== expectedSignature) {
      return false;
    }

    const jsonStr = fromBase64Url(encodedPayload);
    const payload = JSON.parse(jsonStr) as SessionData;
    if (!payload.expiresAt || payload.expiresAt < Date.now()) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export const AUTH_COOKIE_NAME = COOKIE_NAME;
