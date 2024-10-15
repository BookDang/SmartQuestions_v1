import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsNumberString } from 'class-validator'
import { HydratedDocument } from 'mongoose'
import { User } from '@/users/entities/user.entity'

@Schema()
export class Teacher extends User {
  @Prop({ required: true, type: [String]})
  expertise: string[]

  @Prop({ required: true, type: IsNumberString})
  salary: number

  @Prop({ required: true, type: String, minlength: 1, maxlength: 255 })
  level: string
}

export type TeacherDocument = HydratedDocument<Teacher>
export const TeacherSchema = SchemaFactory.createForClass(Teacher)
