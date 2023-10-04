import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  ngOnInit() {
    this.mostrarBienvenida();
  }
  mostrarBienvenida() {
    Swal.fire({
      title: '¡Bienvenido!',
      text: "Gracias por visitar mi página 🖖   recuerda que por el momento las vistas solo estan disponibles en dispositivos de escritorio",
      confirmButtonText: 'Aceptar',
    });
  }
  mostrarAlerta() {
    Swal.fire({
      title: 'Contacta conmigo',
      text: "Estoy a tu disposición para cuando decidas contactarme 🖖",
      showCancelButton: true,
      showDenyButton: true,
      showCloseButton: true,
      confirmButtonText: 'WhatsApp',
      cancelButtonText: 'Correo',
      denyButtonText: 'LinkedIn',
      confirmButtonColor: '#92FF77',
      cancelButtonColor: '#FF323E',
      denyButtonColor: '#487BFF',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://wa.me/+573209582039?text=Hola%20Dairon';
      } else if (result.isDismissed && result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = 'mailto:dairon.rodriguezvega@gmail.com?subject=Asunto%20del%20correo&body=Hola%20Dairon%20estoy%20Interesado';
      } else if (result.isDenied) {
        window.location.href = 'https://www.linkedin.com/in/dairon-rodriguez-a3615628b/';
      }
    });
  }

}
