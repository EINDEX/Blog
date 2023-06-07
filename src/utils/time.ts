// retune time format YYYY-mm-DD when locale is cn
// retune time format May Day, yyyy when locale is en

const formatTable = {
  zh: { year: "numeric", month: "2-digit", day: "2-digit" },
  en: { year: "numeric", month: "short", day: "numeric" },
  "zh-no-day": { year: "numeric", month: "2-digit" },
  "en-no-day": { year: "numeric", month: "short" },
};

const localeToTime = {
  zh: "zh-CN",
  en: "en-US",
};

export function timeFormat(
  time: Date,
  locale: string,
  withDay: boolean = true
): string {
  if (withDay === false) {
    return time.toLocaleDateString(
      localeToTime[locale],
      formatTable[`${locale}-no-day`]
    );
  } else {
    return time.toLocaleDateString(
      localeToTime[locale],
      formatTable[`${locale}`]
    );
  }
}
