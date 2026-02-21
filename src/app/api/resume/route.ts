import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';

const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID,
    credentials: {
        client_email: process.env.GCP_CLIENT_EMAIL,
        private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
});

export async function GET() {
    try {
        const bucketName = process.env.GCS_BUCKET_NAME!;
        const fileName = process.env.GCS_RESUME_FILENAME!;

        const bucket = storage.bucket(bucketName);
        const file = bucket.file(fileName);

        // Check the file exists
        const [exists] = await file.exists();
        if (!exists) {
            return new NextResponse('Resume not found in bucket.', { status: 404 });
        }

        // Download the file contents into a buffer
        const [contents] = await file.download();

        return new NextResponse(new Uint8Array(contents), {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'inline; filename="Feras_Resume.pdf"',
                // No-cache so the latest version is always served
                'Cache-Control': 'no-store',
            },
        });
    } catch (error) {
        console.error('Error fetching resume from GCS:', error);
        return new NextResponse('Failed to load resume.', { status: 500 });
    }
}
