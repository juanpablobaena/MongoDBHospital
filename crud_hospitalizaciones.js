db.hospitalizaciones.insertOne({
  _id: "HOSP-PRUEBA-001",
  paciente_id: "PAC-001",
  hospital_id: "HOS-001",
  medico_responsable_id: "MED-001",
  cama_id: null,
  fecha_ingreso: new Date(),
  fecha_egreso: null,
  estado: "ACTIVA",
  motivo_ingreso: "Registro de prueba CRUD",
  diagnosticos: [
    {
      codigo: "DX-PRUEBA",
      descripcion: "Diagnóstico ficticio para pruebas",
      tipo: "PRINCIPAL",
      observacion: "Dato académico"
    }
  ],
  evoluciones: [],
  prescripciones: [],
  eliminado: false
});


db.hospitalizaciones.findOne({
  _id: "HOSP-PRUEBA-001"
});


db.hospitalizaciones.updateOne(
  { _id: "HOSP-PRUEBA-001" },
  {
    $set: {
      motivo_ingreso: "Motivo actualizado para la prueba",
      observacion_administrativa: "Registro revisado"
    }
  }
);

db.hospitalizaciones.updateOne(
  { _id: "HOSP-004" },
  {
    $set: {
      "diagnosticos.$[dx].observacion":
        "Observación actualizada para la demostración"
    }
  },
  {
    arrayFilters: [
      { "dx.codigo": "DX-004" }
    ]
  }
);


db.hospitalizaciones.updateOne(
  { _id: "HOSP-PRUEBA-001" },
  {
    $set: {
      eliminado: true,
      fecha_eliminacion: new Date()
    }
  }
);