## Descripción

Haremos una API con la que ofreceremos **2** **endpoints** con las que se consumirá los siguientes servicios:

- Gente involucrada en los comics de un personaje en especifico (Iron Man y Capitan America)

- Superheroes con las cuales a interactuado con el personaje que se nos pase por parametro con sus respectivos comics

Como debe de estar formado nuestra URL es de la siguiente manera:

- {dominio}/marvel/{servicio}/{personaje}

<br>

---

<br>

## Tener en cuenta

Se utiliza **Redis** para tenerlo en cuenta a la hora de correr el proyecto

<br>

---

<br>

## Endpoints

🗣 **NOTA**: Sustituir **{character}** por el personaje que queramos que deseemos.

<br>

`/marvel/colaborators/{character}`

. Gente involucrada en los comics de un personaje

<br>

`/marvel/characters/{character}`

. Personajes que coinciden en comics de nuestro personaje

<br>

---

<br>

## Ejemplos

Aquí un ejemplo de como nos debe de dar la respuesta a la llamada a los servicios que crearemos:

a) Gente Involucrada

```json
{
  last_sync: "Última actualización: dd/mm/yyyy hh:mm:ss",
  editors: ["Jesus", "Santiago", "Sebastian", ...],
  writers: ["Adrian", "Oscar", "Eddy", ...],
  colorists: ["Manuel", "José", "Lorenia", ...],
}
```

b) Personajes relacionados

```json
{
	last_sync: "Última actualización: dd/mm/yyyy hh:mm:ss",
	characters: [
		{
			character: "Ant Man",
			comics: ["No se Tomo #1", "Tampoco se #1", ...],
		},
		...
	]
}
```

<br>

---
