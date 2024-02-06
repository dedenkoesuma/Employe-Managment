import { AbstractControl, ValidationErrors } from '@angular/forms';

// Custom async validator function
export function dateValidator(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve, reject) => {
    // Mendapatkan tanggal hari ini
    const today = new Date();

    // Mendapatkan tanggal dari control input
    const selectedDate = new Date(control.value);

    // Membandingkan tanggal input dengan tanggal hari ini
    if (selectedDate > today) {
      // Jika tanggal input melebihi tanggal hari ini, kembalikan error
      resolve({ 'invalidDate': true });
    } else {
      // Jika tanggal input valid, kembalikan null
      resolve(null);
    }
  });
}
