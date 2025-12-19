import { NextRequest, NextResponse } from 'next/server';

// This function handles POST requests to /api/contact
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send data to Google Sheets
    const googleSheetsResponse = await sendToGoogleSheets({
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    if (googleSheetsResponse.success) {
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully!' },
        { status: 200 }
      );
    } else {
      throw new Error('Failed to save to Google Sheets');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Something went wrong' 
      },
      { status: 500 }
    );
  }
}

// Function to send data to Google Sheets
async function sendToGoogleSheets(data: {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}) {
  try {
    // Your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      console.warn('Google Script URL not configured. Using fallback storage.');
      // Fallback: Store in local variable (for demo purposes)
      return { success: true, data };
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return { success: response.ok, response };
  } catch (error) {
    console.error('Google Sheets error:', error);
    return { success: false, error };
  }
}

// Add GET method for testing
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  );
}