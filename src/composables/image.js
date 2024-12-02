const media_url = import.meta.env.VITE_MEDIA_URL

export default function getImage(photo) {
  if (!photo) {
    return 'https://img.freepik.com/vetores-premium/geometrico-minimo-criativo-com-papel-de-parede-de-fundo-de-cor-branca-e-cinza-abstrato-de-formas-dinamicas_176697-503.jpg?semt=ais_hybrid'
  } else {
    return `${media_url}${photo}`
  }
}
