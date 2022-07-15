<template>
  <div class="home">
    <h1>Accueil</h1>
    <div class="presentation">
      <p>
        Bienvenue sur mon test front end , j'ai pris l'initiative de faire une
        page d'Accueil, certe elle ne sert pas a grand chose , mais pour la
        redirection j'ai trouvé cela un peu plus simple. <br />
        J'espère que cela sera assez bien , je n'ai pas eu le temps pour
        dynamiser le panier, mais j'avais pensé à rajouter un bouton pour
        supprimer des articles du panier
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home{
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
}

h1 {
  text-align: center;
  
}
.presentation{
    width: 60%;    
    border-radius: 10px;
    box-shadow: 0 1px 0.5px 0.5px rgba(42, 42, 43, 0.2);
    display: flex;
    margin-left: 5px;
    margin-right: 5px;    
    justify-content: space-between;
}
</style>