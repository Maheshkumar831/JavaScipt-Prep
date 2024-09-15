<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript Regular Expression</h2>
    <p>
      Java Script validation for First Name. The first name should contain only
      alphabets and space.
    </p>
    <p id="demo"></p>

    <form id="f1" action="" method="post">
      FirstName:<input
        type="text"
        id="t1"
        size="30"
        maxlength="30"
        required
        onblur="checkUserName()"
      />

      <p id="p1"></p>
      <br />
      Password:<input
        type="password"
        id="t2"
        size="30"
        maxlength="30"
        required
        onblur="checkPassword()"
      />

      <p id="p2"></p>
      <br />

      Email:<input
        type="email"
        id="t3"
        size="30"
        maxlength="30"
        required
        onblur="checkEmail()"
      />

      <p id="p3"></p>
      <br />

      <input type="button" id="b1" value="signup" />
    </form>

    <script>
      function checkUserName() {
        var regexp = /^[a-zA-Z ]+$/;
        var str = document.getElementById("t1").value;
        if (regexp.test(str)) {
          document.getElementById("p1").innerHTML = "Valid name";
          document.getElementById("p1").style = "color:green";
        } else {
          document.getElementById("p1").innerHTML = "Invalid name";
          document.getElementById("p1").style = "color:red";
        }
      }

      function checkPassword() {
        var regexp = /^[a-zA-Z-0-9]+$/;
        var str = document.getElementById("t2").value;
        if (regexp.test(str)) {
          document.getElementById("p2").innerHTML = "Valid Password";
          document.getElementById("p2").style = "color:green";
        } else {
          document.getElementById("p2").innerHTML = "Invalid Password";
          document.getElementById("p2").style = "color:red";
        }
      }

      function checkEmail() {
        var regexp = /^[a-zA-Z-0-9-@.]+$/;
        var str = document.getElementById("t3").value;
        if (regexp.test(str)) {
          document.getElementById("p3").innerHTML = "Valid Email";
          document.getElementById("p3").style = "color:green";
        } else {
          document.getElementById("p3").innerHTML = "Invalid Email";
          document.getElementById("p3").style = "color:red";
        }
      }

      function confirmPassword() {
        var regexp = /^[a-zA-Z-0-9]+$/;
        var str = document.getElementById("t2").value;
        if (regexp.test(str)) {
          document.getElementById("p4").innerHTML = "Valid Password";
          document.getElementById("p4").style = "color:green";
        } else {
          document.getElementById("p4").innerHTML = "Invalid Password";
          document.getElementById("p4").style = "color:red";
        }
      }
    </script>
  </body>
</html>
