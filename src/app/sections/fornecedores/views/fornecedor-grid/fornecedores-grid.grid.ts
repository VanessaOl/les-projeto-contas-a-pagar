import { ColDef, ColumnVisibleEvent, GridOptions, GridReadyEvent } from 'ag-grid-community';

export class FornecedoresGrid {

  static get columnDefs(): Array<ColDef> {
    const defaults: ColDef = {
      sortable: true, suppressMovable: true,
    };

    const columns: Array<ColDef> = [
      {
        ...defaults,
        headerName: 'CNPJ', field: 'cnpj',
      },
      {
        ...defaults,
        headerName: 'NOME', field: 'nome',
      },
      {
        ...defaults,
        headerName: 'EMAIL', field: 'email',
      },
      {
        ...defaults,
        headerName: 'CELULAR', field: 'celular',
      },
      {
        ...defaults,
        headerName: 'TELEFONE', field: 'telefone',
      },
    ];

    return columns;
  }

  static options: GridOptions = {
    columnDefs: FornecedoresGrid.columnDefs,

    rowHeight: 45,
    headerHeight: 56,
    suppressCellSelection: true,
    rowSelection: 'single',
    overlayLoadingTemplate: 'Carregando...',
    // rowData: FornecedoresGrid.mock(),

    onGridReady: FornecedoresGrid.onGridReady,
    onGridSizeChanged: FornecedoresGrid.onGridSizeChanged,
    onColumnVisible: FornecedoresGrid.onColumnVisible,
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
        'cnpj': '5d1041b8ad0fc82f80c93a32',
        'nome': 'Rodeomad',
        'razaoSocial': 'Rivers Chan',
        'email': 'rodeomad@email.tv',
        'celular': 57519980692,
        'telefone': 39871463702
      },
      {
        'cnpj': '5d1041b85a3f3a1bb8aebd0d',
        'nome': 'Gluid',
        'razaoSocial': 'Marianne Gomez',
        'email': 'gluid@email.info',
        'celular': 67296067657,
        'telefone': 69879844055
      },
      {
        'cnpj': '5d1041b85bc5ee19e1671086',
        'nome': 'Genmy',
        'razaoSocial': 'Lancaster Oconnor',
        'email': 'genmy@email.io',
        'celular': 95980528309,
        'telefone': 90387966059
      },
      {
        'cnpj': '5d1041b8d566c6343bd08735',
        'nome': 'Zillacom',
        'razaoSocial': 'Jacklyn Thornton',
        'email': 'zillacom@email.me',
        'celular': 39821854911,
        'telefone': 38449840289
      },
      {
        'cnpj': '5d1041b863d3b8c7db6eb5c8',
        'nome': 'Voratak',
        'razaoSocial': 'Kirsten Snyder',
        'email': 'voratak@email.biz',
        'celular': 92514987896,
        'telefone': 69982154195
      },
      {
        'cnpj': '5d1041b815c8e44d8714778d',
        'nome': 'Opticall',
        'razaoSocial': 'Patsy Horn',
        'email': 'opticall@email.us',
        'celular': 79901706144,
        'telefone': 17458960178
      },
      {
        'cnpj': '5d1041b8b38c3c04c2db32e6',
        'nome': 'Ontagene',
        'razaoSocial': 'Wooten Gamble',
        'email': 'ontagene@email.name',
        'celular': 73221037915,
        'telefone': 12271621114
      },
      {
        'cnpj': '5d1041b8055ab26977c39d17',
        'nome': 'Eplode',
        'razaoSocial': 'Rebecca Campbell',
        'email': 'eplode@email.ca',
        'celular': 39435445499,
        'telefone': 45464653061
      }
    ]
  }

}
