import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  icons = [
    { path: 'assets/icons/React.png', alt: 'React', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    // Agrega los demás iconos aquí con sus respectivas rutas, texto alternativo y clases de estilo
    { path: 'assets/icons/Angular.png', alt: 'Angular', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/NET core.png', alt: 'NET Core', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/chakra-ui.svg', alt: 'Chakra UI', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
  ];
}
