/**
 * @param {*[]} permutationOptions
 * @param {number} permutationLength
 * @return {*[]}
 */
 export default function permutateWithRepetitions(
  permutationOptions,
  permutationLength = permutationOptions.length,
) {
  if (permutationLength === 1) {
    return permutationOptions.map((permutationOption) => [permutationOption]);
  }
