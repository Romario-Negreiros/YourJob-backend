import { Model, DataTypes } from 'sequelize'
import db from '../../database'

class Vagancy extends Model {
  public readonly id!: string
  public companyID!: string
  public description!: string
  public salary!: number
  public category!: string
  public position!: string
  public readonly createdAt: Date
  public readonly updatedAt: Date
}

Vagancy.init({
  description: DataTypes.STRING,
  salary: DataTypes.INTEGER,
  category: DataTypes.STRING,
  position: DataTypes.STRING
}, {
  tableName: 'vagancies',
  sequelize: db
})

export default Vagancy
