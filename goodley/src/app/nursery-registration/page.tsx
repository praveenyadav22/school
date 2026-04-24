import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
export const metadata: Metadata = { title: "Nursery Registration 2026-27" };
export default function NurseryRegistration() {
  return (
    <InnerPage title="Nursery Registration 2026-27">
      <p>Goodley Public School is pleased to announce that <strong>Nursery Registration for Session 2026-27</strong> is now open. Our newly Renovated Nursery Building is ready to welcome Little Learners with a <strong>Fully Air Conditioned</strong> environment.</p>
      <h3>Registration Details</h3>
      <p>Registrations are accepted as per the DoE guidelines. Please visit the school office for the application form and further details.</p>
      <h3>Important Dates</h3>
      <ul>
        <li>Registration Start Date: December 2025</li>
        <li>Last Date for Registration: As per DoE circular</li>
        <li>Draw of Lots: As announced by DoE</li>
      </ul>
      <h3>Contact</h3>
      <p>For more information, please contact us at: <strong>(+91)-11 - 47034641, 47034640, 42240226</strong></p>
      <p>Email: <a href="mailto:info@goodleypublicschool.in">info@goodleypublicschool.in</a></p>
    </InnerPage>
  );
}
