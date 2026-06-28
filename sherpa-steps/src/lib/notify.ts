import { contacts, labels } from "@wix/crm";
import { auth } from "@wix/essentials";

export interface LeadInput {
  name: string;
  email: string;
  phone?: string;
  targetTrek: string;
}

/**
 * Create a Wix CRM contact for an enrollment so the lead lands in the dashboard
 * Contacts list and can drive a "new lead" notification automation. Labels the
 * contact "Enrollment Lead" + "Trek: <trek>" for filtering. Best-effort and
 * non-fatal — a failure here never blocks the enrollment write.
 */
export async function createLeadContact(
  input: LeadInput,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  try {
    const parts = input.name.trim().split(/\s+/);
    const first = parts[0] || input.name;
    const last = parts.slice(1).join(" ");

    const createContact = auth.elevate(contacts.createContact);
    const res: any = await createContact(
      {
        name: { first, ...(last ? { last } : {}) },
        emails: { items: [{ tag: "MAIN", email: input.email }] },
        ...(input.phone ? { phones: { items: [{ tag: "MAIN", phone: input.phone }] } } : {}),
      },
      { allowDuplicates: true },
    );
    const contactId: string | undefined = res?.contact?._id ?? res?._id;

    // Best-effort tagging — groups leads and gives an automation something to trigger on.
    try {
      if (contactId) {
        const findOrCreate = auth.elevate(labels.findOrCreateLabel);
        const lead: any = await findOrCreate("Enrollment Lead");
        const trek: any = await findOrCreate(`Trek: ${input.targetTrek}`);
        const keys = [lead?.label?.key, trek?.label?.key].filter(Boolean) as string[];
        if (keys.length) {
          const labelContact = auth.elevate(contacts.labelContact);
          await labelContact(contactId, keys);
        }
      }
    } catch (labelErr) {
      console.error("[notify] labeling failed (non-fatal):", labelErr);
    }

    return { ok: true, id: contactId };
  } catch (err) {
    console.error("[notify] createLeadContact failed:", err);
    return { ok: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}
