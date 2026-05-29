import Link from 'next/link'


export default async function SpecificCategory({
  params,
}: {
  params: Promise<{ category: string, slug: String[]}>;
}) {
    const { category, slug } = await params;

    return (
        <div>
            <Link href={`/blog/${category}`}> Head back to {category} </Link>
            {slug.map((item, i) => (
                <li key={i + 1}> {item} </li>
                ))}

        </div>
    )

}