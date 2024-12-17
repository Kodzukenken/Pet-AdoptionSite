import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isVisible: boolean = false;
  currentSlide: number = 0;
  currentPetSlide: number = 0;
  currentTip: number = 0;

  // Mock data for pets
  mockPets = [
    { id: 1, name: 'Abraham', gender: 'Male', age: 2, type: 'Dog', shelter: 'Shelter A', vaccines: ['Rabies', 'Distemper'], image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Bella', gender: 'Female', age: 3, type: 'Cat', shelter: 'Shelter B', vaccines: ['FVRCP', 'Rabies'], image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Charlie', gender: 'Male', age: 1, type: 'Cat', shelter: 'Shelter C', vaccines: ['Myxomatosis'], image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Daisy', gender: 'Female', age: 4, type: 'Dog', shelter: 'Shelter D', vaccines: ['Rabies'], image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Ella', gender: 'Female', age: 2, type: 'Cat', shelter: 'Shelter E', vaccines: ['FVRCP', 'Rabies'], image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Finn', gender: 'Male', age: 3, type: 'Rabbit', shelter: 'Shelter F', vaccines: ['Myxomatosis'], image: 'https://via.placeholder.com/300' },
  ];

  // Image slider for About Us section
  sliderImages: string[] = [
    './assets/aboutus2.jpg',
    './assets/aboutus3.jpg',
    './assets/aboutus4.jpg',
    './assets/aboutus5.jpg'
  ];

  ngOnInit() {}

  // Handlers for About Us slider
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  // Handlers for Featured Pets slider
  nextPetSlide(): void {
    this.currentPetSlide = (this.currentPetSlide + 1) % (this.mockPets.length - 4);
  }

  prevPetSlide(): void {
    this.currentPetSlide = (this.currentPetSlide - 1 + (this.mockPets.length - 4)) % (this.mockPets.length - 4);
  }
}
