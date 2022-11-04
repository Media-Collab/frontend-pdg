import { Component, OnInit } from '@angular/core';
import xlsx from 'json-as-xlsx';
@Component({
  selector: 'app-profesor-resultados',
  templateUrl: './profesor-resultados.component.html',
  styleUrls: ['./profesor-resultados.component.scss'],
})
export class ProfesorResultadosComponent implements OnInit {
  data: any[] = [
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '23',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '24234',
    },
    {
      opcion: 'Opcion',
      actividad: 'Actividad',
      respuesta: 'Respuesta',
      tiempo: '53',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  exportar() {
    // console.log("ExportJsonFile", dataTable);
    let newDate = 'dd-mm-yyyy-HH.MM.ss';
    let settings: any = {
      fileName: `$Resultados-${newDate}`, // Name of the resulting spreadsheet
      extraLength: 3, // A bigger number means that columns will be wider
      writeOptions: {
        bookType: 'xlsx',
      }, // Style options from https://github.com/SheetJS/sheetjs#writing-options
    };

    let newData: any = [];
    let columnsNames: any = [];
    let data2 = [];
    let columnInfo: any = [];

    this.data.forEach((element: any) => {
      newData.push({
        OPCION: element.opcion,
        ACTIVIDAD: element.actividad,
        RESPUESTA: element.respuesta,
        TIEMPO: element.tiempo,
      });
    });

    Object.keys(newData[0]).forEach((key) => {
      columnsNames.push(key);
    });

    columnsNames.forEach((element: any) => {
      columnInfo.push({
        label: element,
        value: element,
      });
    });
    data2 = [
      {
        sheet: 'moduleName',
        columns: columnInfo,
        content: newData,
      },
    ];

    xlsx(data2, settings);
  }
}
