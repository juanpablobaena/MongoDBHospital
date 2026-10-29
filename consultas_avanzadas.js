// Consulta 1. Hospitalizaciones activas con información de la cama

db.hospitalizaciones.aggregate([
  {
    $match: {
      estado: "ACTIVA",
      eliminado: { $ne: true }
    }
  },
  {
    $lookup: {
      from: "camas",
      localField: "cama_id",
      foreignField: "_id",
      as: "datos_cama"
    }
  },
  {
    $unwind: {
      path: "$datos_cama",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project: {
      _id: 1,
      paciente_id: 1,
      hospital_id: 1,
      cama_id: 1,
      estado_hospitalizacion: "$estado",
      habitacion: "$datos_cama.habitacion",
      estado_cama: "$datos_cama.estado"
    }
  }
]);

// $match: filtra las hospitalizaciones activas que no estén marcadas como eliminadas.
// $lookup: relaciona los documentos con la colección camas.
// $unwind: convierte el arreglo resultante en un documento individual y conserva las hospitalizaciones que no tengan una cama encontrada.
// $project: selecciona los campos que se mostrarán.


// Consulta 2. Cantidad de hospitalizaciones por diagnóstico


db.hospitalizaciones.aggregate([
  {
    $unwind: "$diagnosticos"
  },
  {
    $group: {
      _id: "$diagnosticos.descripcion",
      total_hospitalizaciones: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      diagnostico: "$_id",
      total_hospitalizaciones: 1
    }
  }
]);


// $unwind: separa los diagnósticos embebidos para analizarlos individualmente.
// $group: agrupa por descripción y cuenta las apariciones.
// $project: presenta el diagnóstico y su total en un formato legible.


// Consulta 3. Medicamentos prescritos con información del catálogo


db.hospitalizaciones.aggregate([
  {
    $unwind: "$prescripciones"
  },
  {
    $unwind: "$prescripciones.medicamentos"
  },
  {
    $lookup: {
      from: "medicamentos",
      localField: "prescripciones.medicamentos.medicamento_id",
      foreignField: "_id",
      as: "datos_medicamento"
    }
  },
  {
    $project: {
      _id: 1,
      paciente_id: 1,
      estado_prescripcion: "$prescripciones.estado",
      medicamento_id: "$prescripciones.medicamentos.medicamento_id",
      nombre_medicamento: {
        $arrayElemAt: [
          "$datos_medicamento.nombre_generico",
          0
        ]
      },
      dosis: "$prescripciones.medicamentos.dosis",
      via: "$prescripciones.medicamentos.via_administracion"
    }
  }
]);

// $unwind: separa las prescripciones.
// $unwind: separa los medicamentos de cada prescripción.
// $lookup: busca los medicamentos en el catálogo.
// $project: presenta la hospitalización, el medicamento y sus campos asociados.