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
      opcion: '¿Cuánto presupuesto sería si fueran 3 personas?',
      actividad: 'Actividad: INI ¿Qué vamos a comer?',
      respuesta: '145',
      tiempo: '5:24',
    },
    {
      opcion:
        '¿Cuántas combinaciones se pueden relizar con un dado de resultado 3?',
      actividad: 'Actividad: KOFER ¿Qué más vamos a llevar?',
      respuesta: '6',
      tiempo: '7:42',
    },
    {
      opcion: '¿Qué cantidad se uede obtener si sale un valor de 6?',
      actividad: 'Actividad: KOFER ¿Qué más vamos a llevar?',
      respuesta: '16',
      tiempo: '7:42',
    },
    {
      opcion: 'No hay opción establecia',
      actividad: 'Actividad: KUGULA ¿Qué vamos a comprar?',
      respuesta: 'N/A',
      tiempo: 'N/A',
    },
    {
      opcion: 'No hay opción establecia',
      actividad: 'Actividad: KUGULA ¿Qué vamos a comprar?',
      respuesta: 'N/A',
      tiempo: 'N/A',
    },
    {
      opcion: 'No hay opción establecia',
      actividad: 'Actividad: KUGULA ¿Qué vamos a comprar?',
      respuesta: 'N/A',
      tiempo: 'N/A',
    },
    {
      opcion: 'No hay opción establecia',
      actividad: 'Actividad: KOFER ¿Qué más vamos a llevar?',
      respuesta: '16',
      tiempo: '7:42',
    },
    {
      opcion: 'No hay opción establecia',
      actividad: 'Actividad: KOFER ¿Qué más vamos a llevar?',
      respuesta: 'N/A',
      tiempo: 'N/A',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  exportar() {
    // console.log("ExportJsonFile", dataTable);
    let newDate: any = `${new Date().toDateString()} - ${new Date().toLocaleTimeString()}`;
    let settings: any = {
      fileName: `Resultados-${newDate}`, // Name of the resulting spreadsheet
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
