use("hospitalizacion_nosql");

db.pacientes.deleteMany({});
db.hospitales.deleteMany({});
db.personal_medico.deleteMany({});
db.medicamentos.deleteMany({});
db.hospitalizaciones.deleteMany({});

// 2. Colección pacientes.
db.pacientes.insertMany([
  {
    _id: "PAC-001",
    tipo_documento: "CC",
    numero_documento: "TEST-1001",
    nombres: { primer: "Ana", segundo: "María", apellidos: "Prueba" },
    fecha_nacimiento: ISODate("1990-03-14T00:00:00Z"),
    sexo: "Femenino",
    grupo_sanguineo: "O+",
    estado_civil: "SOLTERO",
    eps: "EPS Demostración",
    municipio_residencia: "Medellín",
    estado: "ACTIVO"
  },
  {
    _id: "PAC-002",
    tipo_documento: "CC",
    numero_documento: "TEST-1002",
    nombres: { primer: "Carlos", segundo: "Andrés", apellidos: "Ejemplo" },
    fecha_nacimiento: ISODate("1985-07-22T00:00:00Z"),
    sexo: "Masculino",
    grupo_sanguineo: "A+",
    estado_civil: "CASADO",
    eps: "EPS Demostración",
    municipio_residencia: "Bello",
    estado: "ACTIVO"
  },
  {
    _id: "PAC-003",
    tipo_documento: "TI",
    numero_documento: "TEST-1003",
    nombres: { primer: "Valentina", segundo: null, apellidos: "Modelo" },
    fecha_nacimiento: ISODate("2012-11-05T00:00:00Z"),
    sexo: "Femenino",
    grupo_sanguineo: "B+",
    estado_civil: "NO_INFORMA",
    eps: "EPS Demostración",
    municipio_residencia: "Bello",
    estado: "ACTIVO"
  },
  {
    _id: "PAC-004",
    tipo_documento: "CC",
    numero_documento: "TEST-1004",
    nombres: { primer: "Luis", segundo: "Felipe", apellidos: "Simulado" },
    fecha_nacimiento: ISODate("1965-05-02T00:00:00Z"),
    sexo: "Masculino",
    grupo_sanguineo: "A-",
    estado_civil: "VIUDO",
    eps: "EPS Demostración",
    municipio_residencia: "Medellín",
    estado: "ACTIVO"
  },
  {
    _id: "PAC-005",
    tipo_documento: "CC",
    numero_documento: "TEST-1005",
    nombres: { primer: "María", segundo: "Fernanda", apellidos: "Ejercicio" },
    fecha_nacimiento: ISODate("1995-09-17T00:00:00Z"),
    sexo: "Femenino",
    grupo_sanguineo: "AB+",
    estado_civil: "UNION_LIBRE",
    eps: "EPS Demostración",
    municipio_residencia: "Itagüí",
    estado: "ACTIVO"
  }
]);

// 3. Colección hospitales.
db.hospitales.insertMany([
  {
    _id: "HOS-001",
    codigo_habilitacion: "DEMO-001",
    nombre: "Hospital Académico Central",
    municipio: "Medellín",
    direccion: "Dirección de prueba 1",
    nivel_atencion: "III",
    estado: "ACTIVO"
  },
  {
    _id: "HOS-002",
    codigo_habilitacion: "DEMO-002",
    nombre: "Centro Clínico de Ejemplo",
    municipio: "Bello",
    direccion: "Dirección de prueba 2",
    nivel_atencion: "II",
    estado: "ACTIVO"
  },
  {
    _id: "HOS-003",
    codigo_habilitacion: "DEMO-003",
    nombre: "Hospital Simulado del Oriente",
    municipio: "Rionegro",
    direccion: "Dirección de prueba 3",
    nivel_atencion: "II",
    estado: "ACTIVO"
  }
]);

// 4. Colección personal_medico.
db.personal_medico.insertMany([
  {
    _id: "MED-001",
    tipo_documento: "CC",
    numero_documento: "TEST-M001",
    nombres: "Laura",
    apellidos: "Médica Demo",
    registro_medico: "RM-DEMO-001",
    especialidad: "Medicina Interna",
    hospital_id: "HOS-001",
    estado: "ACTIVO"
  },
  {
    _id: "MED-002",
    tipo_documento: "CC",
    numero_documento: "TEST-M002",
    nombres: "Andrés",
    apellidos: "Doctor Ejemplo",
    registro_medico: "RM-DEMO-002",
    especialidad: "Pediatría",
    hospital_id: "HOS-002",
    estado: "ACTIVO"
  },
  {
    _id: "MED-003",
    tipo_documento: "CC",
    numero_documento: "TEST-M003",
    nombres: "Diana",
    apellidos: "Profesional Prueba",
    registro_medico: "RM-DEMO-003",
    especialidad: "Urgencias",
    hospital_id: "HOS-003",
    estado: "ACTIVO"
  }
]);

// 5. Colección medicamentos.
db.medicamentos.insertMany([
  {
    _id: "FAR-001",
    nombre_generico: "Acetaminofén",
    nombre_comercial: "Marca demostrativa",
    forma_farmaceutica: "Tableta",
    concentracion: "500 mg",
    unidad_medida: "mg"
  },
  {
    _id: "FAR-002",
    nombre_generico: "Amoxicilina",
    nombre_comercial: "Marca demostrativa",
    forma_farmaceutica: "Cápsula",
    concentracion: "500 mg",
    unidad_medida: "mg"
  },
  {
    _id: "FAR-003",
    nombre_generico: "Losartán",
    nombre_comercial: "Marca demostrativa",
    forma_farmaceutica: "Tableta",
    concentracion: "50 mg",
    unidad_medida: "mg"
  },
  {
    _id: "FAR-004",
    nombre_generico: "Metformina",
    nombre_comercial: "Marca demostrativa",
    forma_farmaceutica: "Tableta",
    concentracion: "850 mg",
    unidad_medida: "mg"
  },
  {
    _id: "FAR-005",
    nombre_generico: "Salbutamol",
    nombre_comercial: "Marca demostrativa",
    forma_farmaceutica: "Inhalador",
    concentracion: "100 mcg/dosis",
    unidad_medida: "mcg"
  }
]);

// 6. Colección hospitalizaciones.
db.hospitalizaciones.insertMany([
  {
    _id: "HOSP-001",
    paciente_id: "PAC-001",
    hospital_id: "HOS-001",
    medico_responsable_id: "MED-001",
    fecha_ingreso: ISODate("2026-10-20T08:00:00Z"),
    fecha_egreso: ISODate("2026-10-22T14:00:00Z"),
    estado: "FINALIZADA",
    motivo_ingreso: "Dolor abdominal para valoración",
    diagnosticos: [
      {
        codigo: "DX-001",
        descripcion: "Dolor abdominal en estudio",
        tipo: "PRINCIPAL",
        observacion: "Caso académico"
      }
    ],
    evoluciones: [
      {
        fecha: ISODate("2026-10-20T10:00:00Z"),
        medico_id: "MED-001",
        observacion: "Ingreso y valoración inicial de prueba",
        plan: "Observación clínica"
      },
      {
        fecha: ISODate("2026-10-21T09:00:00Z"),
        medico_id: "MED-001",
        observacion: "Seguimiento clínico simulado",
        plan: "Reevaluación"
      }
    ],
    prescripciones: [
      {
        fecha_emision: ISODate("2026-10-20T10:15:00Z"),
        estado: "FINALIZADA",
        indicaciones: "Ejemplo académico; no constituye una orden médica",
        medicamentos: [
          {
            medicamento_id: "FAR-001",
            dosis: "Según orden ficticia",
            frecuencia: "Según orden ficticia",
            duracion_dias: 2,
            via_administracion: "Oral",
            cantidad: 6
          }
        ]
      }
    ]
  },
  {
    _id: "HOSP-002",
    paciente_id: "PAC-002",
    hospital_id: "HOS-001",
    medico_responsable_id: "MED-001",
    fecha_ingreso: ISODate("2026-10-21T07:30:00Z"),
    fecha_egreso: null,
    estado: "ACTIVA",
    motivo_ingreso: "Control y evaluación de presión arterial",
    diagnosticos: [
      {
        codigo: "DX-002",
        descripcion: "Hipertensión arterial (caso simulado)",
        tipo: "PRINCIPAL",
        observacion: "Dato ficticio"
      }
    ],
    evoluciones: [
      {
        fecha: ISODate("2026-10-21T11:00:00Z"),
        medico_id: "MED-001",
        observacion: "Registro de evolución de prueba",
        plan: "Continuar evaluación simulada"
      }
    ],
    prescripciones: [
      {
        fecha_emision: ISODate("2026-10-21T11:15:00Z"),
        estado: "VIGENTE",
        indicaciones: "Ejemplo académico; no constituye una orden médica",
        medicamentos: [
          {
            medicamento_id: "FAR-003",
            dosis: "Según orden ficticia",
            frecuencia: "Según orden ficticia",
            duracion_dias: 3,
            via_administracion: "Oral",
            cantidad: 9
          }
        ]
      }
    ]
  },
  {
    _id: "HOSP-003",
    paciente_id: "PAC-003",
    hospital_id: "HOS-002",
    medico_responsable_id: "MED-002",
    fecha_ingreso: ISODate("2026-10-22T09:00:00Z"),
    fecha_egreso: ISODate("2026-10-23T12:00:00Z"),
    estado: "FINALIZADA",
    motivo_ingreso: "Valoración pediátrica por fiebre",
    diagnosticos: [
      {
        codigo: "DX-003",
        descripcion: "Síndrome febril en evaluación",
        tipo: "PRINCIPAL",
        observacion: "Caso simulado"
      }
    ],
    evoluciones: [
      {
        fecha: ISODate("2026-10-22T12:00:00Z"),
        medico_id: "MED-002",
        observacion: "Seguimiento pediátrico de prueba",
        plan: "Observación y reevaluación"
      }
    ],
    prescripciones: [
      {
        fecha_emision: ISODate("2026-10-22T12:15:00Z"),
        estado: "FINALIZADA",
        indicaciones: "Ejemplo académico; requiere valoración profesional en contexto real",
        medicamentos: [
          {
            medicamento_id: "FAR-001",
            dosis: "Según orden ficticia",
            frecuencia: "Según orden ficticia",
            duracion_dias: 1,
            via_administracion: "Oral",
            cantidad: 3
          }
        ]
      }
    ]
  },
  {
    _id: "HOSP-004",
    paciente_id: "PAC-004",
    hospital_id: "HOS-003",
    medico_responsable_id: "MED-003",
    fecha_ingreso: ISODate("2026-10-23T16:00:00Z"),
    fecha_egreso: null,
    estado: "ACTIVA",
    motivo_ingreso: "Dificultad respiratoria para evaluación",
    diagnosticos: [
      {
        codigo: "DX-004",
        descripcion: "Crisis asmática (caso simulado)",
        tipo: "PRINCIPAL",
        observacion: "Dato ficticio"
      }
    ],
    evoluciones: [
      {
        fecha: ISODate("2026-10-23T17:00:00Z"),
        medico_id: "MED-003",
        observacion: "Valoración inicial simulada",
        plan: "Observación clínica"
      },
      {
        fecha: ISODate("2026-10-24T08:00:00Z"),
        medico_id: "MED-003",
        observacion: "Segunda evolución de ejemplo",
        plan: "Reevaluación médica"
      }
    ],
    prescripciones: [
      {
        fecha_emision: ISODate("2026-10-23T17:15:00Z"),
        estado: "VIGENTE",
        indicaciones: "Ejemplo académico; no constituye una orden médica",
        medicamentos: [
          {
            medicamento_id: "FAR-005",
            dosis: "Según orden ficticia",
            frecuencia: "Según orden ficticia",
            duracion_dias: 2,
            via_administracion: "Inhalada",
            cantidad: 1
          }
        ]
      }
    ]
  },
  {
    _id: "HOSP-005",
    paciente_id: "PAC-005",
    hospital_id: "HOS-002",
    medico_responsable_id: "MED-001",
    fecha_ingreso: ISODate("2026-10-24T06:45:00Z"),
    fecha_egreso: null,
    estado: "ACTIVA",
    motivo_ingreso: "Evaluación clínica general",
    diagnosticos: [
      {
        codigo: "DX-005",
        descripcion: "Observación clínica sin diagnóstico definitivo",
        tipo: "PRINCIPAL",
        observacion: "Caso ficticio"
      }
    ],
    evoluciones: [
      {
        fecha: ISODate("2026-10-24T09:30:00Z"),
        medico_id: "MED-001",
        observacion: "Ingreso y evaluación de ejemplo",
        plan: "Continuar observación"
      }
    ],
    prescripciones: [
      {
        fecha_emision: ISODate("2026-10-24T09:45:00Z"),
        estado: "VIGENTE",
        indicaciones: "Sin medicamento específico en este registro de prueba",
        medicamentos: []
      }
    ]
  }
]);
