import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';

function getStorage(): Storage {
    const encodedKey = process.env.GCP_SERVICE_ACCOUNT_B64;
    if (!encodedKey) {
        throw new Error('GCP_SERVICE_ACCOUNT_B64 environment variable is not set');
    }

    // Decode the base64-encoded service account JSON
    const credentials = JSON.parse(
        Buffer.from(encodedKey, 'base64').toString('utf-8')
    );

    return new Storage({
        projectId: credentials.project_id,
        credentials,
    });
}

export async function GET() {
    if (!process.env.GCP_SERVICE_ACCOUNT_B64) {
        console.error('Missing env var: GCP_SERVICE_ACCOUNT_B64');
        return new NextResponse(
            'Server misconfiguration: missing GCP_SERVICE_ACCOUNT_B64',
            { status: 500 }
        );
    }

    const bucketName = process.env.GCS_BUCKET_NAME;
    const fileName = 'Me.png';

    if (!bucketName) {
        console.error('Missing env var: GCS_BUCKET_NAME');
        return new NextResponse(
            'Server misconfiguration: missing GCS_BUCKET_NAME',
            { status: 500 }
        );
    }

    try {
        const storage = getStorage();
        console.log(`Fetching gs://${bucketName}/${fileName}`);

        const bucket = storage.bucket(bucketName);
        const file = bucket.file(fileName);

        const [exists] = await file.exists();
        if (!exists) {
            console.error(`File not found: gs://${bucketName}/${fileName}`);
            return new NextResponse('Profile image not found in bucket.', { status: 404 });
        }

        const [contents] = await file.download();

        return new NextResponse(new Uint8Array(contents), {
            status: 200,
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=3600',
            },
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('GCS error:', message);
        return new NextResponse(`Failed to load profile image: ${message}`, {
            status: 500,
        });
    }
}
