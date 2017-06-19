function foo() {
  var bar;
  quux = "quux";

  function zip () {
    var quux = "quux-zip";
    bar = true;
  }

  return zip;
}