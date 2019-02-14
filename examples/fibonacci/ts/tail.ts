
/**
 * 尾递归优化
 *
 * @param {number} n
 * @param {number} current
 * @param {number} next
 * @returns {*}
 */
function fib(n: number, current: number, next: number): any {
  if (n === 0) return current;
  return fib(n - 1, next, current + next);
}

/**
 * 尾递归优化实现斐波那契数列
 *
 * @param {number} n
 * @returns
 */
function tail(n: number) {
  return fib(n, 0, 1);
}

export default tail;
