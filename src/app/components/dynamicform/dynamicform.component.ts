import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data'

import * as jspdf from 'jspdf';  
      
import html2canvas from 'html2canvas';  



@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {

  formdata: Data[]
  options: string[]

  constructor() { 
    this.formdata= [
      {
        patient_id: 1,
        medicine_name: 'Paracetamol',
        dose: '1 each night'
      }
    ]
    this.options=[
      'Paracetamol',
      'Calpal',
      'Piver',
      'Pader'
    ]
  }

  ngOnInit(): void {
  }

  clearInputValues(searchMedicine,definedose){
    searchMedicine.value='';
    definedose.value='';
  }

  onSubmit(data): void{
    let data_posted = new Data();
    data_posted.dose=data.dose;
    data_posted.medicine_name=data.medicine;
    this.formdata.push(data_posted)
  }

  onDelete(item):void{
    console.log("Delete Clicked")
    console.log(item)
    this.formdata.splice(this.formdata.findIndex(find_item => find_item==item),1);
  }

  generatePDF(){
        console.log("generatePDF")
        var data = document.getElementById('prescription_list');  
        console.log(data)
        html2canvas(data).then(canvas => {  
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'mm', 'a4');
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save('MYPdf.pdf');
        
    });  
  }

}
