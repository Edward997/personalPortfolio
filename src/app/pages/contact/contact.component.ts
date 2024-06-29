import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(contactForm: NgForm) {
    const form = contactForm.value;

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    fetch('https://formspree.io/f/mgvwewpv', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        Swal.fire({
          title: 'Success',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        contactForm.reset();
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Oops! There was a problem submitting your form.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }).catch(error => {
      Swal.fire({
        title: 'Error',
        text: 'Oops! There was a problem submitting your form.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }
}
