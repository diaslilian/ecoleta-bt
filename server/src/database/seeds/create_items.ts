import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items")
    // .del() remove ALL existing entries
    // .truncate() reset the primary key, so the table will be brought back to its pristine state
    .truncate()
    .then(function () {
      return knex("items").insert([
        { title: "Lâmpadas", image: "lampadas.svg" },
        { title: "Pilhas e Baterias", image: "baterias.svg" },
        { title: "Papéis e Papelão", image: "papeis-papelao.svg" },
        { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
        { title: "Resíduos Orgânicos", image: "organicos.svg" },
        { title: "Óleo de Cozinha", image: "oleo.svg" },
      ]);
    });
}
