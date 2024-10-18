class headerComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="container" style="margin-top: 9%" >
  <div class="row">
    <div class="col-sm-8">
      <div class="w3-content w3-section" >
        <img class="mySlides1" src="https://images.unsplash.com/photo-1564979268369-42032c5ca998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500" style="width:100%">
        <img class="mySlides1" src="https://images.unsplash.com/photo-1576659531892-0f4991fca82b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501" style="width:100%">
        <img class="mySlides1" src="https://images.unsplash.com/photo-1484656551321-a1161420a2a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=306&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=506" style="width:100%">
      </div>
    </div>

    <div class="col-sm-4">
      <weather-component></weather-component>
      <div class="w3-content w3-section">
        <img class="mySlides2 w3-animate-top" src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=503" style="width:100%">
        <img class="mySlides2 w3-animate-bottom" src="https://images.unsplash.com/photo-1576659531892-0f4991fca82b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501" style="width:100%">
        <img class="mySlides2 w3-animate-top" src="https://images.unsplash.com/photo-1484656551321-a1161420a2a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=306&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=506" style="width:100%">
        <img class="mySlides2 w3-animate-bottom" src="https://images.unsplash.com/photo-1564979268369-42032c5ca998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500" style="width:100%">
      </div>
    </div>
  </div>
</div>
        `;

        // first slider "mySlides1"
        var myIndex1 = 0;
        carousel1();

        function carousel1() {
          var i;
          var x = document.getElementsByClassName("mySlides1");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex1++;
          if (myIndex1 > x.length) {myIndex1 = 1}    
          x[myIndex1-1].style.display = "block";  
          setTimeout(carousel1, 5000); // Change image every 5 seconds
        }

        // second slider "mySlides2"
        var myIndex2 = 0;
        carousel2();

        function carousel2() {
          var i;
          var x = document.getElementsByClassName("mySlides2");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex2++;
          if (myIndex2 > x.length) {myIndex2 = 1}    
          x[myIndex2-1].style.display = "block";  
          setTimeout(carousel2, 3500); // Change image every 3.5 seconds
        }
    }
}

window.customElements.define('header-component', headerComponent);
