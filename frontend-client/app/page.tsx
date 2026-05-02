export const dynamic = "force-dynamic";

type Company = {
    id: number;
    name: string;
};

async function fetchCompanies(): Promise<Company[]> {
    const base = process.env.API_URL;
    if (!base) {
        throw new Error("Missing API_URL environment variable.");
    }

    const url = `${base.replace(/\/$/, "")}/api/companies`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    return res.json() as Promise<Company[]>;
}

export default async function Home() {
    let companies: Company[] = [];
    let error: string | null = null;

    try {
        companies = await fetchCompanies();
    } catch (e) {
        error = e instanceof Error ? e.message : "Unknown error";
    }

    return (
        <main className="mx-auto flex min-h-full max-w-lg flex-col gap-6 px-6 py-16">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Companies - base url: {process.env.API_URL} - feature/1
            </h1>
            {error ? (
                <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
                    {error}
                </p>
            ) : (
                <ul className="list-inside list-disc space-y-2 text-zinc-800 dark:text-zinc-200">
                    {companies.map((c) => (
                        <li key={c.id}>{c.name}</li>
                    ))}
                </ul>
            )}
        </main>
    );
}
