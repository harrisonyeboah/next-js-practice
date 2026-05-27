export default async function ProductReview({ params }: { params: Promise<{ productId: string; reviewId: string }> } ) {
  const resolvedParams = await params;
  return (
    <div>
        <h1>Product ID: {resolvedParams.productId}</h1>
        <h1>Review ID: {resolvedParams.reviewId}</h1>
    </div>
)}