export const adminTokenStorageKey = "uamc-admin-token";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api/v1";

export function getStoredAdminToken() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(adminTokenStorageKey) ?? "";
}

export function storeAdminToken(token: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(adminTokenStorageKey, token);
}

export function clearAdminToken() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(adminTokenStorageKey);
}

export async function loginAdmin(email: string, password: string) {
  const response = await fetch(`${apiBaseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const payload = (await response.json()) as {
    success: boolean;
    message?: string;
    data?: {
      token: string;
      admin: {
        email: string;
      };
    };
  };

  if (!response.ok || !payload.success || !payload.data) {
    throw new Error(payload.message || "Login failed.");
  }

  return payload.data;
}

export async function fetchAdminProfile(token: string) {
  const response = await fetch(`${apiBaseUrl}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store"
  });

  const payload = (await response.json()) as {
    success: boolean;
    message?: string;
    data?: {
      email: string;
    };
  };

  if (!response.ok || !payload.success || !payload.data) {
    throw new Error(payload.message || "Unable to validate admin session.");
  }

  return payload.data;
}
