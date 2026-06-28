import type { APIRoute } from "astro";
import { createEnrollment } from "../../lib/cms";
import { createLeadContact } from "../../lib/notify";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request body" }, 400);
  }

  const { name, email, targetTrek, departureDate, currentFitnessLevel } = body ?? {};
  if (!name || !email || !targetTrek || !departureDate || !currentFitnessLevel) {
    return json({ ok: false, error: "Please fill in all required fields." }, 400);
  }

  const result = await createEnrollment({
    name: String(name),
    email: String(email),
    phone: body.phone ? String(body.phone) : undefined,
    targetTrek: String(targetTrek),
    departureDate: String(departureDate),
    currentFitnessLevel: String(currentFitnessLevel),
    trainingNote: body.trainingNote ? String(body.trainingNote) : undefined,
  });

  // Notify: mirror the lead into Wix CRM Contacts (non-blocking — never fails the enrollment).
  if (result.ok) {
    const lead = await createLeadContact({
      name: String(name),
      email: String(email),
      phone: body.phone ? String(body.phone) : undefined,
      targetTrek: String(targetTrek),
    });
    if (!lead.ok) console.error("[enroll] lead contact not created:", lead.error);
  }

  return json(result, result.ok ? 200 : 500);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
