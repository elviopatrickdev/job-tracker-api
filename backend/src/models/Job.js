import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    recruiter: { type: String, required: true },
    stack: { type: String, required: true },
    location: { type: String, required: true },
    status: {
        type: String,
        enum: ['Pendente', 'Entrevista', 'Aceite', 'Rejeitado'],
        default: 'Pendente'
    },
    details: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);