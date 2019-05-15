export default function start(syscall, _helpers) {
  function deliver(facetID, method, body, slots) {
    syscall.log(JSON.stringify({ facetID, method, body, slots }));
  }
  return { deliver };
}
