import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorsService } from '../services/authors.service';
//changes in this file
@Component({
  selector: 'app-authors',
  standalone: true,
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AuthorsComponent {
  authorId!: string;
  author: any = null;
  message: string = '';

  constructor(private authorsService: AuthorsService) {}

  onSubmit() {
    const id = Number(this.authorId);
    if (isNaN(id)) {
      this.message = 'Please enter a valid number for the author ID';
      this.author = null;
      return;
    }

    this.authorsService.getAuthorById(id).subscribe({
      next: (author) => {
        console.log('Author data:', author); 
        this.author = author;
        this.message = '';
      },
      error: () => {
        this.message = 'Author not found';
        this.author = null;
      }
    });
  }
}
