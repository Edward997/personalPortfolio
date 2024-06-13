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
    { path: 'assets/icons/HTML5.png', alt: 'HTML', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/CSS3.png', alt: 'CSS', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/TypeScript.png', alt: 'TypeScript', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/JavaScript.png', alt: 'JavaScript', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },

    { path: 'assets/icons/Python.png', alt: 'Python', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/Java.png', alt: 'Java', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/CSharp.png', alt: 'C#', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/Postman.png', alt: 'Postman', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/MySQL.png', alt: 'MySQL', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/Git.png', alt: 'Git', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/Figma.png', alt: 'Figma', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
    { path: 'assets/icons/Visual Studio Code.png', alt: 'Visual Studio Code', className: 'h-6 w-6 text-gray-500 dark:text-gray-400' },
  ];
}
