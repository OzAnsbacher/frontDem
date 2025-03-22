import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { FilesService } from '../../../service/files.service';

@Component({
  selector: 'upload-button',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './upload-button.component.html',
  styleUrl: './upload-button.component.scss'
})
export class UploadButtonComponent {

  plusImg = "../../../../assets/icon/plus.png";

  constructor(private filesService: FilesService) { }

  onFileSelected(event: any) {
    const files: File = event.target.files;
    if (files) {
      this.filesService.sendFile(files); 
    }
  }


}
