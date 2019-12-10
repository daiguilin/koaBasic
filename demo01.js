function getSomething() {
  return "something";
}
async function testAsync() {
  return "hello async";
}

async function test() {
  // await必须在async函数内使用
  const v1 = await getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}
const result = testAsync();
test();
// console.log(result);
