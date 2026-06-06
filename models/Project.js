const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Por favor proporciona un nombre para el proyecto'],
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    estado: {
      type: String,
      enum: ['planificación', 'en progreso', 'pausado', 'completado'],
      default: 'planificación',
    },
    gerente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    miembros: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    prioridad: {
      type: String,
      enum: ['baja', 'media', 'alta'],
      default: 'media',
    },
    presupuesto: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
