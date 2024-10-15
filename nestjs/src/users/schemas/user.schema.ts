import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Exclude } from 'class-transformer'
import { EGender, ERole } from 'utilities/enums/user.enum'

@Schema()
export class User {
  @Prop({ required: true, type: String, minlength: 1, maxlength: 255 })
  name: string

  @Prop({ required: true, type: Date })
  birthday: Date

  @Prop({ required: true, type: String, enum: ERole })
  role: ERole

  @Prop({ required: true, type: String, enum: EGender })
  gender: EGender

  @Prop({
    required: true,
    unique: true,
    type: String,
    rex: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
  })
  email: string

  @Prop({
    required: true,
    type: String,
    rex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/,
  })
  @Exclude()
  password: string

  @Prop()
  createdAt: Date

  @Prop()
  updatedAt: Date

  @Prop({ type: Date, default: null })
  deletedAt: Date | null
}

export type UserDocument = HydratedDocument<User>
export const UserSchema = SchemaFactory.createForClass(User)
