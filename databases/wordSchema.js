import Realm from 'realm';
export const WORD_SCHEMA = 'Word'

export const WordSchema = {
    name: WORD_SCHEMA,
    properties: {
        _id: 'int',
        words: {
            type: 'string',
            indexed: true
        },
        word_type: { type: 'string' },
        definitions: { type: 'list' },
        translations: { type: 'list' },
        synonyms: { type: 'list' },
        examples: { type: 'list' },
    }
};

const databaseOptions = {
    path: 'basaApp.realm',
    schema: [WordSchema]
}

export const insertNewWord = newWord => new Promise( (resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write( () => {
            realm.create(WORD_SCHEMA, newWord);
            resolve(newWord);
        })
    }).catch( (error) => reject(error));
});

export const updateWord = word => new Promise( (resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write( () => {
            let updatingWord = realm.objectForPrimaryKey(WORD_SCHEMA, word.id);
            updatingWord.words = word.words;
            resolve();
        });
    }).catch( (error) => reject(error));
});

export const deleteWord = word => new Promise( (resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write( () => {
            let deletingWord = realm.objectForPrimaryKey(WORD_SCHEMA, word.id);
            realm.delete(deletingWord);
            resolve();
        })
    }).catch( (error) => reject(error));
});

export const deleteAllWord = () => new Promise( (resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write( () => {
            let allWord = realm.objects(WORD_SCHEMA);
            realm.delete(allWord);
            resolve();
        })
    }).catch( (error) => reject(error));
});

export const queryAllWord = () => new Promise( (resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        let allword = realm.objects(WORD_SCHEMA);
        resolve(allword);
    }).catch( (error) => reject(error));
});

export default new Realm(databaseOptions);