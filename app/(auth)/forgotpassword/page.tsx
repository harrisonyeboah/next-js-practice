import { Metadata } from "next"
import Link from 'next/link';
// If we import useState from React and useClient we can not use meta data
// We could have defulat meta data in the layouts while also having the template with that integrates the child component.

type Props = {
    params: Promise<{productId: string}>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { productId } = await params;

    return {
        title: `Product ${productId}`,
        description: `Details for product ${productId}`,
    };
}

export default function ForgotPassword() {
    // This is for dyanmic that could come through prop
    const registerDyamicPropExample = 'register';
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
            <p>Enter your email to reset your password</p>
            <Link href="/login"> This is the link for the login</Link>
            <Link href={`/${registerDyamicPropExample}`}> This is the link for the register</Link>

        </div>
    );
}