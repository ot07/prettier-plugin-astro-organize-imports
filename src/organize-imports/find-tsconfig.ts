import { findConfigFile, sys } from 'typescript'
import { memoize } from './memoize'

/**
 * Find the path of the project's tsconfig from a path to a file in the project.
 */
export const findTsconfig = memoize((path: string) =>
  findConfigFile(path, sys.fileExists),
)
