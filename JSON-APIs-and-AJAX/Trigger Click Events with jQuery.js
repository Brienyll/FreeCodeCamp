/*
In this section, we'll learn how to get data from APIs. APIs - or Application Programming Interfaces - are tools that computers use to

communicate with one another.

We'll also learn how to update HTML with the data we get from these APIs using a technology called Ajax.

First, let's review what the $(document).ready() function does. This function runs such that all of the code inside of it executes only 

once our page has finished loading.
*/
<script>
  $(document).ready(function() {
    // Only change code below this line.
    $("#getMessage").on("click", function(){

});
    // Only change code above this line.
  });
</script>


<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
