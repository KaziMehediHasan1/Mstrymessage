import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface IVerificationEmailProps {
  username?: string;
  otp?: string;
}

export const VerificationEmail = ({
  username,
  otp,
}: IVerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to our platform!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Hey , welcome aboard! 🎉</Heading>
          <Text style={paragraph}>
            We are excited to have you join us. Get started by logging into your
            dashboard and exploring your new tools.
          </Text>
          {/* <Button href={loginUrl} style={button}>
            Go to Dashboard
          </Button> */}
          <Hr style={hr} />
          <Text style={footer}>
            If you didn’t sign up, please ignore this email or contact support.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// ===== Styles =====
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "32px",
  width: "100%",
  maxWidth: "520px",
  margin: "0 auto",
};

const heading = {
  fontSize: "24px",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: 1.5,
  marginBottom: "24px",
};

// const button = {
//   backgroundColor: "#0f172a",
//   color: "#ffffff",
//   padding: "12px 20px",
//   borderRadius: "6px",
//   textDecoration: "none",
//   fontSize: "16px",
// };

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 0",
};

const footer = {
  fontSize: "12px",
  color: "#6b7280",
  textAlign: "center" as const,
};
