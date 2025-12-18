export default function Loading() {
    return (
        <>
            <section className="px-6 py-28 bg-neutral-300 animate-pulse">
                <div className="h-12 w-3/4 mx-auto bg-neutral-400 mb-6" />
                <div className="h-5 w-1/3 mx-auto bg-neutral-400" />
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="border border-neutral-200 animate-pulse"
                        >
                            <div className="h-[260px] bg-neutral-300" />
                            <div className="p-8 space-y-4">
                                <div className="h-4 bg-neutral-300 w-3/4 mx-auto" />
                                <div className="h-3 bg-neutral-300 w-1/3 mx-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
