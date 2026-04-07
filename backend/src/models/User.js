import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'O nome é obrigatório'], 
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'O email é obrigatório'], 
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'Email inválido']
  },
  password: { 
    type: String, 
    required: [true, 'A senha é obrigatória'],
    minlength: [6, 'A senha precisa ter pelo menos 6 caracteres']
  },
}, { 
  timestamps: true 
});

// Remove password quando retorna JSON
userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model('User', userSchema);