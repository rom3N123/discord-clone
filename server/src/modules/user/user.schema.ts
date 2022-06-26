import { User as UserType, UserFields } from '@discord-clone/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument<P extends boolean = false> = Document & UserType<P>;

@Schema()
export class User implements UserFields {
    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: false,
        default: '',
    })
    bio: string;

    @Prop({
        select: false,
        required: true,
    })
    email: string;

    @Prop({ required: true, select: false })
    password: string;

    @Prop({
        ref: 'User',
        type: [Types.ObjectId],
        default: [],
    })
    friends: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
