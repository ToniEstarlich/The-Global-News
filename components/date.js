class DateComponent extends HTMLElement {
    connectedCallback() {
      // Default date if none is provided
      const dateString = this.getAttribute('date') || new Date().toISOString();
      
      // Format the date
      const formattedDate = this.formatDate(dateString);
      
      // Render the date in the component
      this.innerHTML = `
        <div class="date">
          <p>${formattedDate}</p>
        </div>
      `;
    }
  
    // Function to format the date for UK locale (en-GB)
    formatDate(dateString) {
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', options);  // Use 'en-GB' for UK format
    }
  }
  
  // Define the custom element 'date-component'
  window.customElements.define('date-component', DateComponent);
  