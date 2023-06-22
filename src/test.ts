console.log("Hello World");
async (test: string) => {
  return "a test";
};
console.log("Let's add a squash merge modification");
async function apiCall(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
apiCall("https://api.github.com/users/octocat").then((data) => {
  console.log(data);
});
