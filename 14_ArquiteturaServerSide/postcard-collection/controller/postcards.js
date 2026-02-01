const fs = require("fs");
// const { postcardsPath } = require("../routes/postcards");
const {MongoClient, ObjectId} = require('mongodb');
const { randomUUID } = require('crypto');
const { connect } = require("http2");

const postcardsPath = './postcards.json';
//exports.postcardsPath = postcardsPath;

const url = 'mongodb://localhost:27017';
const dbName = 'postcardsDB';
const collectionName = 'postcards';

function listAll(res) {
    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

        const postcards = JSON.parse(data);
        res.json(postcards);
    });
};

function listOne(postId, res){

    fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    const postcard = postcards.find((post) => post.id === postId);

    if (!postcard) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    res.json(postcard);
  });
};

function addPost(req, res){
    const { name, cidade, pais, descricao, imageUrl } = req.body;
    //const imageUrl = `https://picsum.photos/400/300`; // Gerador automático de imagens

    const newPostcard = {
        id: randomUUID(),
        name,
        cidade,
        pais,
        descricao,
        imageUrl,
    };

    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

        const postcards = JSON.parse(data);
        postcards.push(newPostcard);

        fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add new postcard.' });
        }

        res.status(201).json(newPostcard);
        });
    });
}

function delPost(res, id) {

    fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if (postcardIndex === -1) {
        return res.status(404).json({ error: 'Postcard not found.' });
    }

    postcards = postcards.filter((item) => item.id !== id);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete postcard.' });
        }

        res.status(204).end();
    });
    });

};

async function listAllMongo(res) {
    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const postcards = await collection.find().toArray();
        res.status(201).json(postcards);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error: 'Failed to add new postcard.'})
    }
    finally{
        await client.close();
    }
};

async function addMongo(req, res){

    const { name, cidade, pais, descricao, imageUrl } = req.body;
    //const imageUrl = `https://picsum.photos/400/300`; // Gerador automático de imagens

    const newPostcard = {
        id: randomUUID(),
        name,
        cidade,
        pais,
        descricao,
        imageUrl,
    };

    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(newPostcard);
        newPostcard._id = result.insertedId;
        res.status(201).json(newPostcard);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error: 'Failed to add new postcard.'})
    }
    finally{
        await client.close();
    }
  
};

exports.listAll = listAll;
exports.listOne = listOne;
exports.addPost = addPost;
exports.delPost = delPost;
exports.addMongo = addMongo;
exports.listAllMongo = listAllMongo