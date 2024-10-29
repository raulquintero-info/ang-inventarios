export const CATEGORIAS: any []=  [
  {
    "id": 1,
    "nombre": 'papeleria',
    "parent": '0',
    "isFolder": true,
    "children": [
        {
          "id": 2,
          "nombre":'oficina',
          "parent": '1',
          "isFolder": true,
          "children": [
            {
              "id": 3,
              "parent": 2,
              "nombre":'plumas',
              "isFolder": false,
              "children": []
            },
            {
              "id": 4,
              "nombre":"cuadernos",
              "parent": 2,
              "isFolder": false,
              "children": []

            },
            {
              "id": 5,
              "nombre":"lapices",
              "parent": 2,
              "isFolder": false,
              "children": []
            },
            {
              "id": 6,
              "nombre":"borradores",
              "parent": 2,
              "isFolder": false,
              "children": []
            },
            {
              "id": 7,
              "nombre":"correctores",
              "parent": 2,
              "isFolder": true,
              "children": [
                {
                  "id": 90,
                  "nombre":"C. de lapiz",
                  "parent": 2,
                  "isFolder": false,
                  "children": []
                },
              ]
            },
            {
              "id": 8,
              "nombre":"cartulinas",
              "parent": 2,
              "isFolder": false,
              "children": []
            },
            {
              "id": 9,
              "nombre":"tijeras",
              "parent": 2,
              "isFolder": false,
              "children": []
            }

            ],




        },
        {
          "id": 10,
          "nombre":'Merceria',
          "parent": '1',
          "isFolder": true,
          "children": [
            {
              "id": 11,
              "nombre":'Estambre',
              "parent": '10',
              "isFolder": false,
              "children": []
            },
            {
              "id":12,
              "nombre":"tijeras",
              "parent": 10,
              "isFolder": false,
            }
          ]
        }
      ]
  },
  {
    "id": 14,
    "nombre": 'ferreteria',
    "parent": '0',
    "isFolder": true,
    "children":[

    ]
  }

]
