import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button 
      [type]="type()" 
      [disabled]="disabled()"
      [class]="buttonClass()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      background-color: #fff;
      color: #333;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.2s ease;
    }
    
    button:hover:not(:disabled) {
      background-color: #f5f5f5;
      border-color: #999;
    }
    
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .primary {
      background-color: #007bff;
      border-color: #007bff;
      color: white;
    }
    
    .primary:hover:not(:disabled) {
      background-color: #0056b3;
      border-color: #0056b3;
    }
    
    .secondary {
      background-color: #6c757d;
      border-color: #6c757d;
      color: white;
    }
    
    .secondary:hover:not(:disabled) {
      background-color: #545b62;
      border-color: #545b62;
    }
    
    .danger {
      background-color: #dc3545;
      border-color: #dc3545;
      color: white;
    }
    
    .danger:hover:not(:disabled) {
      background-color: #c82333;
      border-color: #c82333;
    }
  `]
})
export class ButtonComponent {
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  variant = input<'primary' | 'secondary' | 'danger' | 'default'>('default');
  
  buttonClass = input.computed(() => {
    const variant = this.variant();
    return variant !== 'default' ? variant : '';
  });
}