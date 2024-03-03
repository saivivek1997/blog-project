export function getFormattedDate(dateString) {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const formattedDateTime = `${formattedDate} at ${formattedTime}`;

  return formattedDateTime;
}
