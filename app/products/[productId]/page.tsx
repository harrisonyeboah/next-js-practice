export default async function PostPage({ params }: { params: Promise<{ productId: string }> } ) {
  const resolvedParams = await params;
  return <h1>Product ID: {resolvedParams.productId}</h1>
}