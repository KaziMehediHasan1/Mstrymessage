import { IApiResponse } from "@/types/ApiResponse";

export const sendVerificationEmail = (
  email: string,
  username: string,
  verifyCode: string
): Promise<IApiResponse> => {
  try {
    return { success: false, message: "Failed to send verification email",  };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
  }
};
