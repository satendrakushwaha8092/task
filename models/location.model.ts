import { model, Document, Schema } from 'mongoose';

interface Ilocation extends Document {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

const locationSchema = new Schema<Ilocation>({

    id: {
        type: String,
        required: true,
        trim: true
    },
    street: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zip: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true });

const location = model<Ilocation>('event', locationSchema)
export default location