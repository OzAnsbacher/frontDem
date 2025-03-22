import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { FilesService } from '../../service/files.service';
import { UploadButtonComponent } from "./upload-button/upload-button.component";

@Component({
  selector: 'app-file-page',
  standalone: true,
  imports: [NgOptimizedImage, UploadButtonComponent, CommonModule],
  templateUrl: './file-page.component.html',
  styleUrl: './file-page.component.scss'
})

export class FilePageComponent implements OnInit {

  constructor(private filesService: FilesService) { }
  fileLength: number = 0;
  fileName: string = '';
  files: Array<File> = [];
  pdfImg = "../../../assets/icon/pdf.png";
  audioImg = "../../../assets/icon/audio.png";
  videoImg = "../../../assets/icon/video.png";
  wordImg = "../../../assets/icon/word.png";
  photoImg = "../../../assets/icon/photo.png";
  deleteImg = "../../../assets/icon/delete.png";
  downloadImg = "../../../assets/icon/downloads.png";
  openImg = "../../../assets/icon/open.png";
  defaultImg = "../../../assets/icon/default.png";


  ngOnInit() {
    this.filesService.files$.subscribe((files) => {
      if (files) {
        console.log(files);
        if (files instanceof FileList) {
          const newFiles = Array.from(files);

          if (!this.files.length) {
            this.files = newFiles;
          } else {
            this.files = [...this.files, ...newFiles];
          }
        }
        console.log(this.files);
      }

    });
  }

  openPdf() {
    throw new Error('Method not implemented.');
  }

  getFileImage(file: { name: string }): string {
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    console.log(extension)
    if (extension === 'pdf') {
      return this.pdfImg;
    } else if (extension === 'doc' || extension === 'docx') {
      return this.wordImg;
    } else if (['mp3', 'wav', 'ogg'].includes(extension)) {
      return this.audioImg;
    } else if (['mp4', 'avi', 'mov', 'mkv', 'flv'].includes(extension)) {
      return this.videoImg;
    } else if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'tiff'].includes(extension)) {
      return this.photoImg;
    } else {
      return 'assets/icon/default.png'; // תמונת ברירת מחדל לקבצים אחרים
    }

  }


}

