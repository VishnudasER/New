import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, createSessionToken, getExpectedPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { success: false, message: "Please enter the secret password." },
        { status: 400 }
      );
    }

    const expected = getExpectedPassword();

    // Constant-length comparison or direct match
    if (password.trim() !== expected.trim()) {
      return NextResponse.json(
        { success: false, message: "Oops, that password is not quite right. Try again, sweetheart!" },
        { status: 401 }
      );
    }

    const token = await createSessionToken("shuttu");

    const response = NextResponse.json({
      success: true,
      message: "Welcome to your little world, Shuttu! 💖",
    });

    // Set secure HTTP-only cookie
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred during sign-in." },
      { status: 500 }
    );
  }
}

