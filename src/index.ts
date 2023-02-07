export function weirdFunction(name: string, values?: string[]): string[] {
  if (!values?.length) {
    return [];
  }
  return [name]
}
