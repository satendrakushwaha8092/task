import mongoose,{ model, Document, Schema } from 'mongoose';

interface Ievent extends Document {
  id: number;
  eventName: string;
  eventDate: string;
  email: string;
  phone: string;
  location: number;
  deletedAt:string;
}

export const eventSchema = new Schema<Ievent>({

    id: {
        type: Number,
        required: true,
        trim: true
    },
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    eventDate: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: Number,
        required: true,
        trim: true
    },
    deletedAt: {
        type: String,
    }
}, { timestamps: true });

const event = mongoose.models.Ievent || model<Ievent>('event', eventSchema)
export default event