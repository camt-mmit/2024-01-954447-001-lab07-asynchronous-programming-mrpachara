export interface Profile {
  readonly studentId: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly age: number;
  readonly autobiography: string;
  readonly friends: readonly string[];
}
