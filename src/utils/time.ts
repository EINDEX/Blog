// retune time format YYYY-mm-DD when locale is cn
// retune time format May Day, yyyy when locale is en
export function timeFormat(time: Date, locale: string): string {
  if (locale === "cn") {
    return time.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } else {
    return time.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
