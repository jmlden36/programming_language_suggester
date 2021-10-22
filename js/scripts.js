function add(val1, val2, val3, val4, val5) {
  const total = val1 + val2 + val3 + val4 + val5;
  return total;
}

function showLanguage(total) {
  if (total < 10) {
    $("div.output").append("<h3>You might like C#</h3>");
    $("div.output").append("<img class='img' src='img/C#.jpeg'>");
    $("div.output").append("<p>C# information here.</p>");
  } else {
    alert("other value")
  }
}