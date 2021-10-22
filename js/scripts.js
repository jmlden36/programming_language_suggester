function add(val1, val2, val3, val4, val5) {
  const total = val1 + val2 + val3 + val4 + val5;
  return total;
}

function showLanguage(total) {
  if (total < 10) {
    $("div.output").append("<h3>You might like C#!</h3>");
    $("div.output").append("<img class='img' alt='C# logo' src='img/clogo.jpeg'>");
    $("div.output").append("<p>C# information here.</p>");
  } else if ( total >= 10 && total < 50) {
    $("div.output").append("<h3>You might like Python!<h3>");
    $("div.output").append("<img class='img' alt='Python logo' src='img/python.jpeg'>");
    $("div.output").append("<p>Python info here.</p>");
  } else if (total >=50 && total <150) {
    $("div.output").append("<h3>You might like JavaScript!</h3>");
    $("div.output").append("<img class='img' src='img/java.jpeg'>");
    $("div.output").append("<p>JavaScript info here.</p>");
  } else {
    alert("You broke it!");
  }
  $("#button").hide
}


$(document).ready(function() {
  $("form#formOne").submit(function(event, event2) {
    event.preventDefault();
    $("button").click(function() {
      $("output").remove();
    });
    const question1 = parseInt($("input:radio[name=question1]:checked").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const question4 = parseInt($("input:radio[name=question4]:checked").val());
    const question5 = parseInt($("input:radio[name=question5]:checked").val());
    const totalValue = add(question1, question2, question3, question4, question5);
    showLanguage(totalValue);
  });
});