
export function instantiateMultiple<T>(classes: any[], deps?: any[]): T[] {
  return classes.map(cls => deps ? new cls(...deps) : new cls());
}
