import Layout from '@/Layouts/Layout.jsx';

export default function TestPage() {
    return (
        <Layout>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Test Page</h1>
                    <p className="text-gray-600 mt-2">This is a test page to check the navbar visibility.</p>
                </div>
            </div>
        </Layout>
    );
}
