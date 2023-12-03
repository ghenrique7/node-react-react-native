const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const repositories = [];

app.get("/repositories", (request, response) => {
<<<<<<< HEAD
	// TODO
	return response.json(repositories);
});

app.post("/repositories", (request, response) => {
	// TODO
	const { title, url, techs } = request.body;
	const repository = {
		id: uuid(),
		title,
		url,
		techs,
		likes: 0,
	};
=======
  // TODO
  // Listagem
  return response.json( repositories );
});

app.post("/repositories", (request, response) => {
  // TODO
  // Criação
  const { title, url, techs } = request.body;
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }
  
  repositories.push( repository );
>>>>>>> a2170362ca8753867e52d60cdcbc69f7b47c1d45

	repositories.push(repository);

	return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
<<<<<<< HEAD
	// TODO
	const { id } = request.params;
	const { url, title, techs } = request.body;

	const findRepositoryIndex = repositories.findIndex(
		(repository) => repository.id == id
	);

	const newRepository = {
		id,
		title,
		url,
		techs,
	};

	if (findRepositoryIndex < 0) {
		return response.status(400).send();
	}

	repositories[findRepositoryIndex] = newRepository;

	return response.json(repositories);

});

app.delete("/repositories/:id", (request, response) => {
	// TODO
	const { id } = request.params;
=======
  // TODO
  // Atualização
  const { id } = request.params;
  const { title, url, techs } = request.body;

  // Procurar o index no repositório
  const findRepositoryIndex = repositories.findIndex( 
    repository => repository.id == id
   );

   if ( findRepositoryIndex == -1 ){
    return response.status( 400 ).json( {erro: 'Repositório inexistente!'} );
   }

   const repository = {
    id,
    title,
    url,
    techs,

    // Teste: não atualizar manualmente
    likes: repositories[ findRepositoryIndex ].likes
   };

   // Sobrescrever o valor com o novo objeto
   repositories[ findRepositoryIndex ] = repository;

   return response.json( repository );
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
  // Remoção
  const { id } = request.params;
>>>>>>> a2170362ca8753867e52d60cdcbc69f7b47c1d45

	const findRepositoryIndex = repositories.findIndex(
		(repository) => repository.id == id
	);

	if (findRepositoryIndex >= 0) {
		repositories.splice(findRepositoryIndex, 1);
	} else {
		return response.status(400).json({ error: "Repositório inexistente!" });
	}

	return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
<<<<<<< HEAD
	// TODO
	const { id } = request.params;

	const findRepositoryIndex = repositories.findIndex(
		(repository) => repository.id == id
	);

	if (findRepositoryIndex < 0) {
		return response.status(400).send();
	}

	repositories[findRepositoryIndex].likes++;
	const newRepository = repositories[findRepositoryIndex];

	return response.json(newRepository);
=======
  // TODO
  // Criação de likes
  const {id} = request.params;

  const findRepositoryIndex = repositories.findIndex(
    repository => repository.id == id
  );

  if ( findRepositoryIndex == -1 ){
    return response.status( 400 ).json( {error: 'Repositório inexistente!'} ); 
  }
  
  repositories[ findRepositoryIndex ].likes += 1;

  return response.json( repositories[findRepositoryIndex] );
>>>>>>> a2170362ca8753867e52d60cdcbc69f7b47c1d45
});

module.exports = app;
