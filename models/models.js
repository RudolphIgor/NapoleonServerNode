const sequelize = require("../db")
const { DataTypes} = require("sequelize")

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role:  {type: DataTypes.STRING, defaultValue: 'USER'},
},
{
    timestamps: false,
})

// Товары
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true},
},
{
    timestamps: false,
})

// Категории товаров
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true},
},
{
    timestamps: false,
})

// Бранды
const Brand = sequelize.define('brand', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true},
},
{
    timestamps: false,
})

// Картинки
const Image = sequelize.define('image', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true},
},
{
    timestamps: false,
})

// Свойства
const Property = sequelize.define('property', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true},

},
{
    timestamps: false,
})

// Значение
const Value = sequelize.define('value', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, notNull: true},
},
{
    timestamps: false,
})

const ProductProperty = sequelize.define('ProductProperty', {
},
{
    timestamps: false,
})
//
const PropertyValue = sequelize.define('PropertyValue', {
},
{
    timestamps: false,
})
//
const PropertyCategory = sequelize.define('PropertyCategory', {

},
{
    timestamps: false,
})


// Один бренд имеет одно изображение (логотип)
Image.hasOne(Brand)
Brand.belongsTo(Image)

// // Одному бренду может соответствовать несколько товаров
Brand.hasMany(Product)
Product.belongsTo(Brand)
//
// // В категорию может входить несколько товаров
Category.hasMany(Product)
Product.belongsTo(Category)
//
// // У одного товара может быть множество рисунков
Product.hasMany(Image)
Image.belongsTo(Product)
//
// У одной категории может быть один рисунок
Image.hasOne(Category)
Category.belongsTo(Image)
//
//Свойство может быть у нескольких категорий и несколько категорий иметь одно свойство
Property.belongsToMany(Category, {through:PropertyCategory})
Category.belongsToMany(Property, {through:PropertyCategory})
//
//Одна категория может иметь несколько свойств, так и одно свойство может соответствовать нескольким категориям
Property.belongsToMany(Value, {through:PropertyValue})
Value.belongsToMany(Property, {through:PropertyValue})
//
//У одного продукта может быть несколько свойств, а также одно свойство может принадлежать нескольким продуктам
Product.belongsToMany(Property, {through:ProductProperty})
Property.belongsToMany(Product, {through:ProductProperty})
//
Value.hasMany(ProductProperty)
ProductProperty.belongsTo(Value)

module.exports = {
    User,
    Product,
    Category,
    Brand,
    Image,
    Property,
    Value,
    ProductProperty,
    PropertyValue,
    PropertyCategory
}
