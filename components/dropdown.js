class DropdownComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <!-- Dropdown -->
   <div class="nav-dropdown">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        NEWS
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#sports">Sport</a>
        <a class="dropdown-item" href="#business">Business</a>
        <a class="dropdown-item" href="#technology">Technology</a>
        <a class="dropdown-item" href="#politics">Politics</a>
      </div>
    </li>
   </div>  
        `;
    }
}
        
window.customElements.define('dropdown-component', DropdownComponent);
