export function getLastPartOfSlug(slug:string): string {
  const slugInSplit = slug.split('/')
  return slugInSplit[slugInSplit.length - 1]
}