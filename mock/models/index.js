import path from 'path';
import { promises as fsPromise } from 'fs';

console.log(import.meta.url);

// const fileName = path.join(import.meta.url, '../assets/data.json');
const fileName = new URL('../assets/data.json', import.meta.url);

export const getModel = async (modelName = null) => {
  const dataString = await fsPromise.readFile(fileName, 'utf-8');
  const allModels = JSON.parse(dataString);
  return {
    model: allModels[modelName],
    allModels
  };
};

export const getArticle = async id => {
  const { model: articleModel } = await getModel('articles');
  return articleModel.find(({ id: oId }) => oId === id);
};

export const addArticle = async article => {
  const { model: articleModel, allModels } = await getModel('articles');
  const newArticleId = Math.max(...[articleModel.map(({ id }) => Number(id))]) + 1;
  articleModel.push({
    ...article,
    description: article.content[0],
    updateDateTime: new Date().toISOString(),
    id: newArticleId.toString()
  });
  await fsPromise.writeFile(fileName, JSON.stringify(allModels), 'utf-8');
  return articleModel;
};

export const updateArticle = async (id, { title, content, author }) => {
  const { model: articleModel, allModels } = await getModel('articles');
  const indexNeedUpdate = articleModel.findIndex(a => a.id === id);
  articleModel.fill(
    {
      ...articleModel[indexNeedUpdate],
      title,
      description: content[0],
      content,
      author,
      updateDateTime: new Date().toISOString()
    },
    indexNeedUpdate,
    indexNeedUpdate + 1
  );
  await fsPromise.writeFile(fileName, JSON.stringify(allModels), 'utf-8');
  return articleModel;
};

export const deleteArticle = async id => {
  const { allModels } = await getModel();
  const articleModel = allModels['articles'].filter(({ id: oId }) => oId !== id);
  allModels['articles'] = articleModel;
  await fsPromise.writeFile(fileName, JSON.stringify(allModels), 'utf-8');
  return articleModel;
};