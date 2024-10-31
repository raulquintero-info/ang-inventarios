export const CATEGORIASTABLE: any []=  [
  {
    id: 0,
    nombre: " root",
    parent: "",
    folder: true,
    "status": true,
    title:[{id: 1, "nombre":'root'}],
    children: [
      {id: 1, nombre: "Papeleria", folder: true, parent: "Root", status: true}
    ]
  },
  {
    id: 1,
    nombre: " papeleria",
    parent: "root",
    folder: true,
    "status": true,
    title:[{id: 1, "nombre":'root'},{id:2, nombre: 'Papeleria'}],
    children: [
      {id: 2, nombre: "Oficina", folder: true, parent: "papeleria", status: true},
      {id: 3, nombre: "Merceria", folder: true, parent: "papeleria", status: false}
    ]
  },
  {
    "id": 2,
    "nombre":'oficina',
    "parent": 'papeleria',
    "title": [{id:1, nombre: "root"},{id: 2,nombre:"papeleria", folder: true}, {id: 3, "nombre":"oficina", folde: true}],
    "folder": true,
    "status": true,
    "children": [
      {
        "id": 3,
        "parent": ' Oficina',
        status: true,
        "folder": false,
    "nombre":'plumas',
        "children": []
      },
      {
        "id": 4,
        "nombre":"cuadernos",
        "folder": false,
        status: true,
        "parent": ' Oficina',
        "children": []

      },
      {
        "id": 5,
        "nombre":"lapices",
    "folder": false,
    status: true,
    "parent": ' Oficina',
        "children": []
      },
      {
        "id": 6,
        "nombre":"borradores",
    "folder": false,
    status: true,
    "parent": ' Oficina',
        "children": []
      },
      {
        "id": 7,
        "nombre":"correctores",
    "folder": false,
    status: true,
    "parent": ' Oficina',
        "children": []
      },
      {
        "id": 8,
        "nombre":"cartulinas",
    "folder": false,
    status: true,
    "parent": ' Oficina',
        "children": []
      },
      {
        "id": 9,
        "nombre":"tijeras",
        "folder": false,
         status: true,
        "parent": ' Oficina',
        "children": []
      },
      {
        "id": 3,
        "nombre":'Engrapadoras',
        "parent": 'papeleria',
        "title": [{id:1, nombre: "root"},{id: 2,nombre:"papeleria", folder: true}, {id: 4, "nombre":"Merceria", folde: true}],
        "folder": false,
        "children": []
      }

      ],




  },
  {
    "id": 10,
    "nombre":'Merceria',
    "parent": 'papeleria',
    "title": [{id:1, nombre: "root"},{id: 2,nombre:"papeleria", folder: true}, {id: 4, "nombre":"Merceria", folde: true}],
    "status": false,
    "folder": true,
    "children": []
  }


]
