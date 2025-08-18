import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <h1>My App</h1>
      </div>
      <div class="navbar-menu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Services</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #007bff;
      color: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .navbar-brand h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .navbar-menu {
      display: flex;
    }
    
    .navbar-nav {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }
    
    .nav-item {
      margin: 0;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
      padding: 0.5rem 0;
    }
    
    .nav-link:hover {
      color: #cce7ff;
    }
    
    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        padding: 1rem;
      }
      
      .navbar-nav {
        gap: 1rem;
        margin-top: 1rem;
      }
    }
  `]
})
export class NavbarComponent {
}