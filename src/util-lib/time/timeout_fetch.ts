type ModifiedRequestInit = { timeout: number } & RequestInit;

async function fetchWithTimeout(resource: RequestInfo, options: ModifiedRequestInit | undefined) {
    const timeout = options?.timeout ?? 8000;

    // const {timeout = 8000 } = options ?? {};

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...options,
        signal: controller.signal,
    });
    clearTimeout(id);

    return response;
}

export { fetchWithTimeout };
