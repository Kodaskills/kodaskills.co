export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}
