const sequelize = require("../db")
const { DataTypes} = require("sequelize")

// Товары
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true}
})

// Категории товаров
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true}
})

// Бранды
const Brand = sequelize.define('brand', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true}
})


// Картинки
const Image = sequelize.define('image', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true}
})

// Свойства
const Property = sequelize.define('property', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true}
})

// Значение
const Value = sequelize.define('value', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, notNull: true}
})


// Один бренд имеет одно изображение (логотип)
Brand.hasOne(Image)
Image.belongsTo(Brand)

// Одиному бренду может соответствовать несколько товаров
Brand.hasMany(Product)
Product.belongsTo(Brand)

// В категорию может входить несколько товаров
Category.hasMany(Product)
Product.belongsTo(Category)

// У одного товара может быть множество рисунков
Image.hasMany(Product)
Product.belongsTo(Image)

// У одной категории может быть один рисунок
Category.hasOne(Image)
Image.belongsTo(Category)

//Свойство может быть у нескольких категорий и несколько категорий иметь одно свойство
Property.belongsToMany(Category, {through:'PropertyCategory'})
Category.belongsToMany(Property, {through:'PropertyCategory'})

//Одна категория может иметь несколько свойств, так и одно свойство может соответствовать нескольким категориям
Property.belongsToMany(Value, {through:'PropertyValue'})
Value.belongsToMany(Property, {through:'PropertyValue'})

//У одного продукта может быть несколько свойств, а также одно свойство может принадлежать нескольким продуктам
Product.belongsToMany(Property, {through:'ProductProperty'})
Property.belongsToMany(Product, {through:'ProductProperty'})