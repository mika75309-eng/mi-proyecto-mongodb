const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, 'Por favor proporciona un título para la tarea'],
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    proyecto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    asignado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    estado: {
      type: String,
      enum: ['pendiente', 'en progreso', 'completada', 'cancelada'],
      default: 'pendiente',
    },
    prioridad: {
      type: String,
      enum: ['baja', 'media', 'alta', 'urgente'],
      default: 'media',
    },
    fechaVencimiento: {
      type: Date,
    },
    progreso: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
