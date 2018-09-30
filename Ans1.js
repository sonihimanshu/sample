
const OPENING_ITEMS = ['[', '{', '('];

const hasBalancedParenthesis = (input) => {
  if (!input) {
    throw new Error('input cannot be empty');
  }

  let result;
  const stack = [];
  const charArray = input.split('');
  for (let i = 0; i < charArray.length; i++) {
    const element = charArray[i];
    if (stack.length === 0) {
      if (OPENING_ITEMS.includes(element)) {
        stack.push(element);
      } else {
        result = false;
        break;
      }
    } else {
      if (OPENING_ITEMS.includes(element)) {
        stack.push(element);
      } else {
        const lastItemInStack = stack[stack.length - 1];
        if ((lastItemInStack === '[' && element === ']') || (lastItemInStack === '{' && element === '}') || (lastItemInStack === '(' && element === ')')) {
          stack.pop();
        } else {
          result = false;
          break;
        }
      }
    }

    const isLastElement = i === (charArray.length - 1);
    if (stack.length === 0 && isLastElement) {
      result = true;
      break;
    } else if (isLastElement) {
      result = false;
      break;
    }
  };

  return result;
};

const RESULT_SEPARATOR = '||';

console.log(`'[{()}{' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('[{()}{')}`);
console.log(`'][{()}]' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('][{()}]')}`);
console.log(`'[{()}]' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('[{()}]')}`);
console.log(`'[{(})]' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('[{(})]')}`);
console.log(`'[{()}' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('[{()}')}`);
console.log(`'()[]{}' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('()[]{}')}`);
console.log(`'([{}])' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('([{}])')}`);
console.log(`'([]{})' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('([]{})')}`);
console.log(`'([)]' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('([)]')}`);
console.log(`'([]' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('([]')}`);
console.log(`'[])' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('[])')}`);
console.log(`'([})' ${RESULT_SEPARATOR} ${hasBalancedParenthesis('([})')}`);

process.openStdin().addListener('data', () => { });