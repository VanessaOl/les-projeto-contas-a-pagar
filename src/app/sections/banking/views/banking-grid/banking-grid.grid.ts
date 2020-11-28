import { ColDef, ColumnVisibleEvent, GridOptions, GridReadyEvent } from 'ag-grid-community';

export class BankingGrid {

  static get columnDefs(): Array<ColDef> {
    const defaults: ColDef = {
      sortable: true, suppressMovable: true,
    };

    const columns: Array<ColDef> = [
      {
        ...defaults,
        headerName: 'BANCO', field: 'banco',
      },
      {
        ...defaults,
        headerName: 'AGENCIA', field: 'agencia',
      },
      {
        ...defaults,
        headerName: 'CONTA', field: 'conta',
      },
      {
        ...defaults,
        headerName: 'TIPO', field: 'tipo',
      },
      {
        ...defaults,
        headerName: 'SALDO', field: 'saldo',
      },
    ];

    return columns;
  }

  static options: GridOptions = {
    columnDefs: BankingGrid.columnDefs,

    rowHeight: 45,
    headerHeight: 56,
    suppressCellSelection: true,
    rowSelection: 'single',
    overlayLoadingTemplate: 'Carregando...',
    // rowData: FornecedoresGrid.mock(),

    onGridReady: BankingGrid.onGridReady,
    onGridSizeChanged: BankingGrid.onGridSizeChanged,
    onColumnVisible: BankingGrid.onColumnVisible,
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
        'banco': 'Emtrac',
        'agencia': 2985,
        'conta': 458297,
        'tipo': 'Conta corrente',
        'saldo': '$3,683.22'
      },
      {
        'banco': 'Medmex',
        'agencia': 2259,
        'conta': 927714,
        'tipo': 'Poupança',
        'saldo': '$1,086.76'
      },
      {
        'banco': 'Letpro',
        'agencia': 2356,
        'conta': 447737,
        'tipo': 'Investimento',
        'saldo': '$3,667.82'
      },
      {
        'banco': 'Talendula',
        'agencia': 9028,
        'conta': 156784,
        'tipo': 'Poupança',
        'saldo': '$2,563.17'
      },
      {
        'banco': 'Incubus',
        'agencia': 2071,
        'conta': 992994,
        'tipo': 'Conta corrente',
        'saldo': '$1,358.85'
      },
      {
        'banco': 'Pyrami',
        'agencia': 8141,
        'conta': 106765,
        'tipo': 'Investimento',
        'saldo': '$3,068.46'
      },
      {
        'banco': 'Xelegyl',
        'agencia': 8762,
        'conta': 501991,
        'tipo': 'Conta corrente',
        'saldo': '$2,275.15'
      },
      {
        'banco': 'Limage',
        'agencia': 8757,
        'conta': 623812,
        'tipo': 'Conta corrente',
        'saldo': '$2,719.78'
      },
      {
        'banco': 'Iplax',
        'agencia': 1302,
        'conta': 499817,
        'tipo': 'Investimento',
        'saldo': '$2,839.90'
      }
    ];
  }

}
