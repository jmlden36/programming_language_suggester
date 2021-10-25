function add(val1, val2, val3, val4, val5) {
  const total = val1 + val2 + val3 + val4 + val5;
  return total;
}

function showLanguage(value) {
  if (value < 10) {
    $("div.output").empty().append("<h3>You might like C#!</h3>");
    $("div.output").append("<img class='img' alt='C# logo' src='img/clogo.jpeg'>");
    $("div.output").append("<p>C# is an object-oriented, component-oriented programming language. C# provides language constructs to directly support these concepts, making C# a natural language in which to create and use software components. Since its origin, C# has added features to support new workloads and emerging software design practices. At its core, C# is an object-oriented language. You define types and their behavior.</p>");
  } else if ( value >= 10 && value < 50) {
    $("div.output").empty().append("<h3>You might like Python!<h3>");
    $("div.output").append("<img class='img' alt='Python logo' src='img/python.jpeg'>");
    $("div.output").append("<p>Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name 'Python' is a nod to the British comedy group Monty Python. Python has a reputation as a beginner-friendly language, replacing Java as the most widely used introductory language because it handles much of the complexity for the user, allowing beginners to focus on fully grasping programming concepts rather than minute details. Python is used for server-side web development, software development, mathematics, and system scripting, and is popular for Rapid Application Development and as a scripting or glue language to tie existing components because of its high-level, built-in data structures, dynamic typing, and dynamic binding. Program maintenance costs are reduced with Python due to the easily learned syntax and emphasis on readability. Additionally, Python's support of modules and packages facilitates modular programs and reuse of code. Python is an open source community language, so numerous independent programmers are continually building libraries and functionality for it.</p>");
  } else if (value >=50 && value <150) {
    $("div.output").empty().append("<h3>You might like JavaScript!</h3>");
    $("div.output").append("<img class='img' src='img/java.jpeg'>");
    $("div.output").append("<p>JavaScript is a lightweight, cross-platform, and interpreted scripting language. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements.</p>");
  } else {
    alert("You broke it!");
  }  
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();    
    const question1 = parseInt($("input:radio[name=question1]:checked").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const question4 = parseInt($("input:radio[name=question4]:checked").val());
    const question5 = parseInt($("input:radio[name=question5]:checked").val());
    const totalValue = add(question1, question2, question3, question4, question5);
    showLanguage(totalValue);
  });
});