import Job from '../models/Job.js';
import mongoose from 'mongoose';

// Função utilitária para validar ObjectId
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// CREATE job
export const createJob = async (req, res) => {
    try {
        const job = new Job({
            ...req.body,
            createdBy: req.user.id
        });

        await job.save();
        res.status(201).json({
            success: true,
            data: job,
            message: 'Vaga criada com sucesso!'
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// READ ALL jobs
export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('createdBy', 'name email');
        res.status(200).json({
            success: true,
            data: jobs,
            message: 'Leitura de todas as vagas feita com sucesso!'
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// READ ONE job
export const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId(id)) return res.status(400).json({ success: false, message: 'ID inválido.' });

        const job = await Job.findById(id).populate('createdBy', 'name email');
        if (!job) return res.status(404).json({ success: false, message: 'Vaga não encontrada.' });

        res.status(200).json({ success: true, data: job, message: 'Leitura da vaga feita com sucesso!' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// UPDATE job
export const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId(id)) return res.status(400).json({ success: false, message: 'ID inválido.' });

        const job = await Job.findById(id);
        if (!job) return res.status(404).json({ success: false, message: 'Vaga não encontrada.' });
        if (job.createdBy.toString() !== req.user.id)
            return res.status(403).json({ success: false, message: 'Acesso negado.' });

        const updatedJob = await Job.findByIdAndUpdate(id, req.body, { returnDocument: 'after' });
        res.status(200).json({ success: true, data: updatedJob, message: 'Vaga atualizada com sucesso!' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// DELETE job
export const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId(id)) return res.status(400).json({ success: false, message: 'ID inválido.' });

        const job = await Job.findById(id);
        if (!job) return res.status(404).json({ success: false, message: 'Vaga não encontrada.' });
        if (job.createdBy.toString() !== req.user.id)
            return res.status(403).json({ success: false, message: 'Acesso negado.' });

        await Job.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Vaga deletada com sucesso!' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};