const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Por favor proporciona un nombre'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Por favor proporciona un email'],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Por favor proporciona un email válido',
      ],
    },
    contraseña: {
      type: String,
      required: [true, 'Por favor proporciona una contraseña'],
      minlength: 6,
      select: false,
    },
    rol: {
      type: String,
      enum: ['usuario', 'gerente', 'admin'],
      default: 'usuario',
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
