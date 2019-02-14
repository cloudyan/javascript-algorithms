
/**
 * 迭代方式来实现斐波那契数列
 *
 * @param {number} n
 * @returns {number}
 */
function iter(n: number): number {
  let current = 0;
  let next = 1;
  /* eslint no-plusplus: 0 */
  for (let i = 0; i < n; i++) {
    const swap = current;
    current = next;
    next = swap + next;
  }
  return current;
}

// test
console.log(iter(5))
console.log(iter(15))

export default iter;
