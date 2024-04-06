## MONGO DB - INSTALANDO O MONGO

- Link para download: [MongoDB](https://www.mongodb.com/try/download/community)

## MONGO DB - CRIANDO UM BANCO

- Comando para criar uma collection `db.createCollection('NOME_COLLECTION')`
- Comando para excluir um Database `db.dropDatabase`
- Comando para trocar/criar uma Database `use NOME_DATABASE`

## MONGO DB - CRIANDO, APAGANDO E MOSTRANDO COLLECTION

- Comando para excluir uma collection `db.NOME_DA_COLLECTION.drop`

## MONGO DB - CRIANDO UM DOCUMENTO

- Comando para criar um documento `db.NOME_DA_COLLECTION.insertOne({ NOME_DO_CAMPO: 'VALOR' })`

- Comando para inserir mais de um documento `db.NOME_DA_COLLECTION.insertMany([{ NOME_DO_CAMPO: 'VALOR' }, { NOME_DO_CAMPO: 'VALOR' }])`

## MONGO DB - SELECIONANDO DOCUMENTOS

- Comando para selecionar todos os documentos `db.NOME_DA_COLLECTION.find()`Comando para selecionar todos os documentos com retorno bonito`db.NOME_DA_COLLECTION.find().pretty()`
- Comando para selecionar um documento `db.NOME_DA_COLLECTION.findOne()`
- Comando para selecionar os documentos `db.NOME_DA_COLLECTION.find({ NOME_DO_CAMPO: 'VALOR' })`
- Comando para selecionar os documentos `db.NOME_DA_COLLECTION.find({ NOME_DO_CAMPO: 'VALOR' }, { NOME_DO_CAMPO: 'VALOR' })`

## MONGO DB - ATUALIZANDO DOCUMENTOS

- Comando para atualizar um documento `db.NOME_DA_COLLECTION.updateOne({ NOME_DO_CAMPO: 'VALOR' }, { $set: { NOME_DO_CAMPO: 'VALOR' } })`

- Comando para atualizar mais de um documento `db.NOME_DA_COLLECTION.updateMany({ NOME_DO_CAMPO: 'VALOR' }, { $set: { NOME_DO_CAMPO: 'VALOR' } })`
- Comando para atualizar e se não existir ele cria: `db.NOME_DA_COLLECTION.update({NOME_DO_CAMPO: VALOR}),({NOME_DO_CAMPO:VALOR},{upsert:true})`

- Comando para renomear um campo : `db.NOME_DA_COLLECTION.update({}, {$rename:{visits:"views"}})`
- Comando para incrementar : `db.NOME_DA_COLLECTION.update({NOME_DO_CAMPO:VALOR}, {$inc:{views:1 / ou qualquer outro valor}})`
