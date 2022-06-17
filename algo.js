/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
 export default function permutateWithoutRepetitions(permutationOptions) {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
