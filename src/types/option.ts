export type Option<T = string, K = string> = Record<'value', T> &
  Record<'label', K>
