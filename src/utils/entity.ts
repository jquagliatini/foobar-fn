export default function entity<T>(val: T): () => T {
  return () => val;
}
