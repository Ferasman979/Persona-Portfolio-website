import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';

function getPrivateKey(): string {
    const key = process.env.GCP_PRIVATE_KEY ?? '';
    // Vercel stores env vars as literals — replace escaped newlines with real ones
    return key.replace(/\\n/g, '\n');
}

function getStorage(): Storage {
    return new Storage({
        projectId: process.env.GCP_PROJECT_ID,
        credentials: {
            client_email: process.env.GCP_CLIENT_EMAIL,
            private_key: getPrivateKey(),
        },
    });
}

export async function GET() {
    // Validate required env vars are present
    const requiredVars = [
        'GCP_PROJECT_ID',
        'GCP_CLIENT_EMAIL',
        'GCP_PRIVATE_KEY',
        'GCS_BUCKET_NAME',
        'GCS_RESUME_FILENAME',
    ];
    const missing = requiredVars.filter((v) => !process.env[v]);
    if (missing.length > 0) {
        console.error('Missing environment variables:', missing.join(', '));
        return new NextResponse(
            `Server misconfiguration: missing env vars: ${missing.join(', ')}`,
            { status: 500 }
        );
    }

    try {
        const storage = getStorage();
        const bucketName = process.env.GCS_BUCKET_NAME!;
        const fileName = process.env.GCS_RESUME_FILENAME!;

        console.log(`Fetching gs://${bucketName}/${fileName}`);

        const bucket = storage.bucket(bucketName);
        const file = bucket.file(fileName);

        const [exists] = await file.exists();
        if (!exists) {
            console.error(`File not found: gs://${bucketName}/${fileName}`);
            return new NextResponse('Resume not found in bucket.', { status: 404 });
        }

        const [contents] = await file.download();

        return new NextResponse(new Uint8Array(contents), {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'inline; filename="Feras_Alawadi_Resume.pdf"',
                'Cache-Control': 'no-store',
            },
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('GCS error:', message);
        return new NextResponse(`Failed to load resume: ${message}`, {
            status: 500,
        });
    }
}
