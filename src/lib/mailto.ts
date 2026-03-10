export function buildMailtoLink({
  to = "",
  subject,
  body,
}: {
  to?: string;
  subject: string;
  body: string;
}) {
  const searchParams = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${to}?${searchParams.toString()}`;
}
