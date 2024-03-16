export const getStatus = (status) => {
  switch (status) {
    case "online":
      return "bg-green";
    case "busy":
      return "bg-red";
    case "away":
      return "bg-orange";
    case "offline":
      return "bg-regular-light";
    default:
      return "";
  }
};
