export default function PostPage({ params }) {
    const { slug } = params
    // For now render a static placeholder. Replace with MDX/md parsing.
    return (
        <div className="container mx-auto px-6 py-12">
            <article className="max-w-3xl">
                <h1 className="text-4xl font-heading">Post: {slug}</h1>
                <p className="mt-6">This is a placeholder post. Swap in markdown parsing or CMS to load real content.</p>
            </article>
        </div>
    )
}