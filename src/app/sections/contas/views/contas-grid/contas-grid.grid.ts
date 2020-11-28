import { ColDef, ColumnVisibleEvent, GridOptions, GridReadyEvent } from 'ag-grid-community';

export class ContasGrid {

  static get columnDefs(): Array<ColDef> {
    const defaults: ColDef = {
      sortable: true, suppressMovable: true,
    };

    const columns: Array<ColDef> = [
      {
        ...defaults,
        headerName: 'CODIGO', field: 'codigo',
      },
      {
        ...defaults,
        headerName: 'FORNECEDOR', field: 'fornecedor',
      },
      {
        ...defaults,
        headerName: 'VENCIMENTO', field: 'vencimento',
      },
      {
        ...defaults,
        headerName: 'VALOR', field: 'valor',
      },
      {
        ...defaults,
        headerName: 'ESTADO', field: 'estado',
      },
    ];

    return columns;
  }

  static options: GridOptions = {
    columnDefs: ContasGrid.columnDefs,

    rowHeight: 45,
    headerHeight: 56,
    suppressCellSelection: true,
    rowSelection: 'single',
    overlayLoadingTemplate: 'Carregando...',
    // rowData: FornecedoresGrid.mock(),

    onGridReady: ContasGrid.onGridReady,
    onGridSizeChanged: ContasGrid.onGridSizeChanged,
    onColumnVisible: ContasGrid.onColumnVisible,
  };

  private static onGridReady(event: GridReadyEvent) {
    event.api.sizeColumnsToFit();
  }

  private static onGridSizeChanged(event: GridReadyEvent) {
    event.api.sizeColumnsToFit();
  }

  private static onColumnVisible(event: ColumnVisibleEvent) {
    event.api.sizeColumnsToFit();
  }

  static mock() {
    return [
      {
        'codigo': '5d118b75cfe773fe44c35979',
        'fornecedor': 'Nebulean',
        'valor': '$1,825.00',
        'vencimento': '30/06/2019',
        'estado': 'A pagar',
      },
      {
        'codigo': '5d118b759d1ba387ca980a7f',
        'fornecedor': 'Cedward',
        'valor': '$1,412.48',
        'vencimento': '03/07/2019',
        'estado': 'A pagar',
      },
      {
        'codigo': '5d118b758a34d015726fc5ff',
        'fornecedor': 'Virxo',
        'valor': '$3,165.10',
        'vencimento': '25/06/2019',
        'estado': 'A pagar',
      },
      {
        'codigo': '5d118b750f583e7929a330a4',
        'fornecedor': 'Maxemia',
        'valor': '$3,550.90',
        'vencimento': '01/07/2019',
        'estado': 'Aguadando confirmação',
      },
      {
        'codigo': '5d118b756f7be80fe9b72ae3',
        'fornecedor': 'Austex',
        'valor': '$2,041.24',
        'vencimento': '30/06/2019',
        'estado': 'Aguadando confirmação',
      },
      {
        'codigo': '5d118b75e901649c1dd41faf',
        'fornecedor': 'Shopabout',
        'valor': '$3,964.63',
        'vencimento': '29/06/2019',
        'estado': 'Aguadando confirmação',
      },
      {
        'codigo': '5d118b7559f9577d9e11b557',
        'fornecedor': 'Kidstock',
        'valor': '$3,559.50',
        'vencimento': '05/07/2019',
        'estado': 'Pago',
      },
      {
        'codigo': '5d118b75e5bfca5a6fec97c3',
        'fornecedor': 'Sequitur',
        'valor': '$3,749.47',
        'vencimento': '05/07/2019',
        'estado': 'Pago',
      },
      {
        'codigo': '5d118b75b15d81c5579bbf4b',
        'fornecedor': 'Ecstasia',
        'valor': '$3,339.43',
        'vencimento': '04/07/2019',
        'estado': 'Pago',
      }
    ]
  }

}
