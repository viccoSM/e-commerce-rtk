export function formatDate (value:string, formatting:any = { month: 'long', day: 'numeric', year: 'numeric' }) {
  if (!value) return value
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}