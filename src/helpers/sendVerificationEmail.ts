import { config } from "@/config";
import { IApiResponse } from "@/types/ApiResponse";
import { Resend } from "resend";
import { VerificationEmail } from "../../email/VerificationEmail";
const resend = new Resend(config.resend);
export const sendVerificationEmail = async (
  email: string,
  username: string,
  verifyCode: string
): Promise<IApiResponse> => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "mystry message verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "verification email send successfully" };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
    return { success: false, message: "Failedto send verification email" };
  }
};
